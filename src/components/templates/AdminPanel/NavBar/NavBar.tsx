"use client";
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { openSideBar } from '@/redux/slice/sideBarAdminPanelSlice';

export default function NavBar() {

    const dispatch = useDispatch();


    return (
        <>
            <nav className="bg-main border-b-4 border-mainBlack p-3 fixed left-0 right-0 top-0 z-40 ">
                <div className=' flex justify-between items-center'>
                    <div className=' flex-center gap-6'>
                        <Link href={'/'} className=' flex justify-start items-center text-white text-xl md:text-3xl'>
                            <PiShoppingCartSimpleFill className=' text-2xl md:text-4xl' />
                            <h3 className=' font-morabba pr-1 '>الکتروشاپ</h3>
                        </Link>
                        <form className=' relative md:block hidden' action="">
                            <button className=' absolute left-3 top-2 border-none'>
                                <IoIosSearch fontSize={'1.6rem'} className=' text-white' />
                            </button>
                            <input type="text" placeholder='جستجو ...' className=' text-sm outline-none bg-transparent border w-80 py-2 text-white placeholder:text-white rounded-md px-8' />
                        </form>
                    </div>
                    <div className=' flex-center gap-4 ml-4 sm:ml-0 sm:gap-6 text-white child:cursor-pointer'>
                        <Link href={'/admin-panel/users'}>
                            <FaUser className=' text-xl sm:text-2xl' />
                        </Link>

                        <Link href={'/admin-panel/messages'}>
                            <IoIosNotifications className=' text-2xl sm:text-3xl' />

                        </Link>
                        < AiOutlineMenu className=' text-xl sm:text-2xl xxl:hidden block' onClick={() => dispatch(openSideBar())} />
                    </div>
                </div>
            </nav>
        </>
    )
}
