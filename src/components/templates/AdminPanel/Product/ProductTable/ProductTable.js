"use client"
import Button from '@/components/modules/Button/Button';
import DeleteModal from '@/components/modules/DeleteModal/DeleteModal';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useDeleteProductMutation, useEditProductMutation } from '@/redux/api/productApi';
import { useFormik } from 'formik';
import { createProductValidator, editProductValidator } from '@/validators/product';
import AddModal from '@/components/modules/AddModal/AddModal';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Image from 'next/image';
export default function ProductTable({ products, categories }) {

    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)

    const [productId, setProductId] = useState(null)
    const [mainProductInfo, setMainProductInfo] = useState({})



    const [deleteProduct] = useDeleteProductMutation();
    const router = useRouter();

    const deleteProductHandler = async (id) => {
        try {
            const result = await deleteProduct({ id }).unwrap();
            toast.success(result.message)
            router.refresh()
            setIsShowDeleteModal(false)

        } catch (err) {
            toast.error('خطای سمت سرور !')
            setIsShowDeleteModal(false)
        }
    }

    const [editProduct, { isLoading }] = useEditProductMutation();

    const editProductHandler = async (formData) => {
        try {
            const result = await editProduct(formData).unwrap();
            if (!isLoading) {
                toast.success(result.message)
                router.refresh()
                setIsShowEditModal(false)
            }
        } catch (err) {
            toast.error(err?.data?.message)
            setIsShowEditModal(false)
        }
    }



    const editForm = useFormik({
        initialValues: { name: "", shortName: "", discount: 0, orginalPrice: "", stock: "", brand: "", cover: null, categoryId: "" },

        onSubmit: (values) => {            

            let formData = new FormData();
            formData.append('id', productId);
            formData.append('name', values.name);
            formData.append('shortName', values.shortName);
            formData.append('discount', values.discount || 0);
            formData.append('orginalPrice', values.orginalPrice);
            formData.append('stock', values.stock);
            formData.append('brand', values.brand);
            formData.append('cover', values.cover);
            formData.append('categoryId', values.categoryId);


            editProductHandler(formData)
            setIsShowEditModal(false)
        },

        validationSchema: editProductValidator,
    });

    useEffect(() => {
        if (isShowEditModal) {

            editForm.setValues({
                name: mainProductInfo.name || "",
                shortName: mainProductInfo.shortName || "",
                discount: mainProductInfo.discount || 0,
                orginalPrice: mainProductInfo.orginalPrice || "",
                stock: mainProductInfo.stock || "",
                brand: mainProductInfo.brand || "",
                cover: "",
                categoryId: mainProductInfo.categoryId._id || "",
            });

        }
    }, [isShowEditModal, mainProductInfo]);


    return (
        <>
            <table className="w-full mt-10 text-gray-500 overflow-auto">
                <thead className="border-b child:whitespace-nowrap">
                    <tr className='child:text-right child:p-4 text-gray-600'>
                        <th>تصویر</th>
                        <th>نام</th>
                        <th>برند</th>
                        <th>تخفیف</th>
                        <th>قیمت قبلی</th>
                        <th>قیمت جدید</th>
                        <th>موجودی</th>
                        <th>دسته بندی</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                    {products?.map((product, index) => (
                        <tr key={product._id} className=' child:p-4 child:text-sm'>
                            <td>
                                <Image src={`/uploads/${product.cover}`} width={45} height={45} alt='product' />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.brand}</td>
                            <td>{product.discount ? product.discount + "%" : "-"}</td>
                            <td>{product.orginalPrice.toLocaleString()}</td>
                            <td>
                                {
                                    Math.floor(product.orginalPrice - ((product.orginalPrice * product.discount) / 100)).toLocaleString()
                                }
                            </td>
                            <td className={`${product.stock === 0 ? "text-red-500" : ""}`}>{product.stock === 0 ? "ناموجود" : product.stock}</td>
                            <td>{product.categoryId.title}</td>


                            <td >
                                <div onClick={() => {
                                    setIsShowEditModal(true)
                                    setMainProductInfo(product)
                                    setProductId(product._id)
                                }} className=' inline-block'>
                                    <Button isIconNeed={false} style="w-[100px] bg-main" text="ویرایش" />
                                </div>
                            </td>

                            <td >
                                <div onClick={() => {
                                    setIsShowDeleteModal(true)
                                    setProductId(product._id)
                                }} className=" inline-block">
                                    <Button isIconNeed={false} style="w-[100px] bg-red-500" text="حذف" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* delete modal */}
            {isShowDeleteModal &&
                <DeleteModal onClose={() => setIsShowDeleteModal(false)} onSubmit={() => {
                    deleteProductHandler(productId)
                }} title="محصول حذف شود؟" />
            }

            {/* edit modal */}

            {
                isShowEditModal && <AddModal title="ویرایش محصول" onClose={() => setIsShowEditModal(false)}>
                    <form onSubmit={editForm.handleSubmit}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">نام محصول</label>
                                <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="هدفون ال جی"
                                    value={editForm.values.name}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {
                                    editForm.errors.name && editForm.touched.name && <label htmlFor="name" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.name}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="shortName" className="text-sm font-medium text-gray-900 block mb-2">نام کوتاه - لینک</label>
                                <input type="text" name="shortName" id="shortName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5 " placeholder="headphone-LG"
                                    value={editForm.values.shortName}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {
                                    editForm.errors.shortName && editForm.touched.shortName && <label htmlFor="shortName" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.shortName}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">برند</label>
                                <input type="text" name="brand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5 " placeholder="headphone-LG"
                                    value={editForm.values.brand}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {
                                    editForm.errors.brand && editForm.touched.brand && <label htmlFor="brand" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.brand}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="orginalPrice" className="text-sm font-medium text-gray-900 block mb-2">قیمت اصلی</label>
                                <input type="number" id="orginalPrice" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="12300000"
                                    name="orginalPrice"
                                    value={editForm.values.orginalPrice}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />

                                {
                                    editForm.errors.orginalPrice && editForm.touched.orginalPrice && <label htmlFor="orginalPrice" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.orginalPrice}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="discount" className="text-sm font-medium text-gray-900 block mb-2">درصد تخفیف</label>
                                <input type="number" id="discount" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="10%"
                                    name='discount'
                                    value={editForm.values.discount}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {
                                    editForm.errors.discount && editForm.touched.discount && <label htmlFor="discount" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.discount}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="stock" className="text-sm font-medium text-gray-900 block mb-2">موجودی</label>
                                <input type="number" id="stock" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="5"
                                    name='stock'
                                    value={editForm.values.stock}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {
                                    editForm.errors.stock && editForm.touched.stock && <label htmlFor="stock" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.stock}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">دسته بندی</label>
                                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 outline-none child:outline-none"
                                    name="categoryId"
                                    value={editForm.values.categoryId}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                >
                                    <option value="-1">انتخاب دسته بندی</option>
                                    {categories?.map((category) => (
                                        <option key={category._id} value={category._id}>{category.title}</option>
                                    ))}
                                </select>
                                {
                                    editForm.errors.categoryId && editForm.touched.categoryId && <label htmlFor="category" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.categoryId}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">تغییر کاور</label>
                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2.5 cursor-pointer bg-gray-50 dark:text-gray-400"
                                    type="file"
                                    id="cover"
                                    name="cover"
                                    onChange={(event) => {
                                        editForm.setFieldValue("cover", event.currentTarget.files[0]);
                                    }}
                                />
                                {
                                    editForm.errors.cover && editForm.touched.cover && <label htmlFor="cover" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.cover}</label>
                                }
                            </div>

                        </div>
                        <button type="submit" className=' w-full mt-8' disabled={isLoading}  >
                            <div className={` btn w-full before:w-full ${isLoading && "bg-mainBlack"} text-white`}>
                                <span className=' text-sm '>
                                    {isLoading ? "لطفا منتظر بمانید ..." : "ویرایش"}
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
