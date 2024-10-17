"use client";
import React, { useState } from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaBloggerB } from "react-icons/fa6";
import { IoHeadset } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { FaComment } from "react-icons/fa";
import { IoTicket } from 'react-icons/io5';
import { LuMessagesSquare } from "react-icons/lu";
import { ImExit } from "react-icons/im";
import Link from 'next/link';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '@/redux/slice/sideBarAdminPanelSlice';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import DeleteModal from '@/components/modules/DeleteModal/DeleteModal';
import { deleteCookie } from 'cookies-next';

export default function SideBar() {

    const isSideBarOpen = useSelector((store:any) => store.sideBarAdminPanelSlice.isSideBarOpen)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const pathname = usePathname()
    const dispatch = useDispatch();
    const router = useRouter()


    const logoutUserHandler = () => {
        deleteCookie('token');
        deleteCookie('refreshToken');
        toast.success("با موفقیت از حساب خود خارج شدید!");
        router.push('/');
    };


    return (
        <>
            <div className={`${isSideBarOpen ? '' : ' hidden'} fixed inset-0 bg-mainBlack z-30 h-screen opacity-[0.2] xxl:hidden`} onClick={() => dispatch(closeSideBar())} ></div>
            <aside className={`${isSideBarOpen ? 'mobile-nav--active' : ''} fixed  z-30 w-48  xxl:w-60 top-0 right-0  h-screen pt-[4.5rem]  bg-main translate-x-[100%] xxl:translate-x-0 xxl:visible xxl:opacity-100 mobile-nav-transition border-l-4 border-mainBlack invisible`}>
                <div className='overflow-y-auto py-3 px-3 h-full'>
                    <ul className=' space-y-4 child:cursor-pointer'>
                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/admin-panel'}
                                className={`flex items-center text-md gap-2 p-2 text-white rounded-lg ${pathname === "/admin-panel" ? "border-b-2 border-white pb-2" : ""}`}>
                                <IoHomeSharp className=' text-2xl text-white' />
                                صفحه اصلی
                            </Link>
                        </li>

                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/admin-panel/products'} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg ${pathname === "/admin-panel/products" ? "border-b-2 border-white pb-2" : ""}`}>
                                <IoHeadset className=' text-2xl text-white' />
                                محصولات
                            </Link>
                        </li>


                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/admin-panel/users'} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg ${pathname === "/admin-panel/users" ? "border-b-2 border-white pb-2" : ""}`}>
                                <FaUser className=' text-2xl text-white' />
                                کاربران
                            </Link>
                        </li>




                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/admin-panel/category'} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg ${
                                pathname === "/admin-panel/category" ? "border-b-2 border-white pb-2" : ""}`}>
                                <TbCategory2 className=' text-2xl text-white' />
                                دسته بندی
                            </Link>
                        </li>

                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/admin-panel/messages'} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg ${
                                pathname === "/admin-panel/messages" ? "border-b-2 border-white pb-2" : ""}`}>
                                <LuMessagesSquare className=' text-2xl text-white' />
                                پیام
                            </Link>
                        </li>

                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={''} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg ${
                                pathname === "/admin-panel/orders" ? "border-b-2 border-white pb-2" : ""}`}>
                                <FaCartShopping className=' text-2xl text-white' />
                                سفارشات
                            </Link>
                        </li>

                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={''} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg ${
                                pathname === "/admin-panel/comments" ? "border-b-2 border-white pb-2" : ""}`}>
                                <FaComment className=' text-2xl text-white' />
                                کامنت
                            </Link>
                        </li>





                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={''} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg ${
                                pathname === "/admin-panel/blog" ? "border-b-2 border-white pb-2" : ""}`}>
                                <FaBloggerB className=' text-2xl text-white' />
                                مقاله
                            </Link>
                        </li>
                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={''} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg ${
                                pathname === "/admin-panel/tickets" ? "border-b-2 border-white pb-2" : ""}`}>
                                <IoTicket className=' text-2xl text-white' />
                                تیکت
                            </Link>
                        </li>

                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={''} className={`flex items-center text-md gap-2 p-2 text-white rounded-lg ${
                                pathname === "/admin-panel/discount-code" ? "border-b-2 border-white pb-2" : ""}`}>
                                <RiDiscountPercentFill className=' text-2xl text-white' />
                                کد تخفیف
                            </Link>
                        </li>

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
