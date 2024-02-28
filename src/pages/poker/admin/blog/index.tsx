import { useState, useEffect } from 'react'
import CreatingModal from './creatingModal'
import BlogItem from './blogItem'
import { blogRead } from '../../../../utils/functions/user/blog'

export default function BlogAdmin() {

    const [isOpen, setIsOpen] = useState(false)
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

    const onChange = (type: any, value: any) => setBlogListInfo({ ...blogListInfo, [type]: value })

    const Search = () => {

    }

    return (
        <div>

            <div className='flex justify-between items-center mb-4'>

                <div className='flex justify-start items-center'>


                    <input type="text" className="form-textarea ltr:rounded-l-none rtl:rounded-r-none text-[14px] mr-2" placeholder='Please type the Hint' onChange={(e: any) => onChange("title", e.target.value)} />
                    <div className='flex justify-end'>
                        <select className="w-[200px] form-select border-primary text-primary mr-2" onChange={(e: any) => onChange("type", Number(e.target.value))}>
                            <option value="-1">Please select the type</option>
                            <option value="0">Blog</option>
                            <option value="1">News</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        className="btn btn-success rounded-l"
                        onClick={Search}
                    >
                        Search
                    </button>

                </div>
                <button
                    type="button"
                    className="btn btn-primary rounded-l"
                    onClick={() => setIsOpen(true)}
                >
                    Regist
                </button>
            </div>

            {blogList.map((item: any, index: any) =>
                <BlogItem
                    key={index}
                    item={item}
                />
            )}
            <CreatingModal
                isOpen={isOpen}
                setIsOpen={(bool: any) => setIsOpen(bool)}
                setBlogList={(result: any) => setBlogList(result)}
            />
        </div>
    )

}