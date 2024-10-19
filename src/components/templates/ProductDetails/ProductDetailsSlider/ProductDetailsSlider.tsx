"use client";

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

interface ProductDetailsSliderProps {
  cover: string;
}

export default function ProductDetailsSlider({ cover }: ProductDetailsSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            priority
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg border-mainBorder border"
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/public/covers/${cover}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg border-mainBorder border"
            src="/images/product/product-2.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg border-mainBorder border"
            src="/images/product/product-3.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg border-mainBorder border"
            src="/images/product/product-4.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg border-mainBorder border"
            src="/images/product/product-5.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg border-mainBorder border"
            src="/images/product/product-6.webp"
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            priority
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg mt-2 border-mainBorder border"
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/public/covers/${cover}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg mt-2 border-mainBorder border"
            src="/images/product/product-2.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg mt-2 border-mainBorder border"
            src="/images/product/product-3.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg mt-2 border-mainBorder border"
            src="/images/product/product-4.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg mt-2 border-mainBorder border"
            src="/images/product/product-5.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={0}
            height={0}
            alt="product-img"
            sizes="100vw"
            className="w-full h-auto rounded-lg mt-2 border-mainBorder border"
            src="/images/product/product-6.webp"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
