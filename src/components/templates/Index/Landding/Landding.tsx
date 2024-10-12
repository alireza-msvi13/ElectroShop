import React from 'react'
import SwiperBanners from './SwiperBanners/SwiperBanners'
import StaticBanners from './StaticBanners/StaticBanners'

const Landding = () => {
    return (
        <>
            <section>
                <div className=' block sm:hidden col-span-12 xxl:col-span-8 bg-mainBg rounded-lg'>
                    <SwiperBanners />
                </div>
                <div className=' container my-6'>
                    <div className=' grid grid-cols-12 gap-6'>
                        <div className=' hidden sm:block col-span-12 xxl:col-span-8 bg-mainBg rounded-lg'>
                            <SwiperBanners />
                        </div>
                        <div className='col-span-12 xxl:col-span-4 '>
                            <StaticBanners />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Landding