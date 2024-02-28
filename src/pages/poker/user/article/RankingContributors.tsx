import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

export default function RankingContributors({ data }: any) {

    return (
        <div className="swiper my-8" id="slider5">
            <div className="swiper-wrapper">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: '.swiper-button-next-ex5',
                        prevEl: '.swiper-button-prev-ex5',
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                    }}
                    dir="rtl"
                    key={'true'}
                >
                    {data.map((item: any, i: any) => {
                        return (
                            <SwiperSlide key={i}>
                                <Link to={`/user/poker/contributor-article/${item._id}`} target="_blank" className="">
                                    <img src={`/assets/images/${item}`} className="w-full" alt="itemImg" />
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                    {data.map((item: any, i: any) => {
                        return (
                            <SwiperSlide key={i}>
                                <Link to={`/user/poker/contributor-article/${item._id}`} target="_blank" className="">
                                    <img src={`/assets/images/${item}`} className="w-full" alt="itemImg" />
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}