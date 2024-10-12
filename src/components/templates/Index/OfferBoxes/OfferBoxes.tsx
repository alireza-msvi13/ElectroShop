import React from 'react'
import OfferBox from './OfferBox/OfferBox'

export default function OfferBoxes() {
    return (
        <section>
            <div className='container mt-20'>
                <div className=' grid grid-cols-1 xl:grid-cols-3 gap-6'>
                    <OfferBox pic="offer1.webp" topTitle = "جدید ترین" title = "بهترین قیمت در ماه های گزشته" href= "/products-list" />
                    <OfferBox pic="offer2.webp" topTitle = "بهترین قیمت" title = "لوازم جانبی پلی استیشن" href= "/products-list" />
                    <OfferBox pic="offer3.webp" topTitle = "ارزون ترین" title = "گوشی سامسونگ سری جدید" href= "/products-list" />
                </div>
            </div>
        </section>
    )
}
