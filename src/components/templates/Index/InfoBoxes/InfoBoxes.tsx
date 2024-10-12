import React from 'react'
import InfoBox from './InfoBox/InfoBox'

const InfoBoxes = () => {
    return (
        <>
            <section>
                <div className=' container mt-20'>
                    <div className=' bg-mainBg grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 rounded-lg'>
                        <InfoBox icon="FaRotate" title="ضمانت بازگشت" text="تا 30 روز ضمانت بازگشت" />
                        <InfoBox icon="RiSecurePaymentLine" title="پرداخت امن" text="متصل به درگاه زرین پال" />
                        <InfoBox icon="BiSupport" title="24/7 پشتیبانی" text="راحت باش تماس بگیر!" />
                        <InfoBox icon="FaTruck" title="ارسال رایگان" text="برای خرید بالای 500 تومان" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default  InfoBoxes