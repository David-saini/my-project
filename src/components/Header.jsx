import React from 'react'
import GirlImg from "../assets/images/webp/girl_img.webp"
import MsgIcon from "../assets/images/webp/MsgVector.png"
import Ellipse34 from "../assets/images/webp/Ellipse34.webp"
import Ellipse35 from "../assets/images/webp/Ellipse35.webp"
import VirticalVector from "../assets/images/webp/VirticalVector.png"
import HeaderVector from "../assets/images/png/HeaderVector.png"
import MobileScreenEllipse from "../assets/images/webp/mobilescreenellipse.webp"

const Header = () => {
    return (
        <div className='max-w-[1440px] mx-auto relative pt-[60px] md:pt-[80px] lg:pt-[112px]'>
            <img className='absolute top-[32%] sm:top-[25%] lg:top-[16%] right-0 z-10 max-w-[270px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[586px]' src={HeaderVector} alt="HeaderVector" />
            <img className='max-w-[1080px] absolute top-[-40%] right-[-20%] sm:block hidden' src={Ellipse34} alt="Ellipse34" />
            <img className='absolute top-[40%] left-[-20%] sm:block hiddden' src={Ellipse35} alt="Ellipse35" />
            <img className='top-0 left-0 w-full absolute sm:hidden block' src={MobileScreenEllipse} alt="MobileScreenEllipse" />
            <div className='max-w-[1164px] mx-auto px-5 sm:px-3 z-[20] relative'>
                <div className='flex items-center justify-between lg:flex-row flex-col gap-6 lg:gap-8'>

                    <div className='flex flex-col'>
                        <div className='relative'>
                            <img className='absolute top-[-1%] start-[-4%]' src={VirticalVector} alt="VirticalVector" />
                            <h2 className='font-black ff_CircularStd text-[30px] md:text-[35px] lg:text-[40px] leading-[110%] text-black max-w-[527px] relative z-[10]'> <span className='text-[#5271FF]'>Redeem Discounts for</span> Amazing Products: Engage with a <span className='text-[#5271ff]'>Community</span> and <span className='lg:block text-[#5271ff]'>Win Cash Prizes</span></h2>
                        </div>
                        <p className='ff_CircularStd text-base sm:text-[18px] leading-[150%] font-normal text-[#797979] lg:max-w-[532px] mt-[14px] hidden lg:block'>Use Incentive to list and find promotional discounts and win prizes for helping support businesses. Chat and connect with others and then privately review the promotion.</p>

                        <div className='lg:block hidden'>
                            <button className='mt-5 sm:mt-6 text-white bg-[#5271FF] w-full h-[54px] sm:h-[60px] rounded-[10px] ff_CircularStd text-base sm:text-[18px] leading-[126.5%] font-medium max-w-[353px] flex items-center justify-center gap-4 hover:bg-black duration-300'>Find Promotions/Contests <span><img className='w-[20px]' src={MsgIcon} alt="MsgIcon" /></span></button>
                        </div>

                    </div>

                    <div className='mb-0 relative'>
                        <img className='max-w-[295px] sm:max-w-[450px] lg:max-w-[558px] w-full mx-auto relative z-[10]' src={GirlImg} alt="GirlsImg" />
                        <p className='ff_CircularStd text-base sm:text-[18px] leading-[150%] font-normal text-[#797979] lg:max-w-[532px] mt-[14px] lg:hidden block'>Use Incentive to list and find promotional discounts and win prizes for helping support businesses. Chat and connect with others and then privately review the promotion.</p>
                        <div className='block lg:hidden'>
                            <button className='mt-6 text-white bg-[#5271FF] w-full h-[54px] sm:h-[60px] rounded-[10px] ff_CircularStd text-base sm:text-[18px] leading-[126.5%] font-medium max-w-[353px] flex items-center justify-center gap-4 hover:bg-black duration-300'>Find Promotions/Contests <span><img className='w-[20px]' src={MsgIcon} alt="MsgIcon" /></span></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header