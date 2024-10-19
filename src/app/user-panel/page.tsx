"use client";
import React from 'react';
import ProductBox from '@/components/modules/ProductBox/ProductBox';
import NotFoundItem from '@/components/modules/NotFoundItem/NotFoundItem';
import { useGetMeUserQuery } from '@/redux/api/authApi';
import InfoBox from '@/components/templates/AdminPanel/InfoBox/InfoBox';

export default function WishlistPage() {
    const { data: user } = useGetMeUserQuery();
    
    return (
        <>
            <h4 className="font-morabba text-main text-2xl">{user?.username} خوش اومدی !</h4>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <InfoBox title="سفارشات" count={0} />
                <InfoBox
                    title="علاقه مندی ها"
                    count={user?.wishlist?.length ? (user?.wishlist.length > 10 ? user?.wishlist.length : `0${user?.wishlist.length}`) : "0"}
                />
                <InfoBox title="تیکت ها" count={0} />
            </div>

            <div>
                <h4 className="mt-20 border-b-2 border-mainBlack pb-7 sm:pb-10 font-morabba text-lg text-main sm:text-2xl">
                    آخرین محصولات اضافه شده به علاقه مندی ها
                </h4>

                {user?.wishlist?.length ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                        {
                            user?.wishlist?.map((wish: any) => (
                                <ProductBox
                                    key={wish._id}
                                    _id={wish.product._id?.toString()}
                                    name={wish.product.name}
                                    cover={wish.product.cover}
                                    price={wish.product.price}
                                    discount={wish.product.discount}
                                    categoryId={wish.product.categoryId}
                                    brand={wish.product.brand}
                                    stock={wish.product.stock}
                                    isProductBoxForProductsList={true}
                                    shortname={wish.product.shortname}
                                    color={wish.product.color} />
                            ))
                        }
                    </div>
                ) : (
                    <NotFoundItem text="محصولی یافت نشد!" isBtnNeed={false} />
                )}
            </div>
        </>
    );
}
