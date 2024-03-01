// import React, { useState, useEffect } from 'react';
// import topUp from '../assets/images/webp/BackToTop_img.webp';

// const BackToTop = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             // Show/hide the button based on the scroll position
//             if (window.pageYOffset > 300) {
//                 setIsVisible(true);
//             } else {
//                 setIsVisible(false);
//             }
//         };

//         // Add event listener for scrolling
//         window.addEventListener('scroll', handleScroll);

//         // Remove event listener on cleanup
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     };

//     return (
//         <>
//             <span
//                 onClick={scrollToTop}
//                 className={`cursor-pointer z-[200] h-[40px] w-[40px] md:h-[60px] md:w-[60px] fixed bottom-[10%] right-[2%] ${isVisible ? 'inline-block' : 'hidden'}`}
//             >
//                 <img className='w-full flex' src={topUp} alt="topUp" />
//             </span>
//         </>
//     );
// };

// export default BackToTop;


import React, { useState, useEffect } from 'react';
import topUp from '../assets/images/webp/BackToTop_img.webp';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show/hide the button based on the scroll position
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add event listener for scrolling
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="relative">
            <span
                onClick={scrollToTop}
                className={`absolute cursor-pointer z-[200] h-[40px] w-[40px] md:h-[60px] md:w-[60px] bottom-[410px] sm:bottom-44 right-[3%] xl:right-[10%] ${isVisible ? 'inline-block' : 'hidden'}`}
            >
                <img className='w-full flex' src={topUp} alt="topUp" />
            </span>
        </footer>
    );
};

export default BackToTop;
