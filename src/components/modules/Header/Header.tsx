"use client"
import React from 'react'
import Nav from './Nav/Nav';
import { useGetMeUserQuery } from '@/redux/api/authApi';


const Header = () => {

  const { data: user } = useGetMeUserQuery()

  return (
    <>
      <header>
        <Nav isLogin={user ? true : false} wishlistLength={user?.wishlist.length} />
      </header>
    </>
  )
}


export default Header