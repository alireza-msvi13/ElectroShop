import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '@/redux/slice/sideBarMobileSlice';

interface MobileSubMenuItemProps {
    title: string;
    href: string;
}

const MobileSubMenuItem: React.FC<MobileSubMenuItemProps> = ({ title, href }) => {
    const dispatch = useDispatch();

    return (
        <li onClick={() => dispatch(closeSideBar())}>
            <Link href={href} className='flex hover:text-main justify-between pl-4 leading-8 transition-all duration-500 items-center text-mainBlack capitalize font-InterSB h-11'>
                {title}
            </Link>
        </li>
    );
}

export default MobileSubMenuItem;
