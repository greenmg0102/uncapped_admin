import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { blogRead } from '../../../../utils/functions/admin/blogManaging/BlogManaging'

export default function ArticleItem({ item }: any) {

    const [blogList, setBlogList] = useState([])
    const [blogListInfo, setBlogListInfo] = useState({
        type: -1,
        title: "",
        content: "",
        image: [],
    })

    useEffect(() => {
        async function fetchData() {
            let result = await blogRead(blogListInfo).then()
            setBlogList(result)
        }
        fetchData()
    }, [])

    return (
        <div className="mb-2 border border-gray-800 rounded-[8px] sm:p-2 flex justify-between items-start hover:border-gray-600 transition-all cursor-pointer">
            <div className="w-0 h-0 md:w-[350px] md:h-[220px] rounded-[8px] border border-gray-900 transition-all">
                <img src={item.image} className="w-full h-full object-cover rounded-[8px] opacity-[0.7] transition-all" alt={item.image} />
            </div>
            <div
                className="relative px-2 py-2 h-[220px] w-full md:w-[calc(100%-350px)] overflow-hidden"
            >
                <p className="text-gray-[100] h-[40px] mb-2 text-[18px] text-gray-300">
                    {item.title.length > 40 ? item.title.slice(0, 500).concat(" . . .") : item.title}
                </p>
                <p className="text-gray-[100] h-[130px] overflow-hidden text-[16px] py-2 mb-1">
                    {item.content.length > 500 ? item.content.slice(0, 500).concat(" . . .") : item.content}
                </p>
                <div className='flex justify-between items-center'>
                    <Link to={`/user/poker/article-detail/${item._id}`} target="_blank" className="rounded-[4px] bg-blue-800 text-gray-200 py-[2px] px-1 mb-0 flex justify-start items-center cursor-pointer hover:bg-blue-600 transition-all">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="zoom-in" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path></svg>
                        <p className='ml-0'> More Detail </p>
                    </Link>
                    <Link to={`/user/poker/contributor-article/${item._id}`} target="_blank" className="border py-1 px-2 border-green-800 rounded-[4px] hover:border-green-500 transition-all cursor-pointer">
                        contributor
                    </Link>
                    <p>1-11-2024</p>
                </div>

            </div>
        </div>
    )
}