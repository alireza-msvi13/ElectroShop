"use client";
import Button from '@/components/modules/Button/Button';
import React, { useState } from 'react'
import { FaGem } from "react-icons/fa";

export default function DiscountCode() {
  const [isIsApplyCodeBoxOpen, setIsApplyCodeBoxOpen] = useState(false)

  return (
    <div className=' col-span-12 lg:col-span-6'>
      <div className=' bg-[#f4f5f9] flex items-center cursor-pointer gap-0.5 vsm:gap-2 py-4 px-2 vsm:p-4 lg:mb-8 rounded-lg '
        onClick={() => {
          setIsApplyCodeBoxOpen(prevState => !prevState)
        }}>
        < FaGem className=' text-main mb-1 ml-0.5 vsm:ml-0' />
        <span className='text-[#8e8e90] text-xs sm:text-base tracking-tighter vsm:tracking-normal '>کد تخفیف داری؟</span>
        <span className=' text-main text-xs sm:text-sm'>برای وارد کردن کد اینجا رو کلیک کن</span>
      </div>


      <div className={` ${isIsApplyCodeBoxOpen ? " h-72 sm:h-60 mt-8" : "h-0 mt-0 "} overflow-hidden transition-all duration-500`}>
        <div className='p-8  space-y-6 border border-mainBorder  rounded-lg '>
          <p className=' text-xs sm:text-sm  text-mainGray'>اگه کد تخفیف داری تو قسمت زیر وارد کن تا اعمال بشه</p>
          <div className="flex flex-col relative">
            <input type="text" id="email"
              className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
              placeholder="کد تخفیف" autoComplete="off" />
            <span className='absolute left-4 top-3 text-main'>
              <FaGem className=' text-2xl' />
            </span>
          </div>
          <div className=' flex justify-end'>
            <Button text="اعمال کردن" style="bg-main"/>
          </div>
        </div>
      </div>
    </div>
  )
}
