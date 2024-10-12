import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Menu from '../Menu/Menu';
import MobileMenu from '../MobileMenu/MobileMenu';
import ShopCart from '../ShopCart/ShopCart';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '@/redux/slice/cartSlice';
import { closeShopCart, openShopCart } from '@/redux/slice/shopCartSlice';
import { openSideBar } from '@/redux/slice/sideBarMobileSlice';

interface NavProps {
    isLogin: boolean;
    wishlistLength: number;
}

const Nav: React.FC<NavProps> = ({ isLogin, wishlistLength }) => {
    const [isFix, setIsFix] = useState<boolean>(false);
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart.items);

    const fixNav = () => {
        setIsFix(document.documentElement.scrollTop > 700);
    };

    useEffect(() => {
        window.addEventListener('scroll', fixNav);
        return () => {
            window.removeEventListener('scroll', fixNav);
        };
    }, []);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        dispatch(setCart(storedCart));
    }, [dispatch]);

    useEffect(() => {
        if (!cart.length) {
            dispatch(closeShopCart());
        }
    }, [cart, dispatch]);

    return (
        <>
            <nav className={`${isFix ? 'fix-nav-active shadow-custom' : 'block'} z-40 py-4 bg-main top-0 left-0 w-full text-white`}>
                <div className='container flex justify-between items-center'>
                    <div className='flex-center gap-10 xxl:gap-20'>
                        <div>
                            <Link href={'/'} className='flex-center text-2xl md:text-3xl'>
                                <PiShoppingCartSimpleFill className='text-3xl md:text-4xl' />
                                <h3 className='font-morabba pl-1'>الکتروشاپ</h3>
                            </Link>
                        </div>
                        <Menu />
                    </div>
                    <div className='flex-center gap-4 sm:gap-5 md:gap-8'>
                        <div className='cursor-pointer flex-center' onClick={() => setIsSearchBoxOpen(prevState => !prevState)}>
                            <IoIosSearch className={`${isSearchBoxOpen ? 'rotate-180' : ''} text-2xl sm:text-3xl transition-all duration-[.5s]`} />
                        </div>
                        <Link href={'/user-panel/fav'} className='relative cursor-pointer hidden lg:flex-center'>
                            <IoMdHeartEmpty className={`text-2xl sm:text-3xl transition-all duration-[.5s]`} />
                            <span className='absolute font-semibold px-[0.4rem] py-0 text-sm -top-[6px] -right-2 text-mainBlack rounded-full bg-white'>{wishlistLength}</span>
                        </Link>
                        <div className='relative cursor-pointer flex-center' onClick={() => {
                            cart.length && dispatch(openShopCart());
                        }}>
                            <IoCartOutline className={`text-2xl sm:text-3xl transition-all duration-[.5s]`} />
                            <span className='absolute font-semibold px-[0.3rem] sm:px-[0.4rem] py-0 text-xs sm:text-sm -top-[6px] -right-2 text-mainBlack rounded-full bg-white'>{cart.length}</span>
                        </div>

                        {isLogin ? (
                            <Link href={'/user-panel'} className='hidden lg:flex-center'>
                                <AiOutlineUser className={`text-2xl sm:text-3xl transition-all duration-[.5s]`} />
                            </Link>
                        ) : (
                            <Link href={"/login"} className="btn bg-white text-white group hidden lg:flex">
                                <span className='font-semibold text-sm text-mainBlack group-hover:text-white'>ورود / ثبت نام</span>
                            </Link>
                        )}

                        <div className='block lg:hidden cursor-pointer' onClick={() => dispatch(openSideBar())}>
                            <AiOutlineMenu className={`text-xl sm:text-3xl`} />
                        </div>
                    </div>
                    {/* Search Box */}
                    <div onClick={() => setIsSearchBoxOpen(prevState => !prevState)} className={`${isSearchBoxOpen ? "fixed inset-0 bg-mainBlack opacity-[0] z-20 w-screen h-screen" : "absolute"}`}></div>
                    <form className={`${isSearchBoxOpen ? 'visible opacity-100 scale-y-100' : 'invisible opacity-0 scale-y-0'} max-w-sm mainBoxShadow transition-all duration-[0.5s] ease-in-out mx-auto absolute left-0 right-0 w-full sm:p-auto p-4 top-14 sm:right-auto sm:-bottom-20 sm:left-20 z-20 h-4`}>
                        <label className="mb-2 text-sm text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <IoIosSearch fontSize={'1.4rem'} className='text-main' />
                            </div>
                            <input type="search" className="block text-mainBlack w-full p-4 ps-10 shadow-custom rounded-lg bg-white focus:ring-blue-500 outline-none" placeholder="هدفون.." required />
                            <button type="button" className='bg-main absolute rounded-md end-2.5 bottom-2 top-2 py-2 px-4 text-md'>
                                <span className='btn_curve'></span>جستجو
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
            <MobileMenu />
            <ShopCart />
        </>
    );
}

export default Nav;

