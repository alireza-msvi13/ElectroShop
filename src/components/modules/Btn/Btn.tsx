import Link from 'next/link';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

interface BtnProps {
    text: string;
    style?: string;
    href: string;
    isIconNeed?: boolean;
}

const Btn: React.FC<BtnProps> = ({ text, style, href, isIconNeed = true }) => {
    return (
        <Link href={href} className={`btn text-white ${style}`}>
            <span className='text-sm'>{text}</span>
            {isIconNeed && <IoIosArrowRoundForward className='text-2xl rotate-180' />}
        </Link>
    );
}

export default Btn;
