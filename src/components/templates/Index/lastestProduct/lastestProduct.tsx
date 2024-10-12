"use client";
import React from 'react'
import TopSectionTitle from '@/components/modules/TopSectionTitle/TopSectionTitle'
import ProductBox from '@/components/modules/ProductBox/ProductBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useGetProductsQuery } from '@/redux/api/productApi';


export default function LastestProduct() {

    const { data: products } = useGetProductsQuery()
    return (
        <section className=' bg-mainBg mt-20 py-6'>
            <div className=' container'>
                <TopSectionTitle title="جدیدترین محصولات" />
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
                        {products?.map((product) => (
                            <SwiperSlide key={product._id}>
                                <ProductBox {...product} />
                            </SwiperSlide>

                        ))}

                    </Swiper>
                </div>
            </div>
        </section>
    )
}
