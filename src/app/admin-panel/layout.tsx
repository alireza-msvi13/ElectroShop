import NavBar from '@/components/templates/AdminPanel/NavBar/NavBar'
import SideBar from '@/components/templates/AdminPanel/SideBar/SideBar'
import React, { ReactNode } from 'react'
interface AdminPanelLayoutProps {
    children: ReactNode;
  }
const AdminPanelLayout :React.FC<AdminPanelLayoutProps>= ({ children }) => {
    return (
        <>
            <NavBar />
            <div className='grid grid-cols-12'>
                <div className="xxl:col-span-2">
                    <SideBar />
                </div>
                <div className=" col-span-12 xxl:col-span-10">
                    <div className='mt-24 px-4 sm:px-8 space-y-10 mb-9'>
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}
export default AdminPanelLayout