import { useState, useEffect } from "react"
import { notificationCreate, notificationRead, notificationDelete } from '../../../../utils/functions/admin/notification/notificationManaging'

export default function Notification() {

    const [value, setValue] = useState({ title: "", content: "", sender: "" })
    const [list, setList] = useState([])

    useEffect(() => {
        async function fetchData() {
            let result = await notificationRead({})
            setList(result)
        }
        fetchData()
    }, [])

    const create = async () => {
        if (
            value.title.length > 0 &&
            value.content.length > 0 &&
            value.sender.length > 0
        ) {
            let result = await notificationCreate(value)
            setList(result)
        }
    }

    const itemDelete = async (id: any) => {
        let result = await notificationDelete(id)
        setList(result)
    }

    return (
        <div>
            <div className="flex justify-start items mb-4">
                <input type="text" placeholder="Title" className="form-input w-[200px] mr-4" required onChange={(e: any) => setValue({ ...value, title: e.target.value })} />
                <input type="text" placeholder="Content" className="form-input w-[500px] mr-4" required onChange={(e: any) => setValue({ ...value, content: e.target.value })} />
                <input type="text" placeholder="Sender" className="form-input w-[200px] mr-4" required onChange={(e: any) => setValue({ ...value, sender: e.target.value })} />
                <button type="button" className="btn btn-primary" onClick={create}>Create</button>
            </div>
            {list.map((item: any, index: any) =>
                <div
                    key={index}
                    className='flex justify-between items-ceter mb-1 border border-dashed hover:border-solid border-gray-300 p-1 rounded-[4px] transition-all cursor-pointer'
                >
                    <p className="w-[20px]">{index + 1}</p>
                    <p>{item.title}</p>
                    <p>{item.content}</p>
                    <p>{item.sender}</p>
                    <p>{item.date}</p>
                    <div
                        className="py-1 px-2 border border-red-500 rounded-[4px] text-red-500"
                        onClick={() => itemDelete(item._id)}
                    >
                        Delete
                    </div>
                </div>
            )}
        </div>
    )
}