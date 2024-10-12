import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StaticBanners = () => {
    return (
        <>

            <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 xxl:block xxl:space-y-6'>
                <div className=" relative rounded-lg w-full">
                    <Image src="/images/banner/ban2.webp" className=' rounded-lg w-full h-auto -scale-x-100' alt="img" width={442} height={248} />
                    <div className=" absolute  right-8 top-7 sm:top-10">
                        <span className=" bg-main text-sm text-white w-6 h-4 py-2 px-4 rounded-full font-normal">بهترین قیمت</span>
                        <h4 className=" font-morabba my-4 vsm:my-6 text-sm  vsm:text-lg sm:text-xl  w-40 vsm:w-52 tracking-wide">بهترین مجموعه خرید لب تاپ و تب لت در بازار</h4>
                        <Link href="/products-list" className=' text-sm border-b-[2px] border-mainBlack pb-1'> همین الان اقدام کن</Link>
                    </div>
                </div>
                <div className=" relative rounded-lg w-full">
                    <Image src="/images/banner/ban1.webp" className=' rounded-lg w-full h-auto  -scale-x-100' alt="img" width={442} height={248} />
                    <div className=" absolute  right-8 top-7 sm:top-10">
                        <span className=" bg-main text-sm text-white w-6 h-4 py-2 px-4 rounded-full font-normal">بالاترین کیفیت</span>
                        <h4 className=" font-morabba my-4 vsm:my-6 text-sm  vsm:text-lg sm:text-xl  w-40 vsm:w-52 tracking-wide">بهترین قیمت خرید پلی استیشن PS4 و PS5 </h4>
                        <Link href="/products-list" className=' text-sm border-b-[2px] border-mainBlack pb-1'> همین الان اقدام کن</Link>
                    </div>
                </div>
                

            </div>
        </>
    )
}
export default StaticBanners