import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { blogRead } from '../../../../utils/functions/admin/blogManaging/BlogManaging'

const NewsItem = () => {

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
        <Link
            to="/user/poker/article"
            className='relative w-full flex justify-center items-center h-[350px] border rounded-[6px] border-gray-700 border-dashed transition-all hover:border-solid cursor-pointer hover:border-gray-500'
        >
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{ nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                className="swiper w-full"
                id="slider2"
                dir={'rtl'}
                key={'true'}
            >
                <div className="swiper-wrapper">
                    {blogList.map((item: any, i: any) => {
                        return (
                            <SwiperSlide key={i}>
                                <img
                                    src={item.image}
                                    className="w-full h-[350px] object-cover bg-green-900 rounded-[8px] opacity-[0.5]"
                                    alt="itemImage"
                                    style={{
                                        background: "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
                                    }}
                                />
                            </SwiperSlide>
                        );
                    })}
                </div>
            </Swiper>
        </Link>
    );
};

export default NewsItem;