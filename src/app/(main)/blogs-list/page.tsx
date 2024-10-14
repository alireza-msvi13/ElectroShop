import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import BlogCart from '@/components/templates/Index/Blogs/BlogCart/BlogCart'
import React from 'react'

export default function page() {
    return (
        <>
            <Breadcrumbs destination="مقالات" />
            <section className=' container mt-16 mb-44'>
                <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    <BlogCart pic="blog1.webp" title="بهترین گوشی ها بازار از  سامسونگ تا اپل" />
                    <BlogCart pic="blog2.webp" title=" دوربین چی بخرم؟ مروری بر بهترین برند ها" />
                    <BlogCart pic="blog3.webp" title=" عمر مفید لب تاپ ها چقدره؟" />
                </div>
            </section>
        </>
    )
}
