"use client";
import React, { useState } from 'react'
import Information from '../Information/Information'
import MoreInfo from '../MoreInfo/MoreInfo'
import Comments from '../Comments/Comments'

export default function Tabs() {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index: number) => {
        setToggleState(index)
    }
    return (
        <section className='my-14 h-full md:h-96'>

            <ul className=" flex items-center gap-4 sm:gap-8 border-b-2 text-sm sm:text-base border-mainBorder pb-2 child:cursor-pointer ">
                <li onClick={() => toggleTab(1)} className={`${toggleState === 1 ? "relative before:absolute before:w-full before:h-[2px] before:bg-main before:-bottom-[10px]" : ""}`}>توضیحات</li>
                <li onClick={() => toggleTab(2)} className={`${toggleState === 2 ? "relative before:absolute before:w-full before:h-[2px] before:bg-main before:-bottom-[10px]" : ""}`}>اطلاعات بیشتر</li>
                <li onClick={() => toggleTab(3)} className={`${toggleState === 3 ? "relative before:absolute before:w-full before:h-[2px] before:bg-main before:-bottom-[10px]" : ""}`} >کامنت ها (4)</li>
            </ul>
            <div className=' mt-6'>
                {toggleState === 1 && <Information />}
                {toggleState === 2 && <MoreInfo />}
                {toggleState === 3 && <Comments />}

            </div>
        </section>
    )
}
