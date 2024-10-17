"use client"
import React from 'react'
import Nav from './Nav/Nav';
import { useGetMeUserQuery } from '@/redux/api/authApi';
import { getCookie } from 'cookies-next';


const Header = () => {

  const { data: user } = useGetMeUserQuery()
  const token = getCookie("token")


  return (
    <>
      <header>
        <Nav isLogin={token && user ? true : false} wishlistLength={user?.wishlist.length} />
      </header>
    </>
  )
}


export default Header