"use client";
import React from 'react'
import InfoBox from '@/components/templates/AdminPanel/InfoBox/InfoBox'
import SimpleLineChart from '@/components/templates/AdminPanel/Chart/SimpleLineChart/SimpleLineChart'
import RecentUsers from '@/components/templates/AdminPanel/RecentUsers/RecentUsers'
import RecentProduct from '@/components/templates/AdminPanel/RecentProduct/RecentProduct'
import Link from 'next/link'
import { useGetInfoQuery } from '@/redux/api/infoApi';

export default function Page() {
  const { data, isLoading } = useGetInfoQuery()


  
  if (isLoading) {
    return <span className='font-morabba'>در حال لود شدن و ...</span>
  }
  return (
    <>
      <h4 className=' font-morabba text-main text-2xl'>{data?.adminName} خوش اومدی !</h4>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <InfoBox title="بازدید سایت" count={5230} />
        <InfoBox title="ثبت نامی‌ها" count={
          data?.infos[0]?.count > 10 ? data?.infos[0]?.count : "0" + data?.infos[0]?.count} />
        <InfoBox title="محصولات" count={
          data?.infos[1]?.count > 10 ? data?.infos[1]?.count : "0" + data?.infos[1]?.count
        } />
        <InfoBox title="سفارشات" count={
          data?.infos[2]?.count > 10 ? data?.infos[2]?.count : "0" + data?.infos[2]?.count
        } />

      </div>
      <div className=' grid grid-cols-12'>
        <div className=' col-span-12 xl:col-span-12'>
          <SimpleLineChart />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <RecentUsers users={JSON.parse(JSON.stringify(data?.lastUsers))} />
        <RecentProduct products={JSON.parse(JSON.stringify(data?.lastProducts))} />
      </div>

      <footer className="flex justify-between rounded-md mt-4 px-8 py-4  border text-xs font-bold ">
        <div className=" flex items-center gap-2 child-hover:text-main transition-all">
          <Link href={'/admin-panel'}>راهنما</Link>
          <Link href={'/admin-panel'}>ایمیل</Link>
          <Link href={'/admin-panel'}>پشتیبانی</Link>
        </div>
        <div>© 1404 الکتروشاپ</div>
      </footer>

    </>
  )
}
