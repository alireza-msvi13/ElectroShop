"use client";
import ProductBox from '@/components/modules/ProductBox/ProductBox'
import { useGetProductsQuery } from '@/redux/api/productApi'
import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

export default function AllProducts() {
    const { data: products } = useGetProductsQuery()

    return (

        <>
            <div className=' flex justify-between items-center my-8'>
                <span className='text-sm'><span className=' ml-1 text-main'>{products?.length}</span>محصول یافت شد</span>
                <div className='text-sm flex-center gap-2'>
                    <span className=' hidden sm:block'>دسته بندی بر اساس :</span>
                    <div className=' bg-main p-3 cursor-pointer rounded-lg text-white flex-center gap-1'>
                        <span>پرفروش ترین </span>
                        <MdNavigateNext className=' text-xl rotate-90' />
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 xxl:grid-cols-3 gap-6'>
                {products?.map((product) => (
                    <ProductBox {...product} isProductBoxForProductsList={true} key={product._id} />
                ))}

            </div>
        </>
    )
}
