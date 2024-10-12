"use client";

import React from 'react'
import CommentCart from './CommentCart/CommentCart'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


export default function Comments() {
    return (
        <section className=' bg-mainBg py-6 mt-20'>
            <div className=' container '>
                <div className=" mb-10 text-center">
                    <h6 className=' uppercase'>رضایت مندی کاربران</h6>
                    <h4 className=' font-morabba font-semibold text-xl sm:text-3xl mt-2'>مشتری ها درباره ما <span className=' text-main'>چی میگن !</span></h4>
                </div>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <CommentCart user="علی صفری" profile="person2.webp" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CommentCart user="ملینا عبدی" profile="person1.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentCart user="سارا مولایی" profile="person3.webp" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CommentCart user="فریده معینی" profile="person4.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentCart user="اکرم گرجی" profile="person1.webp" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}
