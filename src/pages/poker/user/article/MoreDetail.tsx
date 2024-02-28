import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { blogDetailRead } from '../../../../utils/functions/user/blog'

export default function MoreDetail() {

    let { id } = useParams();

    const [detailInfo, setDetailInfo] = useState({
        image: "",
        title: "",
        content: "",
        contributor: "",
        createdAt: ""
    })

    useEffect(() => {
        async function fetchData() {
            let result = await blogDetailRead(id).then()
            setDetailInfo(result)
        }
        fetchData()
    }, [id])

    return (
        <div className='flex justify-center'>
            <div className='w-[1000px]'>

                <div className='flex justify-between items-center'>
                    <p className='mr-4 mt-4'>contributor</p>
                    <p>{detailInfo.createdAt.toString().slice(0, 10).split("-").join(" / ")}</p>
                </div>
                <div className='flex justify-center'>
                    <p className='text-center font-bold text-[32px] w-2/3 my-8 leading-9'>{detailInfo.title}</p>
                </div>

                <div className="w-full h-[300px] rounded-[8px] my-24 mt-8 border border-gray-900">
                    <img src={detailInfo.image} className="w-full h-full object-cover rounded-[8px]" alt={detailInfo.image} />
                </div>

                <p className='text-[18px] leading-8'>{detailInfo.content}</p>
            </div>
        </div>
    )
}