import React from 'react'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'

import NewProduct from '@/components/templates/ProductsList/NewProduct/NewProduct'
import Category from '@/components/templates/ProductsList/Category/Category'
import Brands from '@/components/templates/ProductsList/Brands/Brands'
import AllProducts from '@/components/templates/ProductsList/AllProducts/AllProducts'

export default async function page() {

    return (
        <>
            <Breadcrumbs destination="لیست محصولات" />
            <section className=' container mt-8'>
                <div className=' grid grid-cols-12 gap-6'>
                    <div className=' col-span-12 lg:col-span-9'>

                        <AllProducts />
                    </div>
                    <div className=' col-span-12 lg:col-span-3'>
                        <Category />
                        <NewProduct />
                        <Brands />
                    </div>
                </div>
            </section>
        </>
    )
}
