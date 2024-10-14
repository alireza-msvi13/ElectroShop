"use client"
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import dynamic from 'next/dynamic'
const Map = dynamic(
    () => import('@/components/templates/Contact/Map/Map'),
    { ssr: false }
)
import ContactCart from '@/components/templates/Contact/ContactCart/ContactCart'
import { useSendMessageMutation } from '@/redux/api/contactApi'
import { contactValidator } from '@/validators/contact'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaPhone, FaUser } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { toast } from 'react-toastify'

export default function contact() {
    const [sendMessage, { data, isLoading }] = useSendMessageMutation();
    const router = useRouter();

    const onSubmitHandler = async (values: any) => {
        try {
            const result = await sendMessage(values).unwrap();
            toast.success("پیام شما با موفقیت ارسال شد")
            router.replace("/");
            router.refresh()


        } catch (err:any) {
            // console.error(err);
            // toast.error(err?.data?.message)
            if (err.status === 400) toast.error(err.message)
            else if (err.status === 500) toast.error("مشکلی از سمت ما پیش اومده لطفا چند ساعت دیگه دوباره امتحان کنید");
        }
    };


    const form = useFormik({
        initialValues: { name: "", email: "", message: "", phone: "" },

        onSubmit: (values) => {
            onSubmitHandler(values)
        },

        validationSchema: contactValidator,
    });


    return (
        <>
            <Breadcrumbs destination="ارتباط یا ما" />
            <section className=' container mt-16 mb-32'>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className=' order-1 lg:order-0 h-auto lg:h-[580px]'>
                        <h4 className=' text-3xl col-span-12 mb-8 font-morabba w-full text-main'>ارتباط با ما</h4>
                        <form onSubmit={form.handleSubmit} className=' grid grid-cols-12 gap-6'>

                            <div className=' col-span-12 sm:col-span-6'>
                                <div className="flex flex-col relative">
                                    <input type="text"
                                        id='name'
                                        name='name'
                                        value={form.values.name}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className="border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        placeholder="نام و نام خانوادگی" autoComplete="off" />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <FaUser className=' text-2xl' />
                                    </span>
                                    {
                                        form.errors.name && form.touched.name && <label htmlFor="name" className='text-red-500 text-[13px] block mt-2 ml-1'>{form.errors.name}</label>
                                    }
                                </div>
                            </div>
                            <div className=' col-span-12  sm:col-span-6'>
                                <div className="flex flex-col relative">
                                    <input type="text" id="phone"
                                        placeholder="شماره همراه"
                                        name='phone'
                                        value={form.values.phone}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className="border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        autoComplete="off" />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <FaPhone className=' text-2xl' />

                                    </span>
                                    {
                                        form.errors.phone && form.touched.phone && <label htmlFor="phone" className='text-red-500 text-[13px] block mt-2 ml-1'>{form.errors.phone}</label>
                                    }
                                </div>
                            </div>
                            <div className=' col-span-12'>
                                <div className="flex flex-col relative">
                                    <input type="text"
                                        name='email'
                                        value={form.values.email.trim()}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className="border focus:border-main outline-none text-md  h-16 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        placeholder="ایمیل" autoComplete="off" />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <MdEmail className=' text-2xl' />

                                    </span>
                                    {
                                        form.errors.email && form.touched.email && <label htmlFor="email" className='text-red-500 text-[13px] block mt-2 ml-1'>{form.errors.email}</label>
                                    }
                                </div>
                            </div>

                            <div className=' col-span-12'>
                                <div className="flex flex-col relative">
                                    <textarea id="message"
                                        name='message'
                                        value={form.values.message}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className="border focus:border-main outline-none text-md min-h-28 max-h-48 w-full bg-mainBg rounded-lg p-4 text-mainBlack"
                                        placeholder="پیام خود را اینجا وارد کنید" autoComplete="off" />
                                </div>
                                {
                                    form.errors.message && form.touched.message && <label htmlFor="message" className='text-red-500 text-[13px] block mt-2 ml-1'>{form.errors.message}</label>
                                }
                            </div>


                            {/* <!-- btn --> */}
                            <div className=' col-span-12 justify-start text-end'>
                                <button type="submit" className=' w-[200px]' disabled={isLoading}  >
                                    <div className={` btn w-full before:w-full ${isLoading && "bg-mainBlack"} text-white`}>
                                        <span className=' text-sm '>
                                            {isLoading ? "لطفا منتظر بمانید ..." : "ارسال پیام"}
                                        </span>
                                        {
                                            !isLoading &&
                                            <IoIosArrowRoundForward className=' text-2xl rotate-180' />
                                        }
                                    </div>
                                </button>
                            </div>


                        </form>
                    </div>
                    <div className='order-0 lg:order-1 flex-center'>
                        <Map />
                    </div>
                </div>
                <div className="grid xl:grid-cols-3 gap-9 sm:gap-6 mt-32">
                    <ContactCart icon='IoLocationOutline' title='بابل میدان ولایت' />
                    <ContactCart icon='HiOutlinePhone' title="09132535535" />
                    <ContactCart icon='IoMailOutline' title='email@example.com' />
                </div>
            </section>
        </>
    )
}
