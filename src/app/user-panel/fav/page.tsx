"use client"
import NotFoundItem from '@/components/modules/NotFoundItem/NotFoundItem'
import TopSectionPanel from '@/components/modules/UserPanel/TopSectionPanel/TopSectionPanel'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import ProductBox from '@/components/modules/ProductBox/ProductBox';
import { useGetMeUserQuery } from '@/redux/api/authApi'

export default function Fav() {
  const { data: user } = useGetMeUserQuery();


  return (
    <>
      <TopSectionPanel title="لیست علاقه مندی ها" spanTitle="علاقه مندی ها" />
      <div className=" mt-0 lg:mt-8">
        <div className="p-4 rounded-md">
          <div className="flex justify-between flex-wrap gap-6  border-b-2 border-mainBlack pb-10">
            <div>
              <form className=' relative'>
                <button className=' absolute left-3 top-2 border-none'>
                  <IoIosSearch fontSize={'1.6rem'} className=' text-main' />
                </button>
                <input type="text" placeholder="جستجو..." className=' text-sm outline-none bg-transparent border-2 border-mainBorder w-full sm:w-[350px] h-10 py-2 text-gray-500 placeholder:text-gray-500 rounded-md pr-5 pl-10' />
              </form>
            </div>
          </div>

          {
            user?.wishlist?.length ?
              <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8'>
                {user?.wishlist.map((wish: any) => (
                  <ProductBox key={wish._id} _id={wish.product._id.toString()} name={wish.product.name} cover={wish.product.cover} price={wish.product.orginalPrice} discount={wish.product.discount} categoryId={wish.product.categoryId} brand={wish.product.brand} stock={wish.product.stock} isProductBoxForProductsList={true} shortname={wish.shortname} color={wish.color} />
                ))}
              </div>
              :
              <NotFoundItem text="محصولی یافت نشد!" isBtnNeed={false} />
          }

        </div>

      </div>
    </>
  )
}
