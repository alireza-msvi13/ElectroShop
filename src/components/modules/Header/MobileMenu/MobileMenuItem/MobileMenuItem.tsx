import React, { useState, ReactNode } from 'react';
import { IoIosArrowForward } from "react-icons/io";

interface MobileMenuItemProps {
    title: string;
    children: ReactNode;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ title, children }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

    return (
        <li className='border-b cursor-pointer border-mainGray'>
            <div onClick={() => setIsSubMenuOpen(prevState => !prevState)} 
                 className={`flex justify-between leading-8 hover:text-main transition-all duration-500 items-center capitalize font-InterSB tracking-[0.48px] h-12 ${isSubMenuOpen ? 'text-main' : 'text-mainBlack'}`}>
                {title}
                <button className={`size-7 transition-all duration-500 ${isSubMenuOpen ? 'rotate-90' : ''} bg-main border-none outline-none text-mainWhite flex-center`}>
                    <IoIosArrowForward className='rotate-180 text-white' />
                </button>
            </div>
            <ul className={`${isSubMenuOpen ? 'h-auto opacity-100' : 'opacity-0 h-0 overflow-y-hidden'} transition-all duration-[380ms] ease-in child:border-b child:border-mainGray`}>
                {children}
            </ul>
        </li>
    );
}

export default MobileMenuItem;
