import React from 'react'
import Newsleter from './Newsleter/Newsleter'
import Link from 'next/link'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image';

const Footer:React.FC = () => {
    return (
        <>
            <Newsleter />
            <footer>
                <div className="container py-12  ">
                    <div className=' grid grid-cols-12 gap-6 mb-6 border-b-2 pb-8 border-mainBorder'>
                        <div className=' col-span-12 lg:col-span-3'>
                            <Link href={'/'} className=' flex justify-start items-center text-main text-3xl md:text-4xl'>
                                <PiShoppingCartSimpleFill className=' text-4xl md:text-5xl' />
                                <h3 className=' font-morabba pl-1 '>الکتروشاپ</h3>
                            </Link>
                            <p className=' text-mainGray py-4 text-sm leading-7'>
                                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد
                            </p>
                            <ul className=' space-y-2'>
                                <li className=' flex items-center gap-1'>
                                    <FaUser className=' text-main text-xl' />
                                    <Link href={'/'}>09127482365</Link>
                                </li>
                                <li className=' flex items-center gap-1'>
                                    <MdEmail className=' text-main text-xl' />
                                    <Link href="mailto:alireza.edk13@gmail.com">alireza.edk13@gmail.com</Link>
                                </li>
                                <li className=' flex items-center gap-1'>
                                    <MdLocationPin className=' text-main text-xl' />
                                    <Link href={'/'}>تهران سعادت آباد</Link>
                                </li>
                                <li className=' flex items-center gap-1'>
                                    <FaClock className=' text-main text-xl' />
                                    <Link href={'/'}>شنبه تا چهارشنبه 9  صبح تا 6 عصر</Link>
                                </li>
                            </ul>

                        </div>
                        <div className='  col-span-12 sm:col-span-6  lg:col-span-2'>
                            <h4 className=" pb-5 mb-5 font-semibold text-lg footer-list-title relative">دسترسی سریع</h4>
                            <div className=" child:block child:text-sm space-y-3">
                                <Link href="/">بلاگ</Link>
                                <Link href="/">خرید گوشی</Link>
                                <Link href="/">گوشی سامسونگ</Link>
                                <Link href="/">گوشی آیفون</Link>
                                <Link href="/">هندزفری بلوتوثی</Link>
                                <Link href="/">لپ تاپ ایسوس</Link>
                                <Link href="/">هارد اکسترنال</Link>
                            </div>
                        </div>
                        <div className= ' col-span-12 sm:col-span-6 lg:col-span-2'>
                            <h4 className=" pb-5 mb-5 font-semibold text-lg footer-list-title relative">درباره ما</h4>
                            <div className=" child:block child:text-sm space-y-3">
                                <Link href="/">درباره ما</Link>
                                <Link href="/">اهداف و تعهدهای ما</Link>
                                <Link href="/">فروشگاه های حضوری</Link>
                                <Link href="/">سرگذشت الکتروشاپ</Link>
                                <Link href="/">بلاگ</Link>
                                <Link href="/">تماس با ما</Link>
                                <Link href="/">سوالات متداول</Link>

                            </div>
                        </div>
                        <div className='   col-span-12 sm:col-span-6 lg:col-span-2'>
                            <h4 className=" pb-5 mb-5 font-semibold text-lg footer-list-title relative">قوانین و مقررات</h4>
                            <div className=" child:block child:text-sm space-y-3">
                                <Link href="/">قوانین و مقررات</Link>
                                <Link href="/">حریم خصوصی کاربران</Link>
                                <Link href="/">از زبان مشتریان</Link>
                                <Link href="/">چراالکتروشاپ؟</Link>
                            </div>
                        </div>
                        <div className=" col-span-12 sm:col-span-6 lg:col-span-3">
                            <div className="footer-list-box">
                                <h4 className=" pb-5 mb-5 font-semibold text-lg footer-list-title relative">
                                    نصب اپ موبایل
                                </h4>
                                <p className=' text-sm  font-semibold'>الکتروشاپ اپ از الان در گوگل پلی و اپ استور موجوده</p>
                                <div className=" mb-10 mt-5">
                                    <div className=" flex items-center gap-4 my-6 text-white">
                                        <Link href="/" className=' flex-center gap-2 bg-main p-2 rounded-lg'>
                                            <FaGooglePlay className=' text-xl' />
                                            <div>
                                                <span className=' text-xs'>دانلود از</span>
                                                <h6 className=' text-sm'>Google Play</h6>
                                            </div>
                                        </Link>
                                        <Link href="/" className=' flex-center gap-2 bg-main p-2 rounded-lg'>
                                            <FaApple className=' text-xl' />

                                            <div>
                                                <span className=' text-xs'>دانلود از</span>
                                                <h6 className=' text-sm'>App Store</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <Image width={224} height={32} src="/images/payment-method.webp" alt="paymentMethod" />
                            </div>
                        </div>
                    </div>
                    {/* copy right */}
                    <div className="  flex justify-between flex-wrap">
                        <p className="copyright-text">
                            ©    1403
                            تمامی حقوق مادی و معنوی این سایت متعلق به الکتروشاپ می‌باشد.
                        </p>
                        <div className=' flex-center gap-2'>
                            <span>شبکه های اجتماعی ما:</span>
                            <div className=" grid grid-cols-4 gap-2">
                                <Link href={'/'} className=' bg-mainBg rounded-full p-3 transition-all duration-200 hover:text-white hover:bg-main'>
                                   <FaGoogle/>
                                </Link>
                                <Link href={'/'} className=' bg-mainBg rounded-full p-3 transition-all duration-200 hover:text-white hover:bg-main'>
                                   <FaFacebook/>
                                </Link>
                                <Link href={'/'} className=' bg-mainBg rounded-full p-3 transition-all duration-200 hover:text-white hover:bg-main'>
                                   <FaLinkedinIn/>
                                </Link>
                                <Link href={'/'} className=' bg-mainBg rounded-full p-3 transition-all duration-200 hover:text-white hover:bg-main'>
                                   <FaYoutube/>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer