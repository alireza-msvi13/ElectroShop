"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';
import ShopCartProductBox from './ShopCartProductBox/ShopCartProductBox';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '@/redux/slice/cartSlice';
import { closeShopCart } from '@/redux/slice/shopCartSlice';

const ShopCart: React.FC = () => {
    const cart = useSelector((state: any) => state.cart.items);
    const totalPrice = useSelector((state: any) => state.cart.totalPrice);
    const isShopCartOpen = useSelector((state: any) => state.shopCartSlice.isShopCartOpen);

    const dispatch = useDispatch();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        dispatch(setCart(storedCart));
    }, [dispatch]);
    

    return (
        <>
            <div className={`${isShopCartOpen ? 'mobile-nav--active' : ''} fixed top-0 left-0 w-screen h-screen z-50 translate-x-[100%] mobile-nav-transition invisible`}>
                {/* Black bg */}
                <div onClick={() => dispatch(closeShopCart())} className='absolute inset-0 bg-mainBlack opacity-[0.3]'></div>
                <div className="mobile-nav--active relative h-full w-[270px] sm:w-[350px] text-mainBlack bg-white z-10 overflow-y-auto translate-x-[100%] invisible opacity-0">
                    <div className="flex justify-between items-center bg-mainBg px-5 py-2">
                        <h6 className='uppercase font-dana'>سبد خرید (<span>{cart.length}</span>)</h6>
                        <span className='text-2xl cursor-pointer' onClick={() => dispatch(closeShopCart())}>X</span>
                    </div>
                    <div className="h-[52vh] overflow-y-auto border-[2px] border-mainBorder">
                        {
                            cart.map((product: any) => (
                                <ShopCartProductBox key={product._id} {...product} />
                            ))
                        }
                    </div>
                    <div>
                        <div className="text-xs sm:text-sm p-4 border-b-[2px] border-mainBorder space-y-3">
                            <div className='flex justify-between items-center'>
                                <div className='flex-center gap-1'>
                                    <span>{cart.length}</span>
                                    <span>محصول</span>
                                </div>
                                <div className='text-main flex-center gap-1'>
                                    <span>{totalPrice.toLocaleString()}</span>
                                    <span>تومان</span>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span>هزینه ارسال</span>
                                <span className='text-main'>رایگان</span>
                            </div>
                        </div>
                        <div className="p-4 border-b-[2px] text-xs sm:text-sm border-mainBorder space-y-3">
                            <div className='flex justify-between items-center'>
                                <span>مجموع خرید بدون مالیات</span>
                                <div className='text-main flex-center gap-1'>
                                    <span>{totalPrice.toLocaleString()}</span>
                                    <span>تومان</span>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span>مجموع خرید با مالیات</span>
                                <div className='text-main flex-center gap-1'>
                                    <span>{totalPrice.toLocaleString()}</span>
                                    <span>تومان</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-center flex-col gap-3 mt-3 px-4 text-white">
                            <div className="btn w-full before:w-full text-sm sm:text-base">
                                <Link className='w-full text-center' href="/cart" onClick={() => dispatch(closeShopCart())}>مشاهده سبد خرید</Link>
                            </div>
                            <div className="btn w-full before:w-full text-sm sm:text-base" onClick={() => dispatch(closeShopCart())}>
                                <Link href="/checkout" className='w-full text-center'>
                                    نهایی کردن خرید
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopCart;
