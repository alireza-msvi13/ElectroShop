"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useDeleteProductMutation, useEditProductMutation, useGetProductsQuery } from '@/redux/api/productApi';
import { useFormik } from 'formik';
import { editProductValidator } from '@/validators/product';
import AddModal from '@/components/modules/AddModal/AddModal';
import Button from '@/components/modules/Button/Button';
import DeleteModal from '@/components/modules/DeleteModal/DeleteModal';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Image from 'next/image';
import { useGetAllCategoryQuery } from '@/redux/api/categoryApi';
import { IProduct } from '@/interfaces/product';

export default function ProductTable() {
    const { data: products } = useGetProductsQuery();
    const { data: categories } = useGetAllCategoryQuery();

    const [isShowEditModal, setIsShowEditModal] = useState(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [productId, setProductId] = useState<string | null>(null);
    const [mainProductInfo, setMainProductInfo] = useState<Partial<IProduct>>({});

    const [deleteProduct] = useDeleteProductMutation();
    const router = useRouter();

    const deleteProductHandler = async (id: string) => {
        try {
            await deleteProduct(id).unwrap();
            toast.success("محصول با موفقیت حذف شد");
            router.refresh();
            setIsShowDeleteModal(false);
        } catch (err: any) {
            setIsShowDeleteModal(false);
            if (err.status === 400) toast.error("اطلاعات به درستی وارد نشده است")
            else if (err.status === 401) toast.error("محصولی یافت نشد")
            else if (err.status === 500) toast.error("مشکلی از سمت ما پیش اومده لطفا چند ساعت دیگه دوباره امتحان کنید")
        }
    };

    const [editProduct, { isLoading }] = useEditProductMutation();

    const editProductHandler = async (formData: FormData) => {
        try {
            await editProduct(formData).unwrap();
            if (!isLoading) {
                toast.success("محصول با موفقیت ویرایش شد");
                router.refresh();
                setIsShowEditModal(false);
            }
        } catch (err: any) {
            setIsShowEditModal(false);
            if (err.status === 400) toast.error("اطلاعات به درستی وارد نشده است")
            else if (err.status === 401) toast.error("محصولی یافت نشد")
            else if (err.status === 500) toast.error("مشکلی از سمت ما پیش اومده لطفا چند ساعت دیگه دوباره امتحان کنید")
        }
    };

    const editForm = useFormik({
        initialValues: {
            name: '',
            shortname: '',
            discount: 0,
            price: 0,
            color: '',
            stock: 0,
            brand: '',
            cover: undefined,
            categoryId: '',
        },
        onSubmit: (values) => {
            const formData = new FormData();
            if (productId) formData.append('id', productId);
            formData.append('name', values.name);
            formData.append('shortname', values.shortname);
            formData.append('discount', values.discount.toString());
            formData.append('price', values.price.toString());
            formData.append('stock', values.stock.toString());
            formData.append('brand', values.brand);
            formData.append('color', "مشکی");
            if (values.cover) formData.append('cover', values.cover);
            formData.append('categoryId', values.categoryId);

            editProductHandler(formData);
            setIsShowEditModal(false);
        },
        validationSchema: editProductValidator,
    });

    useEffect(() => {
        if (isShowEditModal) {
            editForm.setValues({
                name: mainProductInfo.name || '',
                shortname: mainProductInfo.shortname || '',
                discount: mainProductInfo.discount || 0,
                price: mainProductInfo.price || 0,
                stock: mainProductInfo.stock || 0,
                color: mainProductInfo.color || '',
                brand: mainProductInfo.brand || '',
                cover: undefined,
                categoryId: mainProductInfo.categoryId?._id || '',
            });
        }
    }, [isShowEditModal, mainProductInfo,editForm]);

    return (
        <>
            {
                products?.length ?
                    <table className="w-full mt-10 text-gray-500 overflow-auto">
                        <thead className="border-b child:whitespace-nowrap">
                            <tr className="child:text-right child:p-4 text-gray-600">
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
                            {products?.map((product: any) => (
                                <tr key={product._id} className=' child:p-4 child:text-sm'>
                                    <td>
                                        <Image src={`http://localhost:4000/public/covers/${product.cover}`} width={45} height={45} alt='product' />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.discount ? product.discount + "%" : "-"}</td>
                                    <td>{product.price.toLocaleString()}</td>
                                    <td>
                                        {Math.floor(product.price - ((product.price * product.discount) / 100)).toLocaleString()}
                                    </td>
                                    <td className={`${product.stock === 0 ? "text-red-500" : ""}`}>{product.stock === 0 ? "ناموجود" : product.stock}</td>
                                    <td>{product.categoryId.title || 'Unknown Category'}</td>

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

                    </table> :
                    <div className=' mt-8 bg-mainBg rounded-lg p-3 text-sm'>محصولی یافت نشد !</div>

            }

            {/* Delete modal */}
            {isShowDeleteModal && (
                <DeleteModal
                    onClose={() => setIsShowDeleteModal(false)}
                    onSubmit={() => deleteProductHandler(productId!)}
                    title="محصول حذف شود؟"
                />
            )}

            {/* Edit modal */}
            {isShowEditModal && (
                <AddModal title="ویرایش محصول" onClose={() => setIsShowEditModal(false)}>
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
                                <label htmlFor="shortname" className="text-sm font-medium text-gray-900 block mb-2">نام کوتاه - لینک</label>
                                <input type="text" name="shortname" id="shortname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5 " placeholder="headphone-LG"
                                    value={editForm.values.shortname}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {
                                    editForm.errors.shortname && editForm.touched.shortname && <label htmlFor="shortname" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.shortname}</label>
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
                                <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">قیمت اصلی</label>
                                <input type="number" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="12300000"
                                    name="price"
                                    value={editForm.values.price}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />

                                {
                                    editForm.errors.price && editForm.touched.price && <label htmlFor="price" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.price}</label>
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
                                    {categories?.map((category: any) => (
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
                                        const files = event.currentTarget.files;
                                        if (files && files[0]) {
                                            editForm.setFieldValue("cover", files[0]);
                                        } else {
                                            editForm.setFieldValue("cover", undefined);
                                        }
                                    }}
                                />
                                {
                                    editForm.errors.cover && editForm.touched.cover && <label htmlFor="cover" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.cover}</label>
                                }
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-8" disabled={isLoading}>
                            <div className={`btn w-full before:w-full ${isLoading && 'bg-mainBlack'} text-white`}>
                                <span className="text-sm">{isLoading ? 'لطفا منتظر بمانید ...' : 'ویرایش'}</span>
                                {!isLoading && <IoIosArrowRoundForward className="text-2xl rotate-180" />}
                            </div>
                        </button>
                    </form>
                </AddModal>
            )}
        </>
    );
}
