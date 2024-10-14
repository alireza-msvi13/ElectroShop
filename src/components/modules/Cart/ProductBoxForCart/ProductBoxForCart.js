import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { removeItem, incrementItemCount, decrementItemCount } from '@/redux/slice/cartSlice';
export default function ProductBoxForCart({ id, name, cover, price, count, brand, discount }) {


    const dispatch = useDispatch();


    const increaseProduct = () => {
        dispatch(incrementItemCount(id));
    };

    const reduceProduct = () => {
        if (count > 1) {
            dispatch(decrementItemCount(id));
        } else {
            removeFromCart();
        }
    };

    const removeFromCart = () => {
        dispatch(removeItem(id));
    };



    return (
        <div className=' border-b border-mainBorder pb-2'>
            <div className=' grid grid-cols-12 gap-4 sm:gap-6 items-center'>
                <div className=' col-span-6 md:col-span-2'>
                    <Link href={`/product-details/${id}`}>
                        <Image src={`/uploads/${cover}`} alt="productImg" className=' rounded-lg' width={122} height={122} />
                    </Link>
                </div>
                <div className=' col-span-6 md:col-span-3'>
                    <Link href={`/product-details/${id}`} className=' text-sm sm:text-base line-clamp-1 '>
                        {name}
                    </Link>
                    <span className=' my-2 text-mainGray text-sm sm:text-base'>برند: {brand}</span>
                </div>
                <div className='  col-span-2 md:col-span-1'>
                    <span className='text-sm sm:text-base'>{discount}%</span>
                </div>
                <div className=' col-span-4 md:col-span-2 flex-center gap-2 sm:gap-3'>
                    <button onClick={reduceProduct} className="  w-7 h-7 text-center  inline-block rounded-2xl bg-mainBg pt-1">-</button>
                    <span className="">{count}</span>
                    <button onClick={increaseProduct} className=" w-7 h-7 text-center flex-center  inline-block rounded-2xl bg-mainBg pt-1">+</button>
                </div>
                <div className=' col-span-5 md:col-span-3'>
                    <span className=' text-main text-sm sm:text-base'>{price.toLocaleString()} تومان</span>
                </div>
                <div className=' col-span-1 md:col-span-1 cursor-pointer' onClick={removeFromCart}>
                    <FaRegTrashAlt className=' min-w-5' />

                </div>
            </div>
        </div>
    )
}
