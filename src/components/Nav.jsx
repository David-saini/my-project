import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderLogo from "../assets/images/webp/incentive_logo.webp"
import menu from "../assets/images/webp/Menu.webp"
import CrossIcon from "../assets/images/png/CrossIcon.png"

const Nav = () => {
    const [Menu, setMenu] = useState(false)

    if (Menu) {
        document.body.classList.add("overflow-hidden");
    }
    else {
        document.body.classList.remove("overflow-hidden");
    }
    return (
        <div className='bg-[#5271ff] relative z-[100]'>
            <div className='max-w-[1164px] px-3 mx-auto sticky top-0'>

                <div className='flex items-center justify-between py-[11.4px] md:py-2'>
                    <Link><img className='w-[99px] sm:w-[120px] md:w-[149px]' src={HeaderLogo} alt="HeaderLogo" /></Link>

                    <div className='lg:hidden block'>
                        <div className={`${Menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='z-index-100 relative' onClick={() => setMenu}>
                                <div className='absolute top-[20px] right-[20px]'>
                                    <Link><img className='w-[18px]' src={CrossIcon} alt="CrossIcon" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className={`${Menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='z-index-100' onClick={() => setMenu(false)}>
                                <div className='absolute top-[20px] right-[15px]'>
                                    <Link><img className='w-[18px]' src={CrossIcon} alt="CrossIcon" /></Link>
                                </div>
                            </div>

                            <div className='flex items-center justify-center flex-col'>
                                <div className='bg-white opacity-20 h-[1px] w-full px-5 mt-8 mb-6'></div>
                                <ul className='flex align-center justify-center ps-0 mb-0'>
                                    <li className='relative'><Link className='text-white hover:text-[#ffa852] duration-300 ff_CircularStd leading-[126.5%] text-base mobile_navlinks'>Menu</Link></li>
                                    <li className='relative'><Link className='text-white hover:text-[#ffa852] duration-300 ff_CircularStd leading-[126.5%] text-base mobile_navlinks'>Menu</Link></li>
                                    <li className='relative'><Link className='text-white hover:text-[#ffa852] duration-300 ff_CircularStd leading-[126.5%] text-base mobile_navlinks'>Menu</Link></li>
                                    <li className='relative'><Link className='text-white hover:text-[#ffa852] duration-300 ff_CircularStd leading-[126.5%] text-base mobile_navlinks'>Menu</Link></li>
                                </ul>
                                <div className='block lg:hidden mt-4'>
                                    <button className='ff_CircularStd leading-[126.5%] text-base text-white w-[335px] h-[50px] rounded-[10px] bg-[#FFA852] px-[37px] border border-solid border-[#ffa852] hover:bg-transparent duration-300'>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:block hidden'>
                        <ul className='flex align-items-center gap-5'>
                            <li className='relative'><Link className='text-white hover:text-[#ffa852] duration-300 font-bold ff_CircularStd leading-[126.5%] text-base navlinks'>Menu</Link></li>
                            <li className='relative'><Link className='text-white hover:text-[#ffa852] duration-300 ff_CircularStd leading-[126.5%] text-base navlinks'>Menu</Link></li>
                            <li className='relative'><Link className='text-white hover:text-[#ffa852] duration-300 ff_CircularStd leading-[126.5%] text-base navlinks'>Menu</Link></li>
                            <li className='relative'><Link className='text-white hover:text-[#ffa852] duration-300 ff_CircularStd leading-[126.5%] text-base navlinks'>Menu</Link></li>
                        </ul>
                    </div>

                    <div className='lg:block hidden'>
                        <button className='ff_CircularStd leading-[126.5%] text-base text-white max-w-[115px] h-[43px] rounded-[10px] bg-[#FFA852] px-[37px] border border-solid border-[#ffa852] hover:bg-transparent duration-300'>Login</button>
                    </div>

                    <div className='lg:hidden block z-1'>
                        <Link onClick={() => setMenu(true)}><img className='w-[22px] sm:w-[35px]' src={menu} alt="menu" /></Link>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Nav