"use client"

import { useFormik } from 'formik';
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { toast } from 'react-toastify';
import { FaKey, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { useGetMeUserQuery } from '@/redux/api/authApi';
import { IUserInfo } from '@/interfaces/auth';
import { updateUserValidator } from '@/validators/user';
import { useUpdateInfoByUserMutation } from '@/redux/api/userApi';

export default function EditFormSection() {

    const [updateUserInfo, updateUserInfoResponse] = useUpdateInfoByUserMutation();
    const { data: user ,refetch } = useGetMeUserQuery();


    const updateUserInfoHandler = async (info: IUserInfo) => {
        try {
            await updateUserInfo(info).unwrap();
            if (!updateUserInfoResponse.isLoading) {
                toast.success("اطلاهات شما با موفقیت آپدیت شد")
                refetch()
            }
        } catch (err: any) {
            console.error(err);
            if (err.status === 400) toast.error("اطلاعات به درستی وارد نشده است")
            else if (err.status === 401) toast.error("کاربری با این ایمیل وجود ندارد")
            else if (err.status === 500) toast.error("مشکلی از سمت ما پیش اومده لطفا چند ساعت دیگه دوباره امتحان کنید")
        }
    }




    const editForm = useFormik({
        initialValues: {
            username: user?.username || "",
            email: user?.email || "",
            phone: user?.phone || "",
            province: user?.province || "",
            city: user?.city || "",
            address: user?.address || "",
            postalCode: user?.postalCode || "",

        },
        enableReinitialize: true,
        validationSchema: updateUserValidator,
        onSubmit: (values: any) => {
            updateUserInfoHandler(values)
        }
    });




    return (
        <>
            <form onSubmit={editForm.handleSubmit}>
                <h4 className=' font-morabba text-xl pb-10 px-4 text-main '>جزئیات حساب</h4>
                <div className=' grid grid-cols-12 gap-6 px-4'>
                    <div className=' col-span-12 sm:col-span-6'>
                        <div className="flex flex-col relative">
                            <input type="text" id="username"
                                className=" border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                placeholder="نام کاربری" autoComplete="off"
                                value={editForm.values.username}
                                onChange={editForm.handleChange}
                                onBlur={editForm.handleBlur} />
                            <span className='absolute left-4 top-5 text-main'>
                                <FaUser className=' text-2xl' />
                            </span>
                            {
                                editForm.errors.username && editForm.touched.username &&
                                <label htmlFor="username" className='text-red-500 text-[13px] block mt-2 ml-1'>
                                    {String(editForm.errors.username)}
                                </label>
                            }
                        </div>
                    </div>
                    <div className=' col-span-12 sm:col-span-6'>
                        <div className="flex flex-col relative">
                            <input type="text" id="email"
                                className=" border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                placeholder="ایمیل" autoComplete="off"
                                value={editForm.values.email}
                                onChange={editForm.handleChange}
                                onBlur={editForm.handleBlur} />
                            <span className='absolute left-4 top-5 text-main'>
                                <MdEmail className=' text-2xl' />
                            </span>
                            {
                                editForm.errors.email && editForm.touched.email && <label htmlFor="email" className='text-red-500 text-[13px] block mt-2 ml-1'>{String(editForm.errors.email)}</label>
                            }
                        </div>
                    </div>
                    <div className=' col-span-12 sm:col-span-6'>
                        <div className="flex flex-col relative">
                            <input type="text" id="phone"
                                className=" border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                placeholder="شماره همراه" autoComplete="off"
                                name='phone'
                                value={editForm.values.phone}
                                onChange={editForm.handleChange}
                                onBlur={editForm.handleBlur} />
                            <span className='absolute left-4 top-5 text-main'>
                                <FaPhone className=' text-2xl' />
                            </span>

                            {
                                editForm.errors.phone && editForm.touched.phone && <label htmlFor="phone" className='text-red-500 text-[13px] block mt-2 ml-1'>{String(editForm.errors.phone)}</label>
                            }
                        </div>
                    </div>
                    <div className=' col-span-12 sm:col-span-6'>
                        <div className="flex flex-col relative">
                            <input type="text" id="postalCode"
                                className=" border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                placeholder="کد پستی" autoComplete="off"
                                name='postalCode'
                                value={editForm.values.postalCode}
                                onChange={editForm.handleChange}
                                onBlur={editForm.handleBlur}
                            />
                            <span className='absolute left-4 top-5 text-main'>
                                <MdOutlinePostAdd className=' text-2xl' />
                            </span>

                            {
                                editForm.errors.postalCode && editForm.touched.postalCode && <label htmlFor="postalCode" className='text-red-500 text-[13px] block mt-2 ml-1'>{String(editForm.errors.postalCode)}</label>
                            }
                        </div>
                    </div>
                    <div className=' col-span-12 sm:col-span-6'>
                        <div className="flex flex-col relative">
                            <input type="text"
                                id="province"
                                name='province'
                                value={editForm.values.province}
                                onChange={editForm.handleChange}
                                onBlur={editForm.handleBlur}
                                className=" border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                placeholder="استان" autoComplete="off" />
                            <span className='absolute left-4 top-5 text-main'>
                                <MdLocationOn className=' text-2xl' />
                            </span>
                            {
                                editForm.errors.province && editForm.touched.province && <label htmlFor="province" className='text-red-500 text-[13px] block mt-2 ml-1'>{String(editForm.errors.province)}</label>
                            }
                        </div>
                    </div>
                    <div className=' col-span-12 sm:col-span-6'>
                        <div className="flex flex-col relative">
                            <input type="text" id="city"
                                className=" border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                placeholder="شهر" autoComplete="off"
                                name='city'
                                value={editForm.values.city}
                                onChange={editForm.handleChange}
                                onBlur={editForm.handleBlur} />
                            <span className='absolute left-4 top-5 text-main'>
                                <MdLocationOn className=' text-2xl' />
                            </span>
                            {
                                editForm.errors.city && editForm.touched.city && <label htmlFor="city" className='text-red-500 text-[13px] block mt-2 ml-1'>{String(editForm.errors.city)}</label>
                            }
                        </div>
                    </div>
                    <div className=' col-span-12'>
                        <div className="flex flex-col relative">
                            <input type="text" id="address"
                                className=" border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                placeholder="آدرس دقیق" autoComplete="off"
                                name='address'
                                value={editForm.values.address}
                                onChange={editForm.handleChange}
                                onBlur={editForm.handleBlur} />
                            <span className='absolute left-4 top-5 text-main'>
                                <MdLocationOn className=' text-2xl' />
                            </span>
                            {
                                editForm.errors.address && editForm.touched.address && <label htmlFor="address" className='text-red-500 text-[13px] block mt-2 ml-1'>{String(editForm.errors.address)}</label>
                            }
                        </div>
                    </div>

                    <div className=' col-span-12 justify-start text-end'>
                        <button type="submit" className=' w-[200px] mt-8' disabled={updateUserInfoResponse.isLoading}  >
                            <div className={` btn w-full before:w-full ${updateUserInfoResponse.isLoading && "bg-mainBlack"} text-white`}>
                                <span className=' text-sm '>
                                    {updateUserInfoResponse.isLoading ? "لطفا منتظر بمانید ..." : "آپدیت اطلاعات"}
                                </span>
                                {
                                    !updateUserInfoResponse.isLoading &&
                                    <IoIosArrowRoundForward className=' text-2xl rotate-180' />
                                }
                            </div>
                        </button>
                    </div>

                </div>
            </form>

            <div className='px-4 border-t-2 border-mainBlack py-10'>
                <h4 className=' font-morabba text-xl pb-10 text-main '>تغییر رمز عبور</h4>
                <div className=' grid grid-cols-12 gap-6 '>
                    <div className=' col-span-12 sm:col-span-6'>
                        <div className="flex flex-col relative">
                            <input type="text" id="oldPassword"
                                className=" border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                placeholder="رمیز عبور قبلی" autoComplete="off"
                                value={editForm.values.oldPassword}
                                onChange={editForm.handleChange}
                                onBlur={editForm.handleBlur} />
                            <span className='absolute left-4 top-5 text-main'>
                                <FaKey className=' text-2xl' />
                            </span>
                            {
                                editForm.errors.oldPassword && editForm.touched.oldPassword && <label htmlFor="oldPassword" className='text-red-500 text-[13px] block mt-2 ml-1'>{String(editForm.errors.oldPassword)}</label>
                            }


                        </div>
                    </div>
                    <div className=' col-span-12 sm:col-span-6'>
                        <div className="flex flex-col relative">
                            <input type="text" id="newPassword"
                                className=" border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                placeholder="رمز عبور جدید" autoComplete="off"
                                value={editForm.values.newPassword}
                                onChange={editForm.handleChange}
                                onBlur={editForm.handleBlur} />
                            <span className='absolute left-4 top-5 text-main'>
                                <FaKey className=' text-2xl' />
                            </span>
                            {
                                editForm.errors.newPassword && editForm.touched.newPassword && <label htmlFor="newPassword" className='text-red-500 text-[13px] block mt-2 ml-1'>{String(editForm.errors.newPassword)}</label>
                            }
                            <div className='text-sm mt-5 flex items-center justify-end gap-1'>
                                <span>
                                    رمز عبور رو فراموش کردی؟
                                </span>
                                <span className=' text-main'>کلیک کن</span>
                            </div>
                        </div>
                    </div>

                    <div className=' col-span-12 justify-start text-end'>
                        <button className=' w-[200px] mt-8' disabled={false}  >
                            <div className={` btn w-full before:w-full ${false && "bg-mainBlack"} text-white`}>
                                <span className=' text-sm '>
                                    {false ? "لطفا منتظر بمانید ..." : "آپدیت اطلاعات"}
                                </span>
                                {
                                    !false &&
                                    <IoIosArrowRoundForward className=' text-2xl rotate-180' />
                                }
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
