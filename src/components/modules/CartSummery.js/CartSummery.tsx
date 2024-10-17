"use client";
import React, { useEffect, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '@/redux/slice/cartSlice';
import { RootState } from '@/redux/store'; 

interface CartSummeryProps {
    text?: string;  
    children?: ReactNode;
}

const CartSummery: React.FC<CartSummeryProps> = ({ children }) => {
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        dispatch(setCart(storedCart));
    }, [dispatch]);

    return (
        <div className="bg-mainBg rounded-lg py-8 px-11 w-full">
            <h4 className='text-xl mb-9 font-semibold'>فاکتور خرید</h4>
            <ul className='space-y-6 child:flex child:justify-between child:items-center'>
                <li>
                    <span className='font-semibold'>مجموع خرید :</span>
                    <span className='text-mainGray text-sm'>{totalPrice.toLocaleString()} تومان</span>
                </li>
                <li>
                    <span className='font-semibold'>تخفیف :</span>
                    <span className='text-mainGray text-sm'>اعمال شده</span>
                </li>
                <li>
                    <span className='font-semibold'>هزینه ارسال :</span>
                    <span className='text-mainGray text-sm'>رایگان</span>
                </li>
                <li>
                    <span className='font-semibold'>مالیات :</span>
                    <span className='text-mainGray text-sm'>---</span>
                </li>
            </ul>
            <div className="my-9 border-t-2 pt-6 border-mainBorder flex justify-between items-center">
                <span className='font-semibold'>مجموع :</span>
                <span className='font-semibold text-main'>{totalPrice.toLocaleString()} تومان</span>
            </div>
            {children}
        </div>
    );
};

export default CartSummery;
