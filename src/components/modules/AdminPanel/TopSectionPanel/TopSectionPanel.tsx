import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function TopSectionPanel({ title, spanTitle }: { title: string, spanTitle: string }) {
    return (
        <div className="flex justify-between px-4 mt-4 sm:px-8">
            <h2 className="text-2xl">{title}</h2>
            <div className="flex items-center gap-2 text-sm">
                <span>{spanTitle}</span>
                <IoIosArrowForward />
                <Link href={"/admin-panel"} className="font-bold text-main">خانه</Link>
            </div>

        </div>
    )
}
