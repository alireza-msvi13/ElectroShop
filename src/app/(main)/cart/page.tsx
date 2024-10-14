"use client"
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import Btn from '@/components/modules/Btn/Btn';
import CartSummery from '@/components/modules/CartSummery.js/CartSummery'
import NotFoundItem from '@/components/modules/NotFoundItem/NotFoundItem';
import ProductBoxForCart from '@/components/templates/Cart/ProductBoxForCart/ProductBoxForCart'
import { setCart } from '@/redux/slice/cartSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function cart() {
  const cart = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    dispatch(setCart(storedCart));
}, [dispatch]);

  return (
    <>
      <Breadcrumbs destination="سبد خرید" />
      <section className=' container mt-8'>
        <h4 className=' text-main mb-16'> سبد خرید شما :</h4>
        {
          cart.length ? <div className=' grid grid-cols-12 gap-y-16 xl:gap-6 mb-36'>
            <div className=' col-span-12 xl:col-span-8'>
              <div className=' space-y-4'>
                {
                  cart.map((product:any) => (
                    <ProductBoxForCart key={product._id} {...product} />
                  ))
                }
              </div>

            </div>
            <div className=' col-span-12 xl:col-span-4'>
              <CartSummery text="نهایی کردن سفارش">
                <Btn text="تسویه حساب" style="bg-main w-full before:w-full" href="/checkout" />
              </CartSummery>
            </div>
          </div>
            : <NotFoundItem text="سبد خرید شما خالیه" isBtnNeed = {true}/>
        }

      </section>
    </>
  )
}
