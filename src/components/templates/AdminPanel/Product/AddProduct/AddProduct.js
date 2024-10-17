"use client";
import React, { useState } from 'react'
import Button from '@/components/modules/Button/Button'
import AddModal from '@/components/modules/AddModal/AddModal';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { createProductValidator } from '@/validators/product';
import { useAddProductMutation } from '@/redux/api/productApi';

export default function AddProduct({categories}) {

    const [isShowAddModal, setIsShowAddModal] = useState(false)

    const [addProduct, { isLoading }] = useAddProductMutation();
    const router = useRouter();

    const addProductHandler = async (formData) => {
        try {
            const result = await addProduct(formData).unwrap();
            if (!isLoading) {
                toast.success(result.message)
                router.refresh()
                setIsShowAddModal(false)
            }
        } catch (err) {
            console.error(err);
            toast.error(err?.data?.message)
            setIsShowAddModal(false)
        }
    }


    const addForm = useFormik({
        initialValues: { name: "", shortName: "", discount: "0", orginalPrice: "", stock: "", brand: "", cover: null, categoryId: "" },

        onSubmit: (values) => {

            let formData = new FormData();
            formData.append('name', values.name);
            formData.append('shortName', values.shortName);
            formData.append('discount', values.discount);
            formData.append('orginalPrice', values.orginalPrice);
            formData.append('stock', values.stock);
            formData.append('brand', values.brand);
            formData.append('cover', values.cover);
            formData.append('categoryId', values.categoryId);

            addProductHandler(formData)
            
            setIsShowAddModal(false)
        },

        validationSchema: createProductValidator,
    });


    return (

        <>
            <div onClick={() => setIsShowAddModal(true)}>
                <Button style=' w-[160px] bg-green-500' text="اضافه کردن محصول +" isIconNeed={false} />
            </div>
            {
                isShowAddModal && <AddModal title="اضافه کردن محصول" onClose={() => setIsShowAddModal(false)}>
                    <form onSubmit={addForm.handleSubmit}>
                    <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">نام محصول</label>
                                <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="هدفون ال جی"
                                    value={addForm.values.name}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.name && addForm.touched.name && <label htmlFor="name" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.name}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="shortName" className="text-sm font-medium text-gray-900 block mb-2">نام کوتاه - لینک</label>
                                <input type="text" name="shortName" id="shortName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5 " placeholder="headphone-LG"
                                    value={addForm.values.shortName}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.shortName && addForm.touched.shortName && <label htmlFor="shortName" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.shortName}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">برند</label>
                                <input type="text" name="brand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5 " placeholder="headphone-LG"
                                    value={addForm.values.brand}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.brand && addForm.touched.brand && <label htmlFor="brand" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.brand}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="orginalPrice" className="text-sm font-medium text-gray-900 block mb-2">قیمت اصلی</label>
                                <input type="number" id="orginalPrice" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="12300000"
                                    name="orginalPrice"
                                    value={addForm.values.orginalPrice}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />

                                {
                                    addForm.errors.orginalPrice && addForm.touched.orginalPrice && <label htmlFor="orginalPrice" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.orginalPrice}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="discount" className="text-sm font-medium text-gray-900 block mb-2">درصد تخفیف</label>
                                <input type="number" id="discount" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="10%"
                                    name='discount'
                                    value={addForm.values.discount}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.discount && addForm.touched.discount && <label htmlFor="discount" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.discount}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="stock" className="text-sm font-medium text-gray-900 block mb-2">موجودی</label>
                                <input type="number" id="stock" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="5"
                                    name='stock'
                                    value={addForm.values.stock}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.stock && addForm.touched.stock && <label htmlFor="stock" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.stock}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">دسته بندی</label>
                                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 outline-none child:outline-none"
                                    name="categoryId"
                                    value={addForm.values.categoryId}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                >
                                    <option value="-1">انتخاب دسته بندی</option>
                                    {categories?.map((category) => (
                                        <option key={category._id} value={category._id}>{category.title}</option>
                                    ))}
                                </select>
                                {
                                    addForm.errors.categoryId && addForm.touched.categoryId && <label htmlFor="category" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.categoryId}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">کاور محصول</label>
                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2.5 cursor-pointer bg-gray-50 dark:text-gray-400"
                                    type="file"
                                    id="cover"
                                    name="cover"
                                    onChange={(event) => {
                                        addForm.setFieldValue("cover", event.currentTarget.files[0]);
                                    }}
                                />
                                {
                                    addForm.errors.cover && addForm.touched.cover && <label htmlFor="cover" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.cover}</label>
                                }
                            </div>
                          
                        </div>
                        <button type="submit" className=' w-full mt-8' disabled={isLoading}  >
                            <div className={` btn w-full before:w-full ${isLoading && "bg-mainBlack"} text-white`}>
                                <span className=' text-sm '>
                                    {isLoading ? "لطفا منتظر بمانید ..." : "اضافه کردن"}
                                </span>
                                {
                                    !isLoading &&
                                    <IoIosArrowRoundForward className=' text-2xl rotate-180' />
                                }
                            </div>
                        </button>
                    </form>





                </AddModal>
            }

        </>




    )


}
