import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { VscGitCompare } from "react-icons/vsc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import AddProductToCart from './AddProductToCart/AddProductToCart';
import AddProductToFav from '../AddProductToFav/AddProductToFav';
import { IProduct } from '@/interfaces/product';


export default function ProductBox(
    { _id, name, cover, price, discount, brand, stock, categoryId, shortname,
        color, isProductBoxForProductsList = false, isProductBoxForRelatedProduct = false }: IProduct) {



    return (
        <div className={` group hover:shadow-custom transition-all duration-200 ease-in  ${isProductBoxForProductsList || isProductBoxForRelatedProduct ? " border border-mainBorder rounded-lg" : "mb-16"}`}>
            <div className=" bg-white overflow-hidden rounded-lg px-6">
                <div className=' relative'>
                    {
                        stock > 20 && <span className=" absolute text-sm font-normal flex-center top-3 left-0 bg-main text-white px-3.5 py-1 rounded-full z-20">جدید</span>
                    }
                    <Link href={`/product-details/${_id}`} className="product-img">
                        <Image src={`http://localhost:4000/public/covers/${cover}`} className=' sm:group-hover:scale-110 transition-all duration-200 ease-in' width={352} height={352} alt="product" />
                    </Link>
                    <div className={`flex flex-col-reverse justify-center items-center sm:flex-row sm:opacity-0 transition-all duration-200 ease-in sm:group-hover:opacity-100 z-20 absolute right-0 top-8 left-auto sm:inset-0 gap-4 sm:gap-2 ${isProductBoxForProductsList ? "" : "xxl:bottom-auto xxl:right-auto xxl:top-24 xxl:left-6"}`}>
                        <div className="p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative hover:text-white  text-xl border sm:border-none border-mainBorder sm:shadow-custom rounded-lg product-btn compare">
                            <VscGitCompare />
                        </div>
                        <AddProductToFav _id={_id} isAddFavForProductDetails={false} />


                        <Link href={`/product-details/${_id}`} className="p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative hover:text-white  text-xl border sm:border-none border-mainBorder sm:shadow-custom rounded-lg product-btn view">
                            <MdOutlineRemoveRedEye />
                        </Link>


                    </div>

                </div>
                <div className=" border-b z-20 mt-4 pb-3">
                    <Link href="/products-list" className=' uppercase text-[13px] tracking-wide block text-mainGray'>{categoryId?.title}</Link>
                    <Link href={`/product-details/${_id}`} className=' font-morabba transition-all duration-200 ease-in hover:text-main tracking-wide line-clamp-1 '>
                        {
                            name
                        }

                    </Link>
                </div>
                <div className='flex justify-between items-center my-4'>
                    <div className=" flex items-center my-2 justify-start gap-1 text-yellow-400 text-sm">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>

                    <span className=" text-main font-semibold text-sm">{discount !== 0 && discount + "%"}</span>
                </div>
                <div className=" flex justify-between items-center mt-3 mb-5 relative">
                    <div>

                        <div className=''>
                            <div className="text-sm  line-through text-mainGray">
                                {price}
                            </div>
                            <div className="font-bold flex-center gap-1 text-main mr-1 ">
                                <span>
                                    {
                                        Math.floor(price - ((price * discount) / 100)).toLocaleString()
                                    }
                                </span>
                                <span className=' text-xs'>تومان</span>
                            </div>

                        </div>
                    </div>
                    <AddProductToCart _id={_id} cover={cover} price={price} name={name} discount={discount} brand={brand} shortname={shortname} color={color} stock={stock} categoryId={categoryId} />
                </div>
            </div>
        </div>
    )
}
