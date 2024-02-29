import React from 'react'
import payment from "../assets/images/webp/PaymentImg.webp"
import TextVector from "../assets/images/webp/PromoteText_vector.webp"
import BgCircle from "../assets/images/webp/bg_circle.webp"
import Ellipse36 from "../assets/images/webp/Ellipse36.webp"

const WinCash = () => {
    return (
        <div className='max-w-[1440px] mx-auto pt-[50px] sm:pt-[65px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] relative'>
            <img className='absolute top-0 right-[-30%] sm:block hidden' src={Ellipse36} alt="Ellipse36" />
            <img className='absolute top-[36.1%] left-[6%] md:top-[21%] md:left-[-13%] lg:left-[-4%] xl:left-[2%] max-w-[349px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[571px]' src={BgCircle} alt="BgCircle" />
            <div className="max-w-[1164px] mx-auto px-5 md:px-3 relative z-[50]">
                <div className='flex items-center md:justify-between md:flex-row flex-col-reverse justify-center flex-wrap md:gap-[31px]'>

                    <div className='w-full md:max-w-[250px] lg:max-w-[322px]'>
                        <img className='max-w-[210px] sm:max-w-[250px] lg:max-w-[270px] xl:max-w-[322px] mt-5 md:mt-0 mx-auto' src={payment} alt="payment" />
                        <button className='mt-5 text-white bg-[#5271FF] w-full h-[54px] sm:h-[60px] rounded-[10px] ff_CircularStd text-base sm:text-[18px] leading-[126.5%] font-medium block md:hidden max-w-[375px] mx-auto hover:bg-black duration-300'>Get Started</button>
                    </div>

                    <div className="flex flex-col">
                        <div className='relative'>
                            <img className='absolute top-[-25%] left-[-10%] sm:left-0 lg:left-[-7%] w-[96px] sm:w-[120px] lg:w-[149px]' src={TextVector} alt="TextVector" />
                            <h2 className='ff_CircularStd text-[28px] md:text-[35px] lg:text-[40px] font-black leading-[110%] text-black relative z-10'>Win Cash to Venmo</h2>
                            <p className='ff_CircularStd font-black text-[18px] md:text-[20px] leading-[110%] text-[#5271F0]'>(Coming Soon!)</p>
                        </div>
                        <p className='ff_CircularStd text-[#797979] text-base md:text-[18px] leading-[150%] md:max-w-[400px] lg:max-w-[520px] xl:max-w-[575px] mt-[14px] md:mt-5 font-normal'>Eligible participants can join automated contests to win Incentives/ Cash Prizes¹.</p>
                        <button className='mt-5 sm:mt-6 text-white bg-[#5271FF] w-full h-[54px] sm:h-[60px] rounded-[10px] ff_CircularStd text-base sm:text-[18px] leading-[126.5%] font-medium max-w-[197px] md:block hidden hover:bg-black duration-300'>Get Started</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WinCash