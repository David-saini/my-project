import React from 'react'
import GirlsImg from "../assets/images/webp/promo_girls_img.webp"
import PromoVector from "../assets/images/webp/promo_vector.webp"
import PromoTextVector from "../assets/images/webp/PromoteText_vector.webp"
const Community = () => {
    return (
        <div className='max-w-[1440px] mx-auto relative'>
            <img className='absolute top-[50%] sm:top-[35%] lg:top-[18%] left-[-10%] sm:left-0 lg:max-w-[571px] md:max-w-[470px] sm:max-w-[400px] max-w-[327px]' src={PromoVector} alt="PromoVector" />
            <div className='max-w-[1164px] mx-auto px-5 sm:px-3 pt-[54px] pb-[59px] sm:py-[65px] md:py-[80px] lg:py-[100px] z-[100] relative'>
                <div className='flex items-center justify-between lg:flex-row flex-col-reverse gap-6 lg:gap-8'>

                    <div className='mb-0 max-w-[527px] w-full'>
                        <img className='max-w-[295px] sm:max-w-[450px] lg:max-w-[527px] w-full mx-auto' src={GirlsImg} alt="GirlsImg" />
                        <button className='mt-6 text-white bg-[#5271FF] w-full h-[54px] sm:h-[60px] rounded-[10px] ff_CircularStd text-base sm:text-[18px] leading-[126.5%] font-medium block lg:hidden max-w-[461px] mx-auto hover:bg-black duration-300'>Get Started</button>
                    </div>

                    <div className='flex flex-col'>
                        <div className='relative'>
                            <img className='absolute top-[-5%] left-[-7%] max-w-[96px] md:max-w-[120px] lg:max-w-[149px]' src={PromoTextVector} alt="PromoTextVector" />
                            <h2 className='font-black ff_CircularStd text-[28px] md:text-[35px] lg:text-[40px] leading-[110%] text-black lg:max-w-[527px] relative z-10'>Promote Great Products and Create a Community Around Your Product or Venue</h2>
                        </div>
                        <p className='ff_CircularStd text-base sm:text-[18px] leading-[150%] font-normal text-[#797979] lg:max-w-[532px] mt-[14px] sm:mt-5'>Incentive allows businesses to promote their locations, products or websites and boost customers with promotions. Use custom links to invite or allow others to invite. Customers can request redemption or joining of an event/promo to get a discount. After the event, reviews can boost visibility around your brand or product.</p>
                        <p className='text-black text-base sm:text-[18px] leading-[150%] font-normal ff_CircularStd mt-4'>Sign up and start getting customers with great offers.</p>
                        <button className='mt-5 sm:mt-6 text-white bg-[#5271FF] w-full h-[54px] sm:h-[60px] rounded-[10px] ff_CircularStd text-base sm:text-[18px] leading-[126.5%] font-medium max-w-[197px] lg:block hidden hover:bg-black duration-300'>Get Started</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Community