import React from 'react'
import ChatImg from "../assets/images/webp/ChatImg_in_mobile.webp"
import TextVector from "../assets/images/webp/PromoteText_vector.webp"
import BgCircle from "../assets/images/webp/bg_circle.webp"
import Ellipse37 from "../assets/images/webp/Ellipse37.webp"

const ChatSec = () => {
    return (
        <div className='max-w-[1440px] mx-auto pt-[50px] sm:pt-[60px] md:pt-20 lg:pt-[100px] relative'>
            <img className='absolute top-0 left-[-30%] sm:block hidden' src={Ellipse37} alt="Ellipse37" />
            <img className='absolute top-[42%] right-[-0.01px] md:top-[19%] md:right-[-13%] lg:right-0 max-w-[349px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[571px]' src={BgCircle} alt="BgCircle" />
            <div className="max-w-[1164px] mx-auto px-5 md:px-3 relative z-[50]">
                <div className='flex items-center md:justify-between justify-center flex-wrap md:gap-[31px]'>

                    <div className="flex flex-col">
                        <div className='relative'>
                            <img className='absolute top-[-25%] left-[-10%] sm:left-[-7%] w-[96px] sm:w-[120px] lg:w-[149px]' src={TextVector} alt="TextVector" />
                            <h2 className='ff_CircularStd text-[28px] md:text-[35px] lg:text-[40px] font-black leading-[110%] text-black relative z-10'>Chat With Others</h2>
                        </div>
                        <p className='font-normal ff_CircularStd text-[#797979] text-base md:text-[18px] leading-[150%] md:max-w-[455px] lg:max-w-[551px] mt-[14px] md:mt-5'>Chat easily with people interested and the business all in one place. All chats are group chats so business hosts can build excitment and guide customers before a promo.</p>
                        <button className='mt-5 sm:mt-6 text-white bg-[#5271FF] w-full h-[54px] sm:h-[60px] rounded-[10px] ff_CircularStd text-base sm:text-[18px] leading-[126.5%] font-medium max-w-[197px] md:block hidden hover:bg-black duration-300'>Get Started</button>
                    </div>

                    <div className='w-full md:max-w-[250px] lg:max-w-[322px]'>
                        <img className='max-w-[210px] sm:max-w-[250px] lg:max-w-[322px] mt-5 md:mt-0 mx-auto' src={ChatImg} alt="ChatImg" />
                        <button className='mt-5 text-white bg-[#5271FF] w-full h-[54px] sm:h-[60px] rounded-[10px] ff_CircularStd text-base sm:text-[18px] leading-[126.5%] font-medium block md:hidden max-w-[375px] mx-auto hover:bg-black duration-300'>Get Started</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChatSec