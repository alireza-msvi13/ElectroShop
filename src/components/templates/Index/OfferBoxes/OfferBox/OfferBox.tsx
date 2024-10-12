import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IOfferBox {
    pic: string
    title: string
    topTitle: string
    href: string
}

export default function OfferBox({ pic, title, topTitle, href }: IOfferBox) {
    return (
        <div className=" relative rounded-lg">
            <Image src={`/images/offer/${pic}`} className=' -scale-x-100 w-full h-auto rounded-lg' width={457} height={188} alt="offer-img" />
            <div className=" absolute right-0 pr-9 top-2 vsm:top-6 sm:top-9 xl:top-3 xxl:top-6">
                <span className='text-sm vsm:text-base text-mainGray'>{topTitle}</span>
                <h4 className=' my-2 font-morabba text-sm  vsm:text-lg  sm:text-xl tracking-wide w-40'>{title}</h4>
                <div>
                    <Link href={href} className='text-sm text-main'>مشاهده محصولات</Link>
                </div>
            </div>
        </div>
    )
}
