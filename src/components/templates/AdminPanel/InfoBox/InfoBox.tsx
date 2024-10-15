import React from 'react'
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa";
import { IoTicket } from 'react-icons/io5';
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { HiHeart } from 'react-icons/hi2';

export default function InfoBox({ title, count }: {title:string,count:number}) {
    return (
        <div className="flex items-center bg-white border-2 rounded-md overflow-hidden shadow">
            <div className="p-5 bg-main text-4xl h-full text-white">
                {
                    title === "ثبت نامی‌ها" && <FaUser />
                    || title === "سفارشات" && <FaCartShopping />
                    || title === "مقالات" && <FaBloggerB />
                    || title === "علاقه مندی ها" && <HiHeart />
                    || title === "بازدید سایت" && <IoEyeSharp />
                    || title === "مجموع خرید" && <RiMoneyPoundCircleFill />
                    || title === "تیکت ها" && <IoTicket />
                }
            </div>
            <div className="px-4">
                <h3 className=" mb-1  tracking-wider">
                    {title}
                </h3><p className="text-md ">{count}</p></div>
        </div>
    )
}
