import React from 'react'
import Btn from '@/components/modules/Btn/Btn'
import { IUserInfo } from '@/interfaces/auth';
interface RecentUserProps {
    users: IUserInfo[];
}
export default function RecentUsers({ users }: RecentUserProps) {
    return (
        <div className=' col-span-12  xl:col-span-5 border rounded-lg shadow'>
            <div className="flex justify-between items-center px-4 py-2 mb-2 border-b-2 ">
                <h3 className='tracking-wider font-morabba'>آخرین ثبت نامی ها</h3>
                <Btn href='admin-panel/users' style=' text-xs w-[100px] h-[30px]' text='دیدن همه' />
            </div>
            <div className="px-4 overflow-auto">
                <table className='table-fixed min-w-full divide-y divide-gray-200'>
                    <thead>
                        <tr>

                            <th scope="col" className="py-3 text-right text-xs font-medium  uppercase tracking-wider">اسم</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium  uppercase tracking-wider"> ایمیل</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium  uppercase tracking-wider"> شماره همراه</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-xs ">


                        {
                            users.map(user => (
                                <tr key={user._id} className='child:pl-4'>
                                    <td className="py-4 whitespace-nowrap text-xs ">{user.username}</td>
                                    <td className="py-4 whitespace-nowrap text-xs ">{user.email}</td>
                                    <td className="py-4 whitespace-nowrap text-xs  ">{user.phone}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}
