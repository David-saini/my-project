import React from 'react'
import ServicesImg1 from "../assets/images/webp/ServiceImg1.webp"
import ServicesImg2 from "../assets/images/webp/ServiceImg2.webp"
import ServicesImg3 from "../assets/images/webp/ServiceImg3.webp"
import ServicesImg4 from "../assets/images/webp/ServiceImg4.webp"
import ServicesImg5 from "../assets/images/webp/ServiceImg5.webp"
import ServicesImg6 from "../assets/images/webp/ServiceImg6.webp"
import ServicesImg7 from "../assets/images/webp/ServiceImg7.webp"
import ServicesImg8 from "../assets/images/webp/ServiceImg8.webp"
import ServicesImg9 from "../assets/images/webp/ServiceImg9.webp"
import ServicesImg10 from "../assets/images/webp/ServiceImg10.webp"
import ServicesImg11 from "../assets/images/webp/ServiceImg11.webp"
import ServicesImg12 from "../assets/images/webp/ServiceImg12.webp"

const Services = () => {
    return (
        <div className='mt-[50px] sm:mt-[65px] md:mt-[80px] lg:mt-[136px]'>
            <div className='max-w-[1440px] mx-auto relative'>

                <div className='mx-auto max-w-[1164px] px-3 z-50'>
                    <div className='flex items-center flex-wrap justify-center gap-[15px] md:gap-[18px]'>

                        {/* 1 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] md:pt-9 flex-col'>
                                <img className='max-w-[56px] sm:max-w-[67px]' src={ServicesImg1} alt="ServicesImg1" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>Automotive</p>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] md:pt-9 flex-col'>
                                <img className='max-w-[48px] sm:max-w-[57px]' src={ServicesImg2} alt="ServicesImg2" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>Travel Tours</p>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] md:pt-9 flex-col'>
                                <img className='max-w-[48px] sm:max-w-[56px]' src={ServicesImg3} alt="ServicesImg3" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>Tech Repairs</p>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] md:pt-9 flex-col'>
                                <img className='max-w-[48px] sm:max-w-[56px]' src={ServicesImg4} alt="ServicesImg4" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>Health and <span className='sm:block'>Fitness</span></p>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] md:pt-9 flex-col'>
                                <img className='max-w-[47px] sm:max-w-[54px]' src={ServicesImg5} alt="ServicesImg5" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>E-Commerce</p>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] sm:pt-9 flex-col'>
                                <img className='max-w-[47px] sm:max-w-[54px]' src={ServicesImg6} alt="ServicesImg6" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>Home <span className='sm:block'>Services</span></p>
                            </div>
                        </div>

                        {/* 7 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] sm:pt-9 flex-col'>
                                <img className='max-w-[48px] sm:max-w-[56px]' src={ServicesImg7} alt="ServicesImg7" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>Contests</p>
                            </div>
                        </div>

                        {/* 8 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] sm:pt-9 flex-col'>
                                <img className='max-w-[48px] sm:max-w-[56px]' src={ServicesImg8} alt="ServicesImg8" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>Retail</p>
                            </div>
                        </div>

                        {/* 9 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] sm:pt-9 flex-col'>
                                <img className='max-w-[48px] sm:max-w-[56px]' src={ServicesImg9} alt="ServicesImg9" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>Real Estate</p>
                            </div>
                        </div>

                        {/* 10 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] sm:pt-9 flex-col'>
                                <img className='max-w-[45px] sm:max-w-[54px]' src={ServicesImg10} alt="ServicesImg10" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>Nightlife</p>
                            </div>
                        </div>

                        {/* 11 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] sm:pt-9 flex-col'>
                                <img className='max-w-[47px] sm:max-w-[55px]' src={ServicesImg11} alt="ServicesImg11" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>Restaurants</p>
                            </div>
                        </div>

                        {/* 12 */}
                        <div className='bg-white border border-white rounded-[10px] w-full max-w-[160px] md:max-w-[175px] min-h-[120px] md:min-h-[156px] card_shadow'>
                            <div className='flex items-center pt-[25px] sm:pt-9 flex-col'>
                                <img className='max-w-[48px] sm:max-w-[56px]' src={ServicesImg12} alt="ServicesImg12" />
                                <p className='ff_CircularStd mt-3 sm:mt-1.5 text-[14px] sm:text-[16px] md:text-[18px] text-black font-normal leading-[130%]'>Misc</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services