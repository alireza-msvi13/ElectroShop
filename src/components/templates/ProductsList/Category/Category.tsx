import React from 'react'

export default function Category() {
    return (
        <div className=' bg-mainBg rounded-lg p-10 mt-[6.8rem]'>
            <h5 className=' font-semibold border-b pb-4 border-mainBorder mb-8'>دسته بندی ها</h5>
            <ul className=' child:cursor-pointer space-y-4'>
                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                    <span>هدفون</span>
                    <span className=' text-mainGray'>(125)</span>
                </li>
                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                    <span>لب تاب</span>
                    <span className=' text-mainGray'>(125)</span>
                </li>
                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                    <span>کامپیوتر</span>
                    <span className=' text-mainGray'>(125)</span>
                </li>
                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                    <span>موبایل</span>
                    <span className=' text-mainGray'>(125)</span>
                </li>
                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                    <span>لوازم جانبی</span>
                    <span className=' text-mainGray'>(125)</span>
                </li>
                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                    <span>گیمینگ</span>
                    <span className=' text-mainGray'>(125)</span>
                </li>
                <li className=' flex justify-between border-mainBorder items-center text-main text-sm'>
                    <span>دسته بازی</span>
                    <span className=' text-mainGray'>(125)</span>
                </li>

            </ul>
        </div>
    )
}
