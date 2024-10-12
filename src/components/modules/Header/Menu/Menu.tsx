import React from 'react'
import Link from 'next/link'

const Menu: React.FC = () => {
    return (
        <div className='hidden xl:flex-center gap-16 '>
            <ul className='flex-center child:cursor-pointer gap-5 xxl:gap-10'>
                <li>
                    <Link href={'/'}>صفحه اصلی</Link>
                </li>
                <li className='relative group'>
                    <div>محصولات</div>
                    <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-163px] top-full pt-7 transition-all ease duration-300  z-20`}>
                        <div className='flex flex-col text-justify  child:rounded-md capitalize child:transition-all text-mainBlack  shadow-custom child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-lg bg-white'>
                            <Link href={'/products-list'}>لیست محصولات</Link>
                            <Link href={'/product-details/66d5cc2549d61690c9754aaf'}>جزییات محصولات</Link>
                        </div>

                    </div>
                </li>
                <li className='relative group'>
                    <div>صفحات</div>
                    <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-163px] top-full pt-7 transition-all ease duration-300  z-20`}>
                        <div className='flex flex-col text-justify  child:rounded-md capitalize child:transition-all child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-lg bg-white text-mainBlack  shadow-custom '>
                            <Link href={'/register'}>ثبت نام</Link>
                            <Link href={'/login'}>ورود</Link>
                            <Link href={'/cart'}>سبد خرید</Link>
                            <Link href={'/checkout'}>تسویه حساب</Link>
                        </div>
                    </div>
                </li>

                <li className='relative group'>
                    <div>مقاله</div>
                    <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-163px] top-full pt-7 transition-all ease duration-300  z-20`}>
                        <div className='flex flex-col  child:rounded-md capitalize child:transition-all text-mainBlack text-justify  child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-lg bg-white shadow-custom'>
                            <Link href={'/blogs-list'}>لیست مقالات</Link>
                            <Link href={'/blog-details'}>جزییات مقاله</Link>
                        </div>

                    </div>
                </li>
                <li>
                    <Link href={'/contact'}>ارتباط با ما</Link>
                </li>

            </ul>
        </div>
    )
}


export default Menu