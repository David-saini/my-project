import React from 'react'
import TikMark from "../assets/images/webp/tik_mark.webp"
import StandardPrice from "../assets/images/webp/standard_price.webp"
import Enterprise from "../assets/images/webp/enterprise.webp"
import PricingBg from "../assets/images/webp/pricing_bg_img.webp"

const Pricing = () => {
    return (
        <div className='Pricing_bg'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='max-w-[1164px] mx-auto px-5 md:px-3 py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px]'>

                    <div className='text-center mt-1 sm:mt-2 relative'>
                        <img className='absolute w-[96px] sm:w-[120px] md:w-[149px] xl:left-[43.5%] lg:left-[42.5%] md:left-[40%] left-[35%] top-[-20%]' src={PricingBg} alt="PricingBg" />
                        <h2 className='font-black text-white text-[28px] md:text-[35px] lg:text-[40px] leading-[110%] ff_CircularStd z-10 relative'>Pricing</h2>
                    </div>

                    <div className='flex items-center justify-center sm:flex-row flex-col pt-[45px] pb-[25px] sm:py-[50px] gap-5 sm:gap-6'>

                        <div className='bg-white sm:mt-[9px] w-full max-w-[461px] rounded-[10px] border-[6px] border-white hover:border-[#F68A74] px-5 sm:px-[35px] py-[30px] sm:py-10 duration-300 relative pricing_card cursor-pointer'>
                            <div className='text-white font-bold ff_CircularStd text-[14px] sm:text-[18px] leading-[126.5%] bg-[#F68A74] w-[124px] h-[31px] sm:w-[160px] sm:h-[38px] flex items-center justify-center rotate-[-12.54deg] sm:rotate-[-30.97deg] rounded-[10px] absolute top-[-3%] left-[-7%] sm:left-[-18%] info'>Most Popular</div>

                            <img className='max-w-[102px] sm:max-w-[143px] mx-auto' src={StandardPrice} alt="StandardPrice" />

                            <h3 className='ff_CircularStd text-center text-[#5271FF] mt-3 sm:mt-5 text-[22px] sm:text-[26px] font-black leading-[140%]'>Standard</h3>

                            <p className='text-center text-black ff_CircularStd text-[50px] sm:text-[60px] font-bold leading-[140%]'>$49<span className='text-[18px] sm:text-[20px]'>/mo</span></p>

                            <div className='bg-[#f2f6fd] rounded-[10px] p-5 sm:p-[25px]'>

                                <div className='flex items-center gap-[14px] mb-[14px] sm:mb-[15px]'>
                                    <img className='w-[15px] sm:w-[17px]' src={TikMark} alt="TikMark" />
                                    <p className='text-black ff_CircularStd font-normal text-[14px] sm:text-base leading-[150%]'>Unlimited Email Accounts</p>
                                </div>

                                <div className='flex items-center gap-[14px] mb-[14px] sm:mb-[15px]'>
                                    <img className='w-[15px] sm:w-[17px]' src={TikMark} alt="TikMark" />
                                    <p className='text-black ff_CircularStd font-normal text-[14px] sm:text-base leading-[150%]'>Unlimited Email Warmup</p>
                                </div>

                                <div className='flex items-center gap-[14px] mb-[14px] sm:mb-[15px]'>
                                    <img className='w-[15px] sm:w-[17px]' src={TikMark} alt="TikMark" />
                                    <p className='text-black ff_CircularStd font-normal text-[14px] sm:text-base leading-[150%]'>1000 Active Leads</p>
                                </div>

                                <div className='flex items-center gap-[14px] mb-[14px] sm:mb-[15px]'>
                                    <img className='w-[15px] sm:w-[17px]' src={TikMark} alt="TikMark" />
                                    <p className='text-black ff_CircularStd font-normal text-[14px] sm:text-base leading-[150%]'>5000 Emails Monthly</p>
                                </div>

                                <div className='flex items-center gap-[14px] sm:pb-1'>
                                    <img className='w-[15px] sm:w-[17px]' src={TikMark} alt="TikMark" />
                                    <p className='text-black ff_CircularStd font-normal text-[14px] sm:text-base leading-[150%]'>Live Chat Support</p>
                                </div>

                            </div>
                            <button className='mt-5 sm:mt-6 text-white bg-[#5271FF] w-full h-[54px] sm:h-[60px] rounded-[10px] ff_CircularStd text-base sm:text-[18px] leading-[126.5%] font-medium hover:bg-black duration-300'>Start For Free</button>
                        </div>

                        <div className='bg-white sm:mt-[9px] w-full max-w-[461px] rounded-[10px] border-[6px] border-white hover:border-[#F68A74] px-5 sm:px-[35px] py-[30px] sm:py-10 duration-300 relative pricing_card cursor-pointer'>
                            <div className='text-white font-bold ff_CircularStd text-[14px] sm:text-[18px] leading-[126.5%] bg-[#F68A74] w-[124px] h-[31px] sm:w-[160px] sm:h-[38px] flex items-center justify-center rotate-[-12.54deg] sm:rotate-[-30.97deg] rounded-[10px] absolute top-[-3%] left-[-7%] sm:left-[-18%] info'>Most Popular</div>

                            <img className='max-w-[93px] sm:max-w-[129px] mx-auto' src={Enterprise} alt="Enterprise" />

                            <h3 className='ff_CircularStd text-center text-[#5271FF] mt-3 sm:mt-5 text-[22px] sm:text-[26px] font-black leading-[140%]'>Enterprise</h3>

                            <p className='text-center text-black ff_CircularStd text-[50px] sm:text-[60px] font-bold leading-[140%]'>$89<span className='text-[18px] sm:text-[20px]'>/mo</span></p>

                            <div className='bg-[#f2f6fd] rounded-[10px] p-5 sm:p-[25px]'>

                                <div className='flex items-center gap-[14px] mb-[14px] sm:mb-[15px]'>
                                    <img className='w-[15px] sm:w-[17px]' src={TikMark} alt="TikMark" />
                                    <p className='text-black ff_CircularStd font-normal text-[14px] sm:text-base leading-[150%]'>Unlimited Email Accounts</p>
                                </div>

                                <div className='flex items-center gap-[14px] mb-[14px] sm:mb-[15px]'>
                                    <img className='w-[15px] sm:w-[17px]' src={TikMark} alt="TikMark" />
                                    <p className='text-black ff_CircularStd font-normal text-[14px] sm:text-base leading-[150%]'>Unlimited Email Warmup</p>
                                </div>

                                <div className='flex items-center gap-[14px] mb-[14px] sm:mb-[15px]'>
                                    <img className='w-[15px] sm:w-[17px]' src={TikMark} alt="TikMark" />
                                    <p className='text-black ff_CircularStd font-normal text-[14px] sm:text-base leading-[150%]'>1000 Active Leads</p>
                                </div>

                                <div className='flex items-center gap-[14px] mb-[14px] sm:mb-[15px]'>
                                    <img className='w-[15px] sm:w-[17px]' src={TikMark} alt="TikMark" />
                                    <p className='text-black ff_CircularStd font-normal text-[14px] sm:text-base leading-[150%]'>5000 Emails Monthly</p>
                                </div>

                                <div className='flex items-center gap-[14px] sm:pb-1'>
                                    <img className='w-[15px] sm:w-[17px]' src={TikMark} alt="TikMark" />
                                    <p className='text-black ff_CircularStd font-normal text-[14px] sm:text-base leading-[150%]'>Live Chat Support</p>
                                </div>

                            </div>
                            <button className='mt-5 sm:mt-6 text-white bg-[#5271FF] w-full h-[54px] sm:h-[60px] rounded-[10px] ff_CircularStd text-base sm:text-[18px] leading-[126.5%] font-medium hover:bg-black duration-300'>Start For Free</button>
                        </div>

                    </div>

                    <p className='max-w-[777px] text-base sm:text-[18px] leading-[150%] mx-auto font-normal ff_CircularStd text-white text-center'>¹No purchase necessary. Contests are open to all eligible attendees who are active participants of the incentive community. All contests are open to eligible participants who "Request to Join" a contest based on eligibility criteria.</p>

                </div>
            </div>
        </div>
    )
}

export default Pricing