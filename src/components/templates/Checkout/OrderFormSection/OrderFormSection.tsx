"use client";
import { setCart } from '@/redux/slice/cartSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartSummery from '@/components/modules/CartSummery.js/CartSummery';
import { FaPhone, FaUser } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdOutlinePostAdd } from "react-icons/md";
import { useFormik } from 'formik';
import NotFoundItem from '@/components/modules/NotFoundItem/NotFoundItem';
import { useGetMeUserQuery } from '@/redux/api/authApi';
import { createOrderValidator } from '@/validators/order';

export default function OrderFormSection() {
    const cart = useSelector((state: any) => state.cart.items);
    const dispatch = useDispatch();
    const isLoading = false;
    const { data: user } = useGetMeUserQuery();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        dispatch(setCart(storedCart));
    }, [dispatch]);

    const orderForm = useFormik({
        initialValues: {
            name: user?.username || "",
            email: user?.email || "",
            phone: user?.phone || "",
            province: user?.province || "",
            city: user?.city || "",
            address: user?.address || "",
            postalCode: user?.postalCode || "",
            message: ""
        },
        enableReinitialize: true,
        validationSchema: createOrderValidator,
        onSubmit: (values) => {
            // orderHandler(values)
        }
    });

    return (
        <>
            {cart.length ? (
                <form onSubmit={orderForm.handleSubmit} className='grid grid-cols-12 gap-y-16 xl:gap-6 mb-36'>
                    <div className='col-span-12 xl:col-span-8'>
                        <div className='grid grid-cols-12 gap-6'>
                            {/* Name Field */}
                            <div className='col-span-12 sm:col-span-6'>
                                <div className="flex flex-col relative">
                                    <input type="text" id="name"
                                        className="border focus:border-main outline-none text-md h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        placeholder="نام و نام خانوادگی" autoComplete="off"
                                        value={orderForm.values.name}
                                        onChange={orderForm.handleChange}
                                        onBlur={orderForm.handleBlur} />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <FaUser className='text-2xl' />
                                    </span>
                                    {orderForm.errors.name && orderForm.touched.name && (
                                        <label htmlFor="name" className='text-red-500 text-[13px] block mt-2 ml-1'>
                                            {String(orderForm.errors.name)}
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className='col-span-12 sm:col-span-6'>
                                <div className="flex flex-col relative">
                                    <input type="text" id="email"
                                        className="border focus:border-main outline-none text-md h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        placeholder="ایمیل" autoComplete="off"
                                        value={orderForm.values.email}
                                        onChange={orderForm.handleChange}
                                        onBlur={orderForm.handleBlur} />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <MdEmail className='text-2xl' />
                                    </span>
                                    {orderForm.errors.email && orderForm.touched.email && (
                                        <label htmlFor="email" className='text-red-500 text-[13px] block mt-2 ml-1'>
                                            {String(orderForm.errors.email)}
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* Phone Field */}
                            <div className='col-span-12 sm:col-span-6'>
                                <div className="flex flex-col relative">
                                    <input type="text" id="phone"
                                        className="border focus:border-main outline-none text-md h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        placeholder="شماره همراه" autoComplete="off"
                                        name='phone'
                                        value={orderForm.values.phone}
                                        onChange={orderForm.handleChange}
                                        onBlur={orderForm.handleBlur} />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <FaPhone className='text-2xl' />
                                    </span>
                                    {orderForm.errors.phone && orderForm.touched.phone && (
                                        <label htmlFor="phone" className='text-red-500 text-[13px] block mt-2 ml-1'>
                                            {String(orderForm.errors.phone)}
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* Postal Code Field */}
                            <div className='col-span-12 sm:col-span-6'>
                                <div className="flex flex-col relative">
                                    <input type="text" id="postalCode"
                                        className="border focus:border-main outline-none text-md h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        placeholder="کد پستی" autoComplete="off"
                                        name='postalCode'
                                        value={orderForm.values.postalCode}
                                        onChange={orderForm.handleChange}
                                        onBlur={orderForm.handleBlur} />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <MdOutlinePostAdd className='text-2xl' />
                                    </span>
                                    {orderForm.errors.postalCode && orderForm.touched.postalCode && (
                                        <label htmlFor="postalCode" className='text-red-500 text-[13px] block mt-2 ml-1'>
                                            {String(orderForm.errors.postalCode)}
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* Province Field */}
                            <div className='col-span-12 sm:col-span-6'>
                                <div className="flex flex-col relative">
                                    <input type="text" id="province"
                                        name='province'
                                        value={orderForm.values.province}
                                        onChange={orderForm.handleChange}
                                        onBlur={orderForm.handleBlur}
                                        className="border focus:border-main outline-none text-md h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        placeholder="استان" autoComplete="off" />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <MdLocationOn className='text-2xl' />
                                    </span>
                                    {orderForm.errors.province && orderForm.touched.province && (
                                        <label htmlFor="province" className='text-red-500 text-[13px] block mt-2 ml-1'>
                                            {String(orderForm.errors.province)}
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* City Field */}
                            <div className='col-span-12 sm:col-span-6'>
                                <div className="flex flex-col relative">
                                    <input type="text" id="city"
                                        className="border focus:border-main outline-none text-md h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        placeholder="شهر" autoComplete="off"
                                        name='city'
                                        value={orderForm.values.city}
                                        onChange={orderForm.handleChange}
                                        onBlur={orderForm.handleBlur} />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <MdLocationOn className='text-2xl' />
                                    </span>
                                    {orderForm.errors.city && orderForm.touched.city && (
                                        <label htmlFor="city" className='text-red-500 text-[13px] block mt-2 ml-1'>
                                            {String(orderForm.errors.city)}
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* Address Field */}
                            <div className='col-span-12'>
                                <div className="flex flex-col relative">
                                    <input type="text" id="address"
                                        className="border focus:border-main outline-none text-md h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        placeholder="آدرس دقیق" autoComplete="off"
                                        name='address'
                                        value={orderForm.values.address}
                                        onChange={orderForm.handleChange}
                                        onBlur={orderForm.handleBlur} />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <MdLocationOn className='text-2xl' />
                                    </span>
                                    {orderForm.errors.address && orderForm.touched.address && (
                                        <label htmlFor="address" className='text-red-500 text-[13px] block mt-2 ml-1'>
                                            {String(orderForm.errors.address)}
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className='col-span-12'>
                                <div className="flex flex-col relative">
                                    <textarea id="message" name='message'
                                        className="border focus:border-main outline-none text-md min-h-28 max-h-40 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        placeholder="اطلاعات بیشتر" autoComplete="off"
                                        value={orderForm.values.message}
                                        onChange={orderForm.handleChange}
                                        onBlur={orderForm.handleBlur} />
                                    {orderForm.errors.message && orderForm.touched.message && (
                                        <label htmlFor="message" className='text-red-500 text-[13px] block mt-2 ml-1'>
                                            {String(orderForm.errors.message)}
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className='col-span-12 xl:col-span-4'>
                        <CartSummery text="ثبت سفارش">
                            <button type="submit" className='w-full mt-8' disabled={isLoading}>
                                <div className={`btn w-full before:w-full ${isLoading && "bg-mainBlack"} text-white`}>
                                    <span className='text-sm'>
                                        {isLoading ? "لطفا منتظر بمانید ..." : "ثبت سفارش"}
                                    </span>
                                </div>
                            </button>
                        </CartSummery>
                    </div>
                </form>
            ) : (
                <NotFoundItem text="سبد خرید شما خالیه" isBtnNeed={true} />
            )}
        </>
    );
}
