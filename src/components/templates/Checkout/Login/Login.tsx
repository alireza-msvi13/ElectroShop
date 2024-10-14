"use client";
import Button from '@/components/modules/Button/Button';
import React, { useState } from 'react'
import { FaKey } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Login() {
    const [isUserWantToLogin, setIsUserWantToLogin] = useState(false)

    return (
        <div className=' col-span-12 lg:col-span-6'>
            <div className=' bg-[#f4f5f9] flex items-center cursor-pointer gap-0.5 vsm:gap-2 py-4 px-2 vsm:p-4 lg:mb-8 rounded-lg ' onClick={() => {
                setIsUserWantToLogin(prevState => !prevState)
            }}>
                <FaUser className=' text-main mb-1 ml-0.5 vsm:ml-0' />
                <span className='text-[#8e8e90] text-xs sm:text-base tracking-tighter vsm:tracking-normal'>قبلا ثبت نام کردی؟</span>
                <span className=' text-main text-xs sm:text-sm'>برای ورود اینجا رو کلیک کن</span>
            </div>

            <div className={` ${isUserWantToLogin ? " h-[27rem] sm:h-96 mt-8" : "h-0 mt-0"}  overflow-hidden transition-all duration-500`}>
                <div className='p-8  space-y-6 border border-mainBorder  rounded-lg '>
                    <p className=' text-xs sm:text-sm  text-mainGray'>اگه قبلا ثبت کردی و از ما خرید داشتی و همین جا اطلاعاتت رو وارد  کن تا وارد اکانت بشی</p>
                    <div className="flex flex-col relative">
                        <input type="text" id="email"
                            className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                            placeholder="ایمیل" autoComplete="off" />
                        <span className='absolute left-4 top-3 text-main'>
                            <MdEmail className=' text-2xl' />
                        </span>
                    </div>
                    <div className="flex flex-col relative">
                        <input type="text" id="email"
                            className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                            placeholder="رمز عبور" autoComplete="off" />
                        <span className='absolute left-4 top-3 text-main'>
                            <FaKey className=' text-2xl' />
                        </span>
                    </div>
                    <div className=' flex items-center justify-between'>
                        <div className=" flex items-center text-sm  gap-1">
                            <input className=" cursor-pointer" type="checkbox" name="checkbox" id='remeberme' />
                            <label className=" text-mainGray cursor-pointer" htmlFor="remeberme"><span>

                                منو فراموش نکن
                            </span></label>
                        </div>
                        <span className=' text-sm'>فراموشی رمز عبور</span>
                    </div>
                    <div className=' flex justify-end'>
                        <Button text="ورود" style="bg-main" />

                    </div>
                </div>
            </div>

        </div>
    )
}
