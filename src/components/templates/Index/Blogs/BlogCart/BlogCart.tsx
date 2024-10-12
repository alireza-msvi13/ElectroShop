import Btn from '@/components/modules/Btn/Btn'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

export default function BlogCart({ pic, title }: { pic: string, title: string }) {
  return (
    <div className=" space-y-3 group">
      <div className="blog-img">
        <Link href="/blog-details">
          <Image width={0} height={0} sizes='100vw' className=' w-full h-auto rounded-lg' src={`/images/blog/${pic}`} alt="blogImg" />
        </Link>
      </div>
      <div className=" flex items-center gap-2">
        <Link href="/" className=' flex-center gap-1 transition-all duration-100 hover:text-main'>
          <FaRegUserCircle className=' text-lg text-main' />
          یاسین حیدرزاده
        </Link>
        <Link href="/" className=' flex-center gap-1 transition-all duration-100 hover:text-main'>
          <MdDateRange className=' text-lg -mt-2 text-main' />
          <span>1402/02/23</span>
        </Link>
      </div>
      <div className=" space-y-2">
        <h5>
          <Link href="/blog-details" className='  transition-all duration-200 group-hover:text-main text-lg sm:text-xl line-clamp-1 font-bold'>{title}</Link>
        </h5>
        <p className=' text-sm sm:text-md text-mainGray'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است که از ان استفاده میکنند
        </p>
      </div>
      <div className=' flex justify-end'>
        <Btn href={'/blog-details'} text="خواندن مقاله" />
      </div>
    </div>
  )
}
