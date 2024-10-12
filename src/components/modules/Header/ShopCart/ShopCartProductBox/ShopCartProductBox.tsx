import React from 'react';
import Link from 'next/link';
import { FaRegTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { removeItem, incrementItemCount, decrementItemCount } from '@/redux/slice/cartSlice';
import { closeShopCart } from '@/redux/slice/shopCartSlice';

interface ShopCartProductBoxProps {
    id: string;
    name: string;
    cover: string;
    price: number;
    count: number;
}

const ShopCartProductBox: React.FC<ShopCartProductBoxProps> = ({ id, name, cover, price, count }) => {
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
        <div className="flex justify-evenly items-center py-4 border-b-2 border-mainBorder px-2">
            <div className="min-w-[70px] border-[2px] border-mainBorder rounded-lg">
                <Link onClick={() => dispatch(closeShopCart())} href={`/product-details/${id}`}>
                    <Image src={`/uploads/${cover}`} alt="productImg" className='rounded-lg' width={70} height={70} />
                </Link>
            </div>
            <div className='px-2'>
                <div className='flex items-center justify-between'>
                    <Link onClick={() => dispatch(closeShopCart())} href={`/product-details/${id}`} className='text-xs sm:text-sm line-clamp-1 pl-2'>
                        {name}
                    </Link>
                    <div className='cursor-pointer' onClick={removeFromCart}>
                        <FaRegTrashAlt className='min-w-5' />
                    </div>
                </div>
                <div className="flex items-center mt-2">
                    <div className="flex-center gap-1 sm:gap-2.5">
                        <div className='ml-1 sm:ml-3 text-main flex-center gap-1 text-xs sm:text-sm'>
                            <span>
                                {price.toLocaleString()}
                            </span>
                            <span>تومان</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <button className="w-6 h-7 text-center inline-block rounded-2xl bg-mainBg pt-1" onClick={reduceProduct}>-</button>
                            <span>{count}</span>
                            <button onClick={increaseProduct} className="w-6 h-7 text-center flex-center inline-block rounded-2xl bg-mainBg pt-1">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopCartProductBox;
