import Btn from '@/components/modules/Btn/Btn'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Slide = ({ pic }: { pic: string }) => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 p-10 sm:p-16">
            <Link href="/" className=' flex-center sm:block'>
                <Image src={`/images/slider/${pic}`} alt="img" className='size-auto' width={367} height={400} priority={true} />
            </Link>
            <div className=' my-auto order-last md:order-first'>
                <div className=" text-center space-y-6 ">
                    <h4 className=" text-main font-bold text-xl">تا 70 درصد تخفیف</h4>
                    <h2 className="font-bold font-morabba text-2xl sm:text-3xl sm:leading-[3rem] xxl:text-[2.5rem] xxl:leading-[3.5rem]">
                        <span>تا 70 درصد تخفیف در</span>
                        <div> فروشگاه <span className=" text-main">الکتروشاپ</span></div>
                    </h2>
                    <p className=" text-mainGray text-sm font-normal">
                        یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد
                    </p>
                    <div className=' flex-center'>
                        <Btn href={'/products-list'} text="محصولات" style=" mb-4" />
                    </div>
                </div>
            </div>


        </div>
    )
}


export default Slide