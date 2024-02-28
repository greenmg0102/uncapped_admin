import { useState, useEffect } from "react"

import { postGet, answerSend } from '../../../../utils/functions/admin/support'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import SupportItem from './SupportItem'

export default function Support() {

    const MySwal = withReactContent(Swal);

    const [list, setList] = useState<any>([])

    const [active, setActive] = useState<string>('1');
    const togglePara = (value: string) => {
        setActive((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {

        async function fetchData() {
            const data = {}
            let result = await postGet(data)
            setList(result)
        }

        fetchData()
    }, [])

    const updateQuestion = async (id: any, answer: any) => {

        let data = {
            id: id,
            answer: answer
        }

        let result = await answerSend(data)
        if (result.isOk) alert("Successfully submitting!", "success")
        else alert("Failed submitting!", "danger")
    }

    const alert = (title: any, color: any) => {
        MySwal.fire({
            title: title,
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 2000,
            showCloseButton: true,
            customClass: { popup: `color-${color}` }
        });
    }

    return (
        <div>
            <div className="mb-5">
                <div className="space-y-2 font-semibold">
                    {list.map((item: any, index: any) =>
                        <SupportItem
                            key={index}
                            item={item}
                            order={index}
                            active={active}
                            alert={(title: any, color: any) => alert(title, color)}
                            togglePara={(each: any) => togglePara(each)}
                            updateQuestion={(id: any, answer: any) => updateQuestion(id, answer)}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}