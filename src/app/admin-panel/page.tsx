"use client";
import React from 'react'
import InfoBox from '@/components/templates/AdminPanel/InfoBox/InfoBox'
import SimpleLineChart from '@/components/templates/AdminPanel/Chart/SimpleLineChart/SimpleLineChart'
import RecentUsers from '@/components/templates/AdminPanel/RecentUsers/RecentUsers'
import RecentProduct from '@/components/templates/AdminPanel/RecentProduct/RecentProduct'
import Link from 'next/link'
import { useGetMeUserQuery } from '@/redux/api/authApi'

export default function page() {
  const { data: admin } = useGetMeUserQuery();


  return (
    <>
      <h4 className=' font-morabba text-main text-2xl'>{admin?.username} خوش اومدی !</h4>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <InfoBox title="بازدید سایت" count={5230} />
        {/* <InfoBox title="ثبت نامی‌ها" count={usersCount.length > 10 ? usersCount.length : "0" + usersCount.length} /> */}
        <InfoBox title="ثبت نامی‌ها" count={250} />
        <InfoBox title="سفارشات" count={230} />
        <InfoBox title="مقالات" count={Number("0" + 3)} />
      </div>
      <div className=' grid grid-cols-12'>
        <div className=' col-span-12 xl:col-span-12'>
          <SimpleLineChart />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <RecentUsers users={JSON.parse(JSON.stringify([]))} />
        <RecentProduct products={JSON.parse(JSON.stringify([]))} />
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
