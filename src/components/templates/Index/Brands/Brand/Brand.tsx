import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Brand({ pic }: { pic: string }) {
    return (
        <div className=" p-4 sm:p-6">
            <Link href="/">
                <Image src={`/images/brand/${pic}.webp`} width={270} height={270} alt="brandImg" />
            </Link>
        </div>
    )
}
