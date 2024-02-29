import React from 'react'
import FooterLogo from "../assets/images/webp/footer_logo.webp"
import { Link } from 'react-router-dom'
import { Facebook, Instagram, LinkedIn, Youtube } from './Icon'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div className='max-w-[1440px] mx-auto'>
                <div className="max-w-[1164px] mx-auto px-5 md:px-3">

                    <div className='flex items-center justify-between sm:flex-row flex-col flex-wrap mt-[30px] sm:mt-5 mb-6 sm:mb-[30px]'>
                        <Link className='max-w-[62.24px] sm:max-w-[80px]'><img src={FooterLogo} alt="FooterLogo" /></Link>

                        <ul className='flex sm:flex-row flex-col items-center gap-[11px] sm:gap-[30px] md:gap-[40px] lg:gap-[51px] my-[30px] sm:my-0'>
                            <li className='text-black font-normal ff_CircularStd text-base leading-[126.5%] hover:text-[#ffa852] duration-300'><Link>Menu</Link></li>
                            <li className='text-black font-normal ff_CircularStd text-base leading-[126.5%] hover:text-[#ffa852] duration-300'><Link>Menu</Link></li>
                            <li className='text-black font-normal ff_CircularStd text-base leading-[126.5%] hover:text-[#ffa852] duration-300'><Link>Menu</Link></li>
                            <li className='text-black font-normal ff_CircularStd text-base leading-[126.5%] hover:text-[#ffa852] duration-300'><Link>Menu</Link></li>
                        </ul>

                        <div className='flex items-center gap-3'>
                            <Link><Facebook /></Link>
                            <Link><LinkedIn /></Link>
                            <Link><Instagram /></Link>
                            <Link><Youtube /></Link>
                        </div>

                    </div>

                    <div className='max-w-[1140px] h-[1px] bg-[#DCDCDC]'></div>

                    <div className='flex flex-col sm:flex-row justify-center sm:justify-between my-5 sm:my-[17px]'>
                        <div className='relative mx-auto sm:mx-0'>
                            <div className='policy_underline'></div>
                            <Link className='text-[14px] sm:text-[16px] leading-[150%] text-black font-normal ff_CircularStd text-center'>Privacy policy</Link>
                        </div>
                        <p className='text-[14px] text-[#797979] sm:text-[16px] leading-[150%] font-normal ff_CircularStd text-center sm:mt-0 mt-3'>© {currentYear} Red Shield Technology Inc.</p>
                        <p></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer