"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide/Slide';

const SwiperBanners = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide pic='hero-3.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide pic='hero-2.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide pic='hero-1.webp' />
                </SwiperSlide>

            </Swiper>
        </>
    )
}
export default SwiperBanners