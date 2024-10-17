import TopSectionPanel from '@/components/modules/AdminPanel/TopSectionPanel/TopSectionPanel'
import React from 'react'
import CategoryModel from "@/models/Category";
import { IoIosSearch } from 'react-icons/io'
import ProductTable from '@/components/templates/AdminPanel/Product/ProductTable/ProductTable'
import connectToDB from '@/configs/db'
import ProductModel from "@/models/Product";
import AddProduct from '@/components/templates/AdminPanel/Product/AddProduct/AddProduct'
export const revalidate = 0
export default async function page() {

  connectToDB();
  const products = await ProductModel
    .find({}, "-__v")
    .populate("categoryId", "_id title")
    .sort({ _id: -1 }).lean();

  const categories = await CategoryModel.find({},
    "-__v").sort({ _id: -1 }).lean();



  return (
    <>
      <TopSectionPanel title="لیست محصولات" spanTitle="محصولات" />
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
              <AddProduct categories={JSON.parse(JSON.stringify(categories))} />
            </div>
          </div>
          <div className=' overflow-auto'>
            {
              products.length ?
                <ProductTable products={JSON.parse(JSON.stringify(products))}
                  categories={JSON.parse(JSON.stringify(categories))}
                />
                : <div className=' mt-8 bg-mainBg rounded-lg p-3 text-sm'>محصولی یافت نشد !</div>
            }
          </div>
        </div>

      </div>

    </>

  )
}
