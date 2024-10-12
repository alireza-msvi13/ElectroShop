import Btn from '@/components/modules/Btn/Btn'
import React from 'react'

const page:React.FC = () => {
    return (
        <div className="py-8 px-4 mx-auto w-screen bg-mainBg min-h-screen  flex-center lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-6 text-7xl tracking-tight font-extrabold lg:text-9xl text-main">404</h1>
                <p className="mb-6 text-3xl tracking-tight font-bold text-main md:text-4xl">انگار یه مشکلی پیش اومده</p>
                <p className="mb-6 text-lg font-light text-mainGray">متاسفانه صفحه مورد نظر یافت نشد</p>
                <Btn href={'/'} style=" w-full before:w-full" text="برگشت به صفحه اصلی" />
            </div>
        </div>
    )
}

export default page
