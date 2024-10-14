import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function Button({ style, text, isIconNeed = true }: { style: string, text: string, isIconNeed: boolean }) {
    return (
        <button className={` btn ${style || ""} text-white`}>
            <span className=' text-sm '>{text}</span>
            {isIconNeed &&
                <IoIosArrowRoundForward className=' text-2xl rotate-180' />}

        </button>
    )
}
