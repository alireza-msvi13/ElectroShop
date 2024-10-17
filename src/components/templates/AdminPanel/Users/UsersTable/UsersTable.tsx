"use client"
import Button from '@/components/modules/Button/Button';
import DeleteModal from '@/components/modules/DeleteModal/DeleteModal';
import { useGetAllUserQuery, useRemoveUserMutation } from '@/redux/api/userApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { GrUserAdmin } from "react-icons/gr";
export default function UsersTable() {

    const { data: users } = useGetAllUserQuery()
    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowBanModal, setIsShowBanModal] = useState(false)
    const [isShowChangeRoleModal, setIsShowChangeRoleModal] = useState(false)


    const [userId, setUserId] = useState(null)
    const [mainUserInfo, setMainUserInfo] = useState({})

    const [removeUser, { isLoading }] = useRemoveUserMutation();
    const router = useRouter();

    const removeUserHandler = async (id: any) => {
        try {
            const result = await removeUser(id).unwrap();
            toast.success(result.message)
            router.refresh()
            setIsShowDeleteModal(false)

        } catch (err) {
            console.error(err);
            toast.error('خطای سمت سرور !')
            setIsShowDeleteModal(false)
        }
    }

    return (
        <>

            {
                users?.length ?
                    <table className="w-full mt-10 text-gray-500 overflow-auto">
                        <thead className="border-b child:whitespace-nowrap">
                            <tr className='child:text-right child:p-4 text-gray-600'>
                                <th>نقش</th>
                                <th>کاربر</th>
                                <th>ایمیل</th>
                                <th>شماره همراه</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                            {users?.map((user: any) => (
                                <tr key={user._id} className=' child:p-4'>
                                    <td>
                                        <div className="text-lg flex-center text-white h-10 rounded-full bg-main">
                                            {
                                                user.role === "USER" ?
                                                    <FaUser />
                                                    : <GrUserAdmin />
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <Link href="#" className="text-gray-600 font-bolder">{user.username}</Link>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td >
                                        <div onClick={() => {
                                            setIsShowChangeRoleModal(true)
                                            setUserId(user._id)
                                        }} className=" inline-block">
                                            <Button isIconNeed={false} style="w-[100px] bg-main" text='تغیر نقش' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => {
                                            setIsShowEditModal(true)
                                            setMainUserInfo(user)
                                            setUserId(user._id)
                                        }} className=' inline-block'>
                                            <Button isIconNeed={false} style="w-[100px] bg-main" text="ویرایش" />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => {
                                            setIsShowBanModal(true)
                                            setUserId(user._id)
                                        }} className=" inline-block">
                                            <Button isIconNeed={false} style="w-[100px] bg-red-500" text="بن کاربر" />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => {
                                            setIsShowDeleteModal(true)
                                            setUserId(user._id)
                                        }} className=" inline-block">
                                            <Button isIconNeed={false} style="w-[100px] bg-red-500" text="حذف کاربر" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    :
                    <div className=' mt-8 bg-mainBg rounded-lg p-3 text-sm'>کاربری یافت نشد !</div>
            }

            {/* delete modal */}
            {isShowDeleteModal &&
                <DeleteModal onClose={() => setIsShowDeleteModal(false)} onSubmit={() => {
                    removeUserHandler(userId)
                }} title="کاربر حذف شود؟" />
            }
        </>
    )
}
