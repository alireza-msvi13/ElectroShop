import ProductBox from '@/components/modules/ProductBox/ProductBox'
import TopSectionTitle from '@/components/modules/TopSectionTitle/TopSectionTitle'
import { useGetProductsQuery } from '@/redux/api/productApi'
import React from 'react'

export default function RelatedProducts() {

    const { data: products } = useGetProductsQuery()

    return (
        <>
            <TopSectionTitle title="محصولات مشابه" />

            <div className=' grid sm:grid-cols-2   lg:grid-cols-3 xxl:grid-cols-5 gap-6'>
                {products?.map((product) => (
                    <ProductBox key={product._id} {...product} isProductBoxForRelatedProduct = {true} />
                ))}
            </div>

        </>
    )
}
