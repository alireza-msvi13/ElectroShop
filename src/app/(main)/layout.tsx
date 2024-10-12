import Footer from '@/components/modules/Footer/Footer'
import Header from '@/components/modules/Header/Header'
import React, { ReactNode } from 'react'

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = async ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout;
