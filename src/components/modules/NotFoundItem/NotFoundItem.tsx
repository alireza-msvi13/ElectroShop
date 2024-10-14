import React from 'react'
import { FaSadTear } from "react-icons/fa";
import Btn from '../Btn/Btn';
export default function NotFoundItem({ text, isBtnNeed = false }: { text: string, isBtnNeed: boolean }) {
    return (
        <div className="mt-8 xl:py-16 xl:px-8">
            <div className=" px-4 mx-auto max-w-screen-xl py-8 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <div className=" flex-center">
                        <FaSadTear className=" text-main text-[8rem] sm:text-[10rem]" />
                    </div>
                    <p className="my-8 text-lg font-morabba sm:text-2xl text-main">
                        {text}
                    </p>
                    {
                        isBtnNeed && <div className=' flex-center'>
                            <Btn style="bg-main" text="محصولات" href={"/products-list"} />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
