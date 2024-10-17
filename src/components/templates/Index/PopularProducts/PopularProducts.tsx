"use client";
import React from 'react'
import TopSectionTitle from '@/components/modules/TopSectionTitle/TopSectionTitle'
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


export default function PopularProduct() {
    return (
        <section className=' bg-mainBg mt-20 py-6'>
            <div className=' container'>
                <TopSectionTitle title="محبوب ترین محصولات" />
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                            1400: {
                                slidesPerView: 5,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {/* {products.map((product) => (
                            <SwiperSlide key={product._id}>
                                <ProductBox {...product} />
                            </SwiperSlide>

                        ))} */}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
