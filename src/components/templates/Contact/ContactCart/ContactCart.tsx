import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";
export default function ContactCart({ icon , title }: {icon: string, title: string}) {
    return (
        <div className=' relative group w-[90%] p-3 transition-all duration-[0.5s] bg-mainBg text-left rounded-2xl'>
            <div className=' absolute flex-center size-16 text-2xl rounded-full border-2 border-main left-[-40px] bg-mainBg top-[-8px] text-main'>
                {icon === 'IoLocationOutline' && <IoLocationOutline />}
                {icon === 'IoMailOutline' && <IoMailOutline />}
                {icon === 'HiOutlinePhone' && <HiOutlinePhone />}
            </div>
            <p className='text-mainGray pl-8 group-hover:text-main text-base cursor-pointer'>{title}</p>
        </div>
    )
}