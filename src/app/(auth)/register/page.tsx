"use client";
import Link from 'next/link';
import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import { FaUser, FaPhone, FaKey } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { useFormik, FormikErrors } from "formik";
import { registerValidator } from '@/validators/auth';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useRegisterUserMutation } from '@/redux/api/authApi';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { IUserInfo } from '@/interfaces/auth';
import { setCookie } from 'cookies-next';




const Register: React.FC = () => {
    const [registerUser, { data, isLoading }] = useRegisterUserMutation();
    const router = useRouter();

    const onSubmitHandler = async (userInfo: IUserInfo) => {
        try {
            const result = await registerUser(userInfo).unwrap();
            setCookie('refreshToken', result.refreshToken, { maxAge: 60 * 60 * 24 * 20 });
            setCookie('token', result.token, { maxAge: 60 * 60 * 24 * 10 });
            toast.success("ثبت نام شما با موفقیت انجام شد");
            router.replace("/");
            router.refresh();
        } catch (err: any) {
            // console.error(err);
            // toast.error(err?.data?.message);
            if (err.status === 403) toast.error("شما امکان ثبت نام در سایت رو ندارید")
            else if (err.status === 409) toast.error("اکانتی با این شماره همراه یا ایمیل از قبل وجود دارد");
            else toast.error("مشکلی از سمت ما پیش اومده لطفا چند ساعت دیگه دوباره امتحان کنید")
        }
    };

    const form = useFormik<IUserInfo>({
        initialValues: { username: "", email: "", password: "", phone: "" },
        onSubmit: (values) => {
            onSubmitHandler(values);
        },
        validationSchema: registerValidator,
    });

    return (
        <div className="bg-mainBlack h-screen">
            <header>
                <div className="container">
                    <div className="flex items-center text-sm h-16 text-white">
                        <Link href="/">صفحه اصلی</Link>
                        <span className="mx-2 cursor-pointer">
                            <MdNavigateNext className="rotate-180 text-lg" />
                        </span>
                        <Link href="/register">ثبت نام</Link>
                    </div>
                </div>
            </header>

            <section>
                <div className="container">
                    <div className="flex-center mb-16">
                        <form onSubmit={form.handleSubmit} className="w-[430px] p-8 xs:p-12 rounded-lg shadow-custom bg-white text-mainBlack space-y-6">
                            <div className="text-center text-4xl sm:mb-4 md:mb-0">
                                <Link href="/" className="flex-center text-main text-3xl md:text-4xl">
                                    <PiShoppingCartSimpleFill className="text-4xl md:text-5xl" />
                                    <h3 className="font-morabba pl-1">الکتروشاپ</h3>
                                </Link>
                                <h4 className="text-[#4f5d77] text-sm xs:text-base mt-3 font-morabba">ساخت اکانت در فروشگاه الکتروشاپ</h4>
                            </div>

                            {/* Inputs */}
                            <div className="flex flex-col gap-y-6">
                                <div className="flex flex-col relative">
                                    <input
                                        type="text"
                                        className="border-none outline-none text-sm sm:text-md h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="نام کاربری"
                                        id="username"
                                        name="username"
                                        value={form.values.username}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                    <span className="absolute left-4 top-3 text-main">
                                        <FaUser className="text-2xl" />
                                    </span>
                                    {form.errors.username && form.touched.username && (
                                        <label htmlFor="username" className="text-red-500 text-xs mt-2">
                                            {form.errors.username}
                                        </label>
                                    )}
                                </div>

                                <div className="flex flex-col relative">
                                    <input
                                        type="text"
                                        id="email"
                                        className="border-none outline-none text-sm sm:text-md h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="ایمیل"
                                        name="email"
                                        value={form.values.email.trim()}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                    <span className="absolute left-4 top-3 text-main">
                                        <MdEmail className="text-2xl" />
                                    </span>
                                    {form.errors.email && form.touched.email && (
                                        <label htmlFor="email" className="text-red-500 text-xs mt-2">
                                            {form.errors.email}
                                        </label>
                                    )}
                                </div>

                                <div className="flex flex-col relative">
                                    <input
                                        type="text"
                                        id="phone"
                                        className="border-none outline-none text-sm sm:text-md h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="شماره همراه"
                                        name="phone"
                                        value={form.values.phone}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                    <span className="absolute left-4 top-3 text-main">
                                        <FaPhone className="text-2xl" />
                                    </span>
                                    {form.errors.phone && form.touched.phone && (
                                        <label htmlFor="phone" className="text-red-500 text-xs mt-2">
                                            {form.errors.phone}
                                        </label>
                                    )}
                                </div>

                                <div className="flex flex-col relative">
                                    <input
                                        type="text"
                                        id="password"
                                        className="border-none outline-none text-sm sm:text-md h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="رمز عبور"
                                        name="password"
                                        value={form.values.password.trim()}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                    <span className="absolute left-4 top-3 text-main">
                                        <FaKey className="text-2xl" />
                                    </span>
                                    {form.errors.password && form.touched.password && (
                                        <label htmlFor="password" className="text-red-500 text-xs mt-2">
                                            {form.errors.password}
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="w-full" disabled={isLoading}>
                                <div className={`btn w-full before:w-full ${isLoading && "bg-mainBlack"} text-white`}>
                                    <span className="text-sm">{isLoading ? "لطفا منتظر بمانید ..." : "ثبت نام"}</span>
                                    {!isLoading && <IoIosArrowRoundForward className="text-2xl rotate-180" />}
                                </div>
                            </button>

                            {/* Already have account */}
                            <p className="text-sm text-[#687188] text-center">
                                قبلا اکانت داشتی؟
                                <Link href="/login" className="text-main mr-1">
                                    ورود
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
