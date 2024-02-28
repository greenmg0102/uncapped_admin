import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';

export default function News({ data }: any) {

    return (
        <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 2000 }} direction="vertical" className="mx-auto mb-5 rounded-[4px] transition-all" id="slider3">
            <div className="swiper-wrapper">
                {data.map((item: any, i: any) => {
                    return (
                        <SwiperSlide key={i}>
                            <img src={item.image} className="w-full opacity-[0.7]" alt={item.title} />
                            <div className="absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center">
                                {/* <div className="sm:text-xl text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div> */}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </div>
        </Swiper>
    )
}