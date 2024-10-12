import React from 'react'
import Btn from '@/components/modules/Btn/Btn'
import Image from 'next/image'

export default function DealBox({ pic, title, newPrice }: { title: string, pic: string, newPrice: number }) {
    return (
        <div className="relative rounded-lg">
            <Image
                src={`/images/banner/${pic}.webp`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full -scale-x-100 rounded-lg sm:h-[500px]"
                alt='offer'
            />
            <div className=' absolute right-6 sm:right-14 top-8 sm:top-4 md:top-12'>
                <h5 className=' text-main text-sm sm:text-xl'>جشنواره روزانه</h5>
                <p className=' font-normal pt-1 text-sm hidden sm:block'>تعداد محدود</p>
                <h4 className=' font-morabba text-lg md:text-2xl w-48 sm:w-60 pt-2 pb-8 sm:py-2  md:py-5  tracking-wide'>{title}</h4>
                <div className=' mb-5 hidden sm:flex items-center gap-1 sm:gap-2'>

                    <div className="  flex-center gap-1 text-lg  line-through text-mainGray">
                        <span>{newPrice}</span>
                        <span>تومان</span>
                    </div>
                    <div className=" text-2xl flex-center gap-1 font-semibold text-main mr-2 ">
                        <span>{newPrice}</span>
                        <span>تومان</span>
                    </div>
                </div>
                <div>
                    <p className=' text-sm font-normal mb-1 sm:mb-4 hidden sm:block'>عجله کن! تخفیف داره تموم میشه</p>
                    <div className=" mb-2 md:mb-6 hidden sm:flex flex-row-reverse items-center justify-end gap-6">
                        <span className=' flex flex-col justify-center items-center '>
                            <span className=" bg-main text-white p-2 sm:p-3 text-sm sm:text-lg relative rounded-lg coundown-time">03</span>
                            <span className=" uppercase text-[12px] text-mainGray tracking-wide">روز</span>
                        </span>
                        <span className=' flex flex-col justify-center items-center '>
                            <span className=" bg-main text-white p-2 sm:p-3 text-sm sm:text-lg relative rounded-lg coundown-time">20</span>
                            <span className=" uppercase text-[12px] text-mainGray tracking-wide">ساعت</span>
                        </span>
                        <span className=' flex flex-col justify-center items-center '>
                            <span className=" bg-main text-white p-2 sm:p-3 text-sm sm:text-lg relative rounded-lg coundown-time">12</span>
                            <span className=" uppercase text-[12px] text-mainGray tracking-wide">دقیقه</span>
                        </span>
                        <span className=' flex flex-col justify-center items-center '>
                            <span className=" bg-main text-white p-2 sm:p-3 text-sm sm:text-lg relative rounded-lg ">33</span>
                            <span className=" uppercase text-[12px] text-mainGray tracking-wide ">ثانیه</span>
                        </span>

                    </div>
                    <Btn text="خرید محصول" href={'/products-list'} />
                </div>

            </div>
        </div>

    )
}
