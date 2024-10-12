import React from 'react'

import BlogCart from './BlogCart/BlogCart';
export default function Blogs() {
    return (
        <section className='py-6 mt-20'>
            <div className=' container '>
                <div className=" mb-10 text-center">
                    <h6 className=' uppercase'>مقاله های ما</h6>
                    <h4 className=' font-morabba font-semibold text-xl sm:text-3xl mt-2'>آخرین اخبار و<span className=' text-main'> مقالات </span>منتشر شده</h4>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    <BlogCart pic ="blog1.webp" title="بهترین گوشی ها بازار از  سامسونگ تا اپل"/>
                    <BlogCart pic ="blog2.webp" title=" دوربین چی بخرم؟ مروری بر بهترین برند ها"/>
                    <BlogCart pic ="blog3.webp" title=" عمر مفید لب تاپ ها چقدره؟"/>
                </div>
            </div>
        </section>
    )
}
