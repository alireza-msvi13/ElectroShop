"use client";
import React, { useEffect, useState } from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { useGetMeUserQuery } from '@/redux/api/authApi';
import { toast } from 'react-toastify';
import { useAddToWishlistMutation, useIsInWishlistMutation, useRemoveFromWishlistMutation } from '@/redux/api/wishlistApi';
import { useRouter } from 'next/navigation';

interface AddProductToFavProps {
    _id: string;
    isAddFavForProductDetails?: boolean;
}

const AddProductToFav: React.FC<AddProductToFavProps> = ({ _id, isAddFavForProductDetails = false }) => {
    const { data ,refetch } = useGetMeUserQuery();
    const [isInWishlist, setIsInWishlist] = useState<boolean>(false);
    const [checkInWishlist] = useIsInWishlistMutation();
    const [addToWishList, addToWishListRes] = useAddToWishlistMutation();
    const [removeFromWishlist, removeFromWishlistRes] = useRemoveFromWishlistMutation();
    const router = useRouter();

    useEffect(() => {
        const checkIfInWishlist = async () => {
            if (data) {
                const result = await checkInWishlist(_id).unwrap();
                setIsInWishlist(result.message === "this product exist in this user wishlist" && true);
            }
        };
        checkIfInWishlist();
    }, [data, _id, checkInWishlist]);

    const addToWishListHandler = async (product: string) => {
        try {
            const result = await addToWishList({ product }).unwrap();
            toast.success("محصول به علاقه‌مندی‌ها اضافه شد");
            setIsInWishlist(true);
            router.refresh();
            refetch()
        } catch (err: any) {
            console.error(err);
            if (err.status === 409) toast.error("این محصول در علاقه‌مندی‌ ها وجود دارد");
            else toast.error("مشکلی از سمت ما پیش اومده لطفا چند ساعت دیگه دوباره امتحان کنید");
        }
    };

    const removeFromWishlistHandler = async (product: string) => {
        try {
            const result = await removeFromWishlist(product).unwrap();
            setIsInWishlist(false);
            toast.success("محصول از علاقه مندی ها حذف شد");
            router.refresh();
            refetch()

        } catch (err) {
            console.error(err);
        }
    };

    const addToWishlist = () => {
        if (!data) {
            toast.info("برای اضافه کردن ابتدا باید لاگین کنید");
        } else {
            addToWishListHandler(_id);
        }
    };

    return (
        <>
            {isInWishlist ? (
                <div
                    onClick={() => removeFromWishlistHandler(_id)}
                    className={`p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative text-red-500 hover:text-white text-xl border-mainBorder rounded-lg product-btn removeFromFav ${isAddFavForProductDetails ? "border" : "sm:shadow-custom border sm:border-none"}`}
                >
                    <FaHeart />
                </div>
            ) : (
                <div
                    onClick={addToWishlist}
                    className={`p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative hover:text-white border-mainBorder text-xl rounded-lg product-btn addToFav ${isAddFavForProductDetails ? "border" : "sm:shadow-custom border sm:border-none"}`}
                >
                    <IoMdHeartEmpty />
                </div>
            )}
        </>
    );
};

export default AddProductToFav;
