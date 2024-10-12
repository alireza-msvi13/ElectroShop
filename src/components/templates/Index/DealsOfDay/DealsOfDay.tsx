import React from 'react'
import DealBox from './DealBox/DealBox'

export default function DealOfDay() {
    return (
        <section className="mt-20 mb-16">
            <div className="container">
                <div className=" grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <DealBox pic="menu-banner-7" title ="هدفون های هوشمند با جدید ترین طرح ها" newPrice={245} />
                    <DealBox pic="menu-banner-8" title ="لب تاپ های هوشمند با جدید ترین طرح ها" newPrice={374} />
                </div>
            </div>
        </section>
    )
}
