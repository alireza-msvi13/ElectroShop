import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";


interface IInfoBox {
    icon: string
    title: string
    text: string
}

const InfoBox = ({ icon, title, text }: IInfoBox) => {
    return (
        <div className={`flex items-center justify-evenly relative gap-2 md:gap-0 xl:gap-2 xxl:gap-0 p-6 m:p-8 ${icon !== "FaTruck" && "infoBoxBefore"}`}>
            <div className=" rounded-full bg-main size-14 flex-center text-white text-3xl">
                {
                    icon === "FaTruck" && <FaTruck /> ||
                    icon === "FaRotate" && <FaRotate /> ||
                    icon === "BiSupport" && <BiSupport /> ||
                    icon === "RiSecurePaymentLine" && <RiSecurePaymentLine />
                }
            </div>
            <div className="box-info col-12 col-md-9 w-36">
                <span className=" text-lg block">{title}</span>
                <span className=" text-mainGray text-sm font-normal">{text}</span>
            </div>
        </div>
    )
}
export default InfoBox