import TopSectionPanel from '@/components/modules/AdminPanel/TopSectionPanel/TopSectionPanel'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import CategoryTable from '@/components/templates/AdminPanel/Category/CategoryTable/CategoryTable';
import AddCategory from '@/components/templates/AdminPanel/Category/AddCategory/AddCategory';
export const revalidate = 0
export default async function page() {



  return (
    <>
      <TopSectionPanel title="دسته بندی" spanTitle="دسته بندی" />
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
            <div className=' size-fit' >
              <AddCategory />
            </div>
          </div>
          <div className=' overflow-auto'>
            <CategoryTable />
          </div>
        </div>

      </div>

    </>

  )
}
