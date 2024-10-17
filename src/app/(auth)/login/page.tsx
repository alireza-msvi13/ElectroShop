"use client";
import Link from 'next/link'
import React from 'react'
import { FaKey } from 'react-icons/fa';
import { MdNavigateNext } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useFormik } from 'formik';
import { loginValidator } from '@/validators/auth';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useLoginUserMutation } from '@/redux/api/authApi';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { ILoginUserBody } from '@/interfaces/auth';
import { setCookie } from 'cookies-next';

export default function Login() {

    const [loginUser, { isLoading }] = useLoginUserMutation();
    const router = useRouter();


    const onSubmitHandler = async (userInfo: ILoginUserBody) => {
        try {
            const result = await loginUser(userInfo).unwrap();
            setCookie('refreshToken', result.refreshToken, { maxAge: 60 * 60 * 24 * 20 });
            setCookie('token', result.token, { maxAge: 60 * 60 * 24 * 10 });
            toast.success("با موفقیت وارد شدید")
            router.replace("/");
            router.refresh()

        } catch (err: any) {
            // console.log(err);
            // toast.error(err?.data?.message)
            if (err.status === 400) toast.error(err.message)
            else if (err.status === 401) toast.error("کاربری با این ایمیل وجود ندارد")
            else if (err.status === 403) toast.error("رمز عبور اشتباه است");
            else if (err.status === 500) toast.error("مشکلی از سمت ما پیش اومده لطفا چند ساعت دیگه دوباره امتحان کنید")
        }
    };

    const form = useFormik<ILoginUserBody>({
        initialValues: { password: "", email: "" },

        onSubmit: (values) => {
            onSubmitHandler(values);
        },

        validationSchema: loginValidator,
    });




    return (
        <>
            <div className='bg-mainBlack h-screen'>
                <header>
                    <div className="container">
                        <div className='flex items-center text-sm h-16 text-white'>
                            <Link href="/">صفحه اصلی</Link>
                            <span className=" mx-2 cursor-pointer">
                                <MdNavigateNext className=' rotate-180 text-lg ' />
                            </span>
                            <Link href="/login">ورود</Link>
                        </div>

                    </div>
                </header>

                <section>
                    <div className="container">
                        <div className="flex-center">
                            <form onSubmit={form.handleSubmit}
                                className="w-[430px] p-8 xs:p-12 rounded-lg shadow-custom bg-white  text-mainBlack space-y-6">
                                {/* <!-- logo --> */}
                                <div className="  text-center text-4xl sm:mb-4 md:mb-0">
                                    <Link href={'/'} className=' flex-center text-main text-3xl md:text-4xl'>
                                        <PiShoppingCartSimpleFill className=' text-4xl md:text-5xl' />
                                        <h3 className=' font-morabba pl-1 '>الکتروشاپ</h3>
                                    </Link>
                                    <h4 className="text-[#4f5d77] text-sm xs:text-base mt-3 font-morabba"> ورود به اکانت فروشگاه الکتروشاپ
                                    </h4>
                                </div>
                                {/* <!-- input --> */}

                                <div className=' flex flex-col gap-y-6'>
                                    <div className="flex flex-col relative">
                                        <input type="text" id="email"
                                            className="border-none outline-none text-sm sm:text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                            placeholder="ایمیل"
                                            name='email'
                                            value={form.values.email}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        />
                                        <span className='absolute left-4 top-3 text-main'>
                                            <MdEmail className=' text-2xl' />
                                        </span>
                                        {
                                            form.errors.email && form.touched.email && <label htmlFor="email" className='text-red-500 text-xs mt-2'>{form.errors.email}</label>
                                        }
                                    </div>

                                    <div className="flex flex-col relative">
                                        <input type="text" id="password"
                                            className="border-none outline-none text-sm sm:text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                            placeholder="رمز عبور"
                                            name='password'
                                            value={form.values.password.trim()}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        />
                                        <span className='absolute left-4 top-3 text-main'>
                                            <FaKey className=' text-2xl' />
                                        </span>
                                        {
                                            form.errors.password && form.touched.password && <label htmlFor="password" className='text-red-500 text-xs mt-2'>{form.errors.password}</label>
                                        }
                                    </div>

                                </div>


                                <div className="flex items-center  text-xs xs:text-sm text-[#687188]">

                                    <span><Link href="#">
                                        رمز عبور فراموش کردی؟
                                    </Link></span>
                                </div>

                                {/* <!-- btn --> */}

                                <button type="submit" className=' w-full' disabled={isLoading}  >
                                    <div className={` btn w-full before:w-full ${isLoading && "bg-mainBlack"} text-white`}>
                                        <span className=' text-sm '>
                                            {isLoading ? "لطفا منتظر بمانید ..." : "ورود"}
                                        </span>
                                        {
                                            !isLoading &&
                                            <IoIosArrowRoundForward className=' text-2xl rotate-180' />
                                        }
                                    </div>
                                </button>
                                <p className="text-sm text-[#687188] text-center">اکانت نداری؟
                                    <Link href="/register" className="text-main mr-1">ثبت نام
                                    </Link>
                                </p>

                                <div className="relative border-t border-solid border-[#f4f5f9] space-y-6">
                                    <span className="text-[#687188] absolute -top-[13px] left-[50%]">یا</span>
                                    <p className="text-[#687188] text-center text-sm">ورود از طریق شبکه های اجتماعی</p>
                                    <div
                                        className="grid grid-cols-2 xs:grid-cols-3 gap-2 xs:gap-1 text-center text-sm child:py-2 child:px-4 child:rounded-full child:border-solid child:border-2 child:flex-center child:gap-2">
                                        <Link href="#" className="border-main text-main transition-all ease-in  duration-75 hover:bg-main hover:text-white">
                                            Facebook
                                            <FaFacebook className=' -mt-1.5' />
                                        </Link>
                                        <Link href="#" className="border-main text-main transition-all ease-in  duration-75 hover:bg-main hover:text-white">
                                            Google
                                            <FaGoogle className=' -mt-1.5' />
                                        </Link>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
