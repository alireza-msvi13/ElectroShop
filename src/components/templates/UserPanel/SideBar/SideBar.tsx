"use client";
import React, { useState } from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { IoTicket } from 'react-icons/io5';
import { ImExit } from "react-icons/im";
import Link from 'next/link';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '@/redux/slice/sideBarUserPanelSlice';
import { HiHeart } from 'react-icons/hi2';
import { toast } from 'react-toastify';
import { usePathname, useRouter } from 'next/navigation';
import { FaUser } from 'react-icons/fa';
import { GrUserAdmin } from "react-icons/gr";
import DeleteModal from '@/components/modules/DeleteModal/DeleteModal';
import { useGetMeUserQuery } from '@/redux/api/authApi';
import { deleteCookie } from 'cookies-next';
export default function SideBar() {

    const isSideBarOpen = useSelector((store:any) => store.sideBarUserPanelSlice.isSideBarOpen)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const { data: user } = useGetMeUserQuery();

    const dispatch = useDispatch();
    const router = useRouter()
    const pathname = usePathname()

    const logoutUserHandler = () => {
        deleteCookie('token');
        deleteCookie('refreshToken');
        toast.success("با موفقیت از حساب خود خارج شدید!");
        router.replace("/");
        router.refresh()
    };

    return (
        <>
            <div className={`${isSideBarOpen ? '' : ' hidden'} fixed inset-0 bg-mainBlack z-30 h-screen opacity-[0.2] xxl:hidden`} onClick={() => dispatch(closeSideBar())} ></div>
            <aside className={`${isSideBarOpen ? 'mobile-nav--active' : ''} fixed  z-30 w-48  xxl:w-60 top-0 right-0  h-screen pt-[4.5rem]  bg-main translate-x-[100%] xxl:translate-x-0 xxl:visible xxl:opacity-100 mobile-nav-transition border-l-4 border-mainBlack invisible`}>
                <div className='overflow-y-auto py-3 px-3 h-full'>
                    <ul className=' space-y-4 child:cursor-pointer'>
                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/user-panel'} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg
                                ${pathname === "/user-panel" ? "border-b-2 pb-2 border-white" : ""}`}>
                                <IoHomeSharp className=' text-2xl text-white' />
                                صفحه اصلی
                            </Link>
                        </li>
                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/user-panel/fav'} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg
                                ${pathname === "/user-panel/fav" ? "border-b-2 pb-2 border-white" : ""}`}>
                                <HiHeart className=' text-2xl text-white' />
                                علاقه مندی ها
                            </Link>
                        </li>

                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/user-panel/orders'} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg
                                ${pathname === "/user-panel/orders" ? "border-b-2 pb-2 border-white" : ""}`}>
                                <FaCartShopping className=' text-2xl text-white' />
                                سفارشات
                            </Link>
                        </li>
                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/user-panel/info'} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg
                                ${pathname === "/user-panel/info" ? "border-b-2 pb-2 border-white" : ""}`}>
                                <FaUser className=' text-2xl text-white' />
                                جزئیات حساب
                            </Link>
                        </li>

                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/user-panel/tickets'} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg
                                ${pathname === "/user-panel/tickets" ? "border-b-2 pb-2 border-white" : ""}`}>
                                <IoTicket className=' text-2xl text-white' />
                                تیکت
                            </Link>
                        </li>
                        {
                            user?.role === "ADMIN" &&
                            <li onClick={() => dispatch(closeSideBar())}>
                                <Link href={'/admin-panel'} className='flex items-center text-md gap-2 py-2 pl-2 text-white rounded-lg'>
                                    <GrUserAdmin className=' text-2xl text-white' />
                                    پنل مدیریت
                                </Link>
                            </li>
                        }

                        <li onClick={() => setIsShowDeleteModal(true)}>

                            <div className='flex cursor-pointer items-center text-md gap-2 p-2 rounded-lg text-white'>
                                <ImExit className=' text-2xl rotate-180 text-white' />
                                خروج
                            </div>
                        </li>


                    </ul>
                </div>
            </aside>
            {/* delete modal */}
            {isShowDeleteModal &&
                <DeleteModal onClose={() => setIsShowDeleteModal(false)} onSubmit={() => {
                    logoutUserHandler()
                }} title="از اکانت خودت میخوای خارج بشی؟" />
            }
        </>
    )
}
