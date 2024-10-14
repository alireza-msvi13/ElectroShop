import React from 'react'

export default function Brands() {
    return (
        <div className=' bg-mainBg rounded-lg p-10'>
            <h5 className='  font-semibold border-b pb-4 border-mainBorder mb-8'>برند ها</h5>
            <ul className='child:cursor-pointer space-y-4'>
                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                    <span>سامسونگ</span>
                    <span className=' text-mainGray'>(12)</span>
                </li>
                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                    <span>اپل</span>
                    <span className=' text-mainGray'>(15)</span>
                </li>
                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                    <span>هوآوی</span>
                    <span className=' text-mainGray'>(05)</span>
                </li>

                <li className=' flex justify-between border-mainBorder items-center text-main text-sm'>
                    <span>ال جی</span>
                    <span className=' text-mainGray'>(21)</span>
                </li>

            </ul>
        </div>
    )
}
