import { useState, useEffect } from 'react'
import ArticleItem from './ArticleItem'
import ContributorInfo from './ContributorInfo'
import { blogRead } from '../../../../utils/functions/admin/blogManaging/BlogManaging'

export default function ContributorsArticle() {

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
        <div className='flex justify-center'>
            <div className='w-[1000px]'>
                <ContributorInfo />
                {blogList.map((item: any, index: any) =>
                    <ArticleItem
                        key={index}
                        item={item}
                    />
                )}
            </div>
        </div>
    )
}