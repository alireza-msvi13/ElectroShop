"use client"
import Button from '@/components/modules/Button/Button';
import DeleteModal from '@/components/modules/DeleteModal/DeleteModal';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDeleteCategoryMutation, useEditCategoryMutation, useGetAllCategoryQuery } from '@/redux/api/categoryApi';
import { useFormik } from 'formik';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Modal from '@/components/modules/Modal/Modal';
import { categoryValidator } from '@/validators/category';
interface ICategory {
    _id: string;
    title: string;
    shortname: string
}

export default function CategoryTable() {
    const { data: categories, refetch } = useGetAllCategoryQuery();
    const [isShowEditModal, setIsShowEditModal] = useState<boolean>(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);

    const [categoryId, setCategoryId] = useState<string | null>(null);
    const [mainCategoryInfo, setMainCategoryInfo] = useState<Partial<ICategory>>({});

    const [deleteCategory] = useDeleteCategoryMutation();
    const [editCategory, { isLoading }] = useEditCategoryMutation();

    const deleteCategoryHandler = async (id: string) => {
        try {
            await deleteCategory(id).unwrap();
            toast.success("دسته بندی با موفقیت حذف شد");
            setIsShowDeleteModal(false);
            refetch()
            console.log(categories);
            
        } catch (err: any) {
            console.error(err);
            if (err.status === 400) toast.error("اطلاعات به درستی وارد نشده است")
            else if (err.status === 401) toast.error("دسته بندی یافت نشد")
            else if (err.status === 500) toast.error("مشکلی از سمت ما پیش اومده لطفا چند ساعت دیگه دوباره امتحان کنید")
            setIsShowDeleteModal(false);
        }
    };

    const editCategoryHandler = async ({ title, shortname }: { title: string, shortname: string }) => {
        try {
            await editCategory({ id: categoryId!, title, shortname }).unwrap();
            toast.success("دسته بندی با موفقیت ویرایش شد");
            setIsShowEditModal(false);
            editForm.setValues({ title: "", shortname: "" });
            refetch()
        } catch (err: any) {
            console.error(err);
            if (err.status === 400) toast.error("اطلاعات به درستی وارد نشده است")
            else if (err.status === 401) toast.error("دسته بندی یافت نشد")
            else if (err.status === 500) toast.error("مشکلی از سمت ما پیش اومده لطفا چند ساعت دیگه دوباره امتحان کنید")
            setIsShowEditModal(false);
        }
    };

    const editForm = useFormik({
        initialValues: { title: "", shortname: "" },
        onSubmit: (values) => {
            editCategoryHandler(values);
            setIsShowEditModal(false);
        },
        validationSchema: categoryValidator,
    });

    useEffect(() => {
        if (isShowEditModal) {
            editForm.setValues({
                title: mainCategoryInfo.title || "",
                shortname: mainCategoryInfo.shortname || ""
            });
        }
    }, [isShowEditModal, mainCategoryInfo]);

    return (
        <>
            {
                categories?.length ?
                    <table className="w-full mt-10 text-gray-500 overflow-auto">
                        <thead className="border-b child:whitespace-nowrap">
                            <tr className='child:text-right child:p-4 text-gray-600'>
                                <th>عنوان دسته بندی</th>
                                <th>نام کوتاه دسته بندی</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                            {categories?.map((category: ICategory) => (
                                <tr key={category._id} className=' child:p-4'>
                                    <td>
                                        <div>
                                            <Link href="#" className="text-gray-600 font-bolder">{category.title}</Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <Link href="#" className="text-gray-600 font-bolder">{category.shortname}</Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => {
                                            setIsShowEditModal(true);
                                            setMainCategoryInfo(category);
                                            setCategoryId(category._id);
                                        }} className=' inline-block'>
                                            <Button isIconNeed={false} style="w-[100px] bg-main" text="ویرایش" />
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => {
                                            setIsShowDeleteModal(true);
                                            setCategoryId(category._id);
                                        }} className=" inline-block">
                                            <Button isIconNeed={false} style="w-[100px] bg-red-500" text="حدف" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table> :
                    <div className=' mt-8 bg-mainBg rounded-lg p-3 text-sm'>دسته بندی وجود ندارد!</div>
            }

            {isShowDeleteModal && (
                <DeleteModal
                    onClose={() => setIsShowDeleteModal(false)}
                    onSubmit={() => deleteCategoryHandler(categoryId!)}
                    title="دسته بندی حذف شود؟"
                />
            )}

            {isShowEditModal && (
                <Modal onClose={() => setIsShowEditModal(false)}>
                    <form onSubmit={editForm.handleSubmit} className='p-6'>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2">عنوان</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5"
                                    placeholder="عنوان جدید"
                                    value={editForm.values.title}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {editForm.errors.title && editForm.touched.title && (
                                    <label htmlFor="title" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.title}</label>
                                )}
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="shortname" className="text-sm font-medium text-gray-900 block mb-2">نام کوتاه</label>
                                <input
                                    type="text"
                                    name="shortname"
                                    id="shortname"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5"
                                    placeholder="نام کوتاه"
                                    value={editForm.values.shortname}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {editForm.errors.shortname && editForm.touched.shortname && (
                                    <label htmlFor="shortname" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.shortname}</label>
                                )}
                            </div>
                        </div>
                        <button type="submit" className='w-full mt-8' disabled={isLoading}>
                            <div className={`btn w-full before:w-full ${isLoading && "bg-mainBlack"} text-white`}>
                                <span className='text-sm'>
                                    {isLoading ? "لطفا منتظر بمانید ..." : "اضافه کردن"}
                                </span>
                                {!isLoading && <IoIosArrowRoundForward className='text-2xl rotate-180' />}
                            </div>
                        </button>
                    </form>
                </Modal>
            )}
        </>
    );
}
