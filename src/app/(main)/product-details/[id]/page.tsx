"use client";
import React, { useEffect, useState } from 'react';
import ProductDetailsSlider from '@/components/templates/ProductDetails/ProductDetailsSlider/ProductDetailsSlider';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { MdNavigateNext } from 'react-icons/md';
import { CgSandClock } from "react-icons/cg";
import { GrSend } from "react-icons/gr";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import RelatedProducts from '@/components/templates/ProductDetails/RelatedProducts/RelatedProducts';
import Tabs from '@/components/templates/ProductDetails/Tabs/Tabs';
import { VscGitCompare } from 'react-icons/vsc';
import ProdcutActions from '@/components/modules/ProdcutActions/ProdcutActions';
import AddProductToFav from '@/components/modules/AddProductToFav/AddProductToFav';
import { useGetOneProductMutation } from '@/redux/api/productApi';
import { IProduct } from '@/interfaces/product';
import { useRouter } from 'next/navigation';

export default function ProductPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const router = useRouter()

    const [getProduct] = useGetOneProductMutation();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProduct(id).unwrap();
                setProduct(productData as IProduct);
            } catch (err) {
                console.error(err);
                router.push("/404")
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id, getProduct]);

    if (loading) {
        // return <div>در حال بارگذاری...</div>;
    }

    if (!product) {
        return null;
    }

    return (
        <>
            <section className=' bg-mainBg font-semibold text-xs sm:text-sm'>
                <div className="container">
                    <div className='flex items-center h-14'>
                        <Link href="/" className=' text-mainGray'>صفحه اصلی</Link>
                        <span className=" mx-0.5 xs:mx-3 cursor-pointer">
                            <MdNavigateNext className=' text-xl rotate-180 text-mainGray' />
                        </span>
                        <Link href={''} className=' text-main'>{product.name}</Link>
                    </div>
                </div>
            </section>

            <section className=' container mt-8'>
                <section className=' grid grid-cols-12 gap-6'>
                    <div className=' relative col-span-12 lg:col-span-5'>
                        <ProductDetailsSlider cover={product.cover} />
                        <div className=' absolute top-4 z-20 right-4 flex flex-col gap-4'>
                            <AddProductToFav _id={id} isAddFavForProductDetails={true} />
                            <div className="p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative hover:text-white text-xl border border-mainBorder rounded-lg product-btn compare">
                                <VscGitCompare />
                            </div>
                        </div>
                    </div>
                    <div className=' col-span-12 lg:col-span-7'>
                        <div className=" p-4">
                            <h2 className=' text-main font-morabba text-xl sm:text-2xl mb-2 font-semibold'>
                                {product.name}
                            </h2>

                            <div className="flex justify-between items-center border-b border-mainBorder pb-4">
                                <span className=' text-xs sm:text-sm'>
                                    برند: <Link href={'/'} className=''>{product.brand}</Link>
                                </span>
                                <div className=' flex-center text-xs sm:text-sm gap-1'>
                                    <div className=" flex items-center my-2 justify-start gap-1 text-main ">
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    </div>
                                    <span>(4 کامنت)</span>
                                </div>
                            </div>

                            <div className=" flex items-center gap-3 sm:gap-5 mt-4 border-b border-mainBorder pb-4">
                                <div className=' flex-center gap-1 sm:gap-2 text-main font-bold text-xl sm:text-2xl'>
                                    <span>
                                        {Math.floor(product.price - ((product.price * product.discount) / 100)).toLocaleString()}
                                    </span>
                                    <span>تومان</span>
                                </div>
                                {product.discount !== 0 && (
                                    <span className=" line-through text-mainGray text-sm">
                                        {product.price.toLocaleString()}
                                    </span>
                                )}
                                {product.discount !== 0 && (
                                    <span className=" hidden sm:block text-sm text-main">{product.discount}% تخفیف</span>
                                )}
                            </div>

                            <div className=" mt-6 space-y-10">
                                <div className="shop-single-descrip">
                                    <p className=' text-xs sm:text-sm leading-6 tracking-wide'>
                                        {product.description || 'توضیحات محصول در اینجا نمایش داده می‌شود.'}
                                    </p>
                                </div>

                                <ul className=' space-y-2'>
                                    <li className=' flex items-center text-xs gap-1 text-mainGray'>
                                        <CgSandClock /><span>یک سال گارانتی</span>
                                    </li>
                                    <li className=' flex items-center text-xs gap-1 text-mainGray'>
                                        <GrSend /><span>تا 30 روز ضمانت بازگشت</span>
                                    </li>
                                    <li className=' flex items-center text-xs gap-1 text-mainGray'>
                                        <FaMoneyCheckDollar /><span>امکان پرداخت درب منزل</span>
                                    </li>
                                </ul>

                                <div className=" flex items-center gap-2">
                                    <span className=" text-sm">رنگ‌ها: </span>
                                    <ul className=" flex items-center gap-2 child:cursor-pointer">
                                        <li className=' relative rounded-full bg-red-500 border p-3'>
                                            <span className=' rounded-full p-1 top-0 right-0 absolute bg-main'></span>
                                        </li>
                                        <li className=' rounded-full bg-black border p-3'></li>
                                        <li className=' rounded-full bg-white border p-3'></li>
                                        <li className=' rounded-full bg-yellow-500 border p-3'></li>
                                    </ul>
                                </div>

                                <div className=' border-b border-b-mainBorder pb-8'>
                                    <ProdcutActions product={product} />
                                </div>

                                <ul className=" space-y-2">
                                    <li className='flex items-center gap-1 text-xs'>
                                        <span>ایدی:</span>
                                        <span className=' text-main'>{product._id.toString()}</span>
                                    </li>
                                    <li className='flex items-center gap-1 text-xs'>
                                        <span>دسته‌بندی:</span>
                                        <span className=' text-main'>{product?.categoryId?.title}</span>
                                    </li>
                                    <li className='flex items-center gap-1 text-xs'>
                                        <span>موجودی:</span>
                                        <span className=' text-green-500'>{product.stock} عدد در انبار موجود است</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <Tabs />
                <section className=' md:mt-32 lg:mt-0'>
                    <RelatedProducts />
                </section>
            </section>
        </>
    );
}
