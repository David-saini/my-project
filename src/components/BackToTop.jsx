import React from 'react'
import topUp from '../assets/images/webp/BackToTop_img.webp'
import { useState } from 'react';


const BackToTop = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })

    const [visibility, setVisibility] = React.useState(false)
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 300
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })
    return (
        <>

            <span
                onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="circle"
                ref={scrollTop}><img className='w-full flex' src={topUp} alt="topUp" /></span>

        </>

    )
}

export default BackToTop