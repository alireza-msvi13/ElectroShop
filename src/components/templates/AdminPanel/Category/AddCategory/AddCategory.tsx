"use client";
import React, { useState } from 'react';
import Button from '@/components/modules/Button/Button';
import { useFormik } from 'formik';
import { useAddCategoryMutation, useGetAllCategoryQuery } from '@/redux/api/categoryApi';
import { toast } from 'react-toastify';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Modal from '@/components/modules/Modal/Modal';
import { categoryValidator } from '@/validators/category';

interface AddCategoryFormValues {
    title: string;
    shortname: string;
}

export default function AddCategory() {
    const [isShowAddModal, setIsShowAddModal] = useState<boolean>(false);
    const { refetch } = useGetAllCategoryQuery();

    const [addCategory, { isLoading }] = useAddCategoryMutation();

    const addCategoryHandler = async (values:any) => {
        try {

            const result = await addCategory(values).unwrap();
            if (!isLoading) {
                toast.success("محصول با موفقیت اضافه شد");
                setIsShowAddModal(false);
                addForm.setValues({ title: "", shortname: "" });
                refetch()

            }
        } catch (err: any) {
            if (err.status === 400) toast.error("اطلاعات به درستی وارد نشده است")
            else if (err.status === 409) toast.error("عنوان یا نام کوتاه تکراری است")
            else if (err.status === 500) toast.error("مشکلی از سمت ما پیش اومده لطفا چند ساعت دیگه دوباره امتحان کنید")
            setIsShowAddModal(false);
        }
    };

    const addForm = useFormik<AddCategoryFormValues>({
        initialValues: { title: "", shortname: "" },

        onSubmit: (values) => {
            addCategoryHandler(values);
            setIsShowAddModal(false);
        },

        validationSchema: categoryValidator,
    });

    return (
        <>
            <div onClick={() => setIsShowAddModal(true)}>
                <Button style=' w-[160px] bg-green-500' text="اضافه کردن دسته بندی +" isIconNeed={false} />
            </div>

            {isShowAddModal && (
                <Modal onClose={() => setIsShowAddModal(false)}>
                    <form onSubmit={addForm.handleSubmit} className='p-6'>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2">عنوان</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5"
                                    placeholder="عنوان"
                                    value={addForm.values.title}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {addForm.errors.title && addForm.touched.title && (
                                    <label htmlFor="title" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.title}</label>
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
                                    value={addForm.values.shortname}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {addForm.errors.shortname && addForm.touched.shortname && (
                                    <label htmlFor="shortname" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.shortname}</label>
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
