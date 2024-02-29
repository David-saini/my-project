import React from 'react'
import PromoImg1 from "../assets/images/webp/promo_img_1.webp"
import PromoImg2 from "../assets/images/webp/promo_img_2.webp"
import PromoImg3 from "../assets/images/webp/promo_img_3.webp"
import PromoImg4 from "../assets/images/webp/promo_img_4.webp"
import PromoImg5 from "../assets/images/webp/promo_img_5.webp"
import Ellipse38 from "../assets/images/webp/Ellipse38.webp"
import TextVector from "../assets/images/webp/PromoteText_vector.webp"

const Promote = () => {
    return (
        <div className='max-w-[1440px] mx-auto relative z-[60]'>
            <img className='absolute top-[-10%] right-[-20%] sm:block hidden' src={Ellipse38} alt="Ellipse38" />
            <div className='max-w-[1164px] mx-auto px-5 sm:px-3 z-10 relative'>

                <div className='relative'>
                    <h2 className='ff_CircularStd font-black text-[28px] md:text-[35px] lg:text-[40px] !leading-[110%] text-center mt-[54px] sm:mt-[65px] md:mt-[80px] lg:mt-[108px] relative z-20'>Why Incentive Promotions</h2>
                    <img className='absolute left-[35%] sm:left-[43%] top-[-15%] md:w-[149px] sm:w-[120px] w-[96px]' src={TextVector} alt="TextVector" />
                </div>

                <div className='flex items-center justify-center flex-wrap w-full gap-[15px] xl:gap-6 mt-[25px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px]'>
                    <div className='bg-white border border-white rounded-[10px] max-w-[558px] xl:max-w-[364px] w-full card_shadow xl:min-h-[321px]'>
                        <img className='w-[65px] md:w-[82px] mx-auto pt-5 sm:pt-7 md:pt-9' src={PromoImg1} alt="PromoImg1" />

                        <p className='text-center ff_CircularStd font-bold text-[18px] md:text-[20px] !leading-[140%] text-black py-1'>Promo Invites</p>
                        <p className='font-normal max-w-[314px] text-center mx-auto ff_CircularStd text-[#797979] text-[14px] px-3 sm:text-base !leading-[140%] pb-5 xl:pb-0'>Incentive helps companies offer deep discounts to customers.</p>
                    </div>

                    <div className='bg-white border border-white rounded-[10px] max-w-[558px] xl:max-w-[364px] w-full card_shadow xl:min-h-[321px]'>
                        <img className='w-[65px] md:w-[82px] mx-auto pt-5 sm:pt-7 md:pt-9' src={PromoImg2} alt="PromoImg2" />

                        <p className='text-center ff_CircularStd font-bold text-[18px] md:text-[20px] !leading-[140%] text-black py-1'>Group Chat to Connect</p>
                        <p className='font-normal xl:max-w-[314px] px-5 xl:px-0 text-center mx-auto ff_CircularStd text-[#797979] sm:text-base text-[14px] !leading-[140%] pb-5 xl:pb-0'>Communication builds community and excitement between like-minded people. The chat and communication closes after the promo event. So conversation remains focused around the new promo.</p>
                    </div>

                    <div className='bg-white border border-white rounded-[10px] max-w-[558px] xl:max-w-[364px] w-full card_shadow xl:min-h-[321px]'>
                        <img className='w-[65px] md:w-[82px] mx-auto pt-5 sm:pt-7 md:pt-9' src={PromoImg3} alt="PromoImg3" />

                        <p className='text-center ff_CircularStd font-bold text-[18px] md:text-[20px] !leading-[140%] text-black py-1'>Invite via Code</p>
                        <p className='font-normal px-5 xl:px-0 xl:max-w-[314px] text-center mx-auto ff_CircularStd text-[#797979] text-[14px] sm:text-base !leading-[140%] pb-5 xl:pb-0'>Use social media or any other platform via an Invite Link or Code people can enter to sign up and automatically get invited to take advantage of the discount. Meaning you can scale promotions from flyers, conferences, or impromptu interactions to dive deeper with customers.</p>
                    </div>

                    <div className='bg-white border border-white rounded-[10px] max-w-[558px] w-full card_shadow xl:min-h-[321px]'>
                        <img className='w-[74px] md:w-[82px] mx-auto pt-6 sm:pt-7 md:pt-9' src={PromoImg4} alt="PromoImg4" />

                        <p className='text-center ff_CircularStd font-bold text-[18px] md:text-[20px] !leading-[140%] text-black py-1'>Get Real Feedback</p>
                        <p className='font-normal max-w-[508px] text-center mx-auto ff_CircularStd px-[20px] text-[#797979] sm:text-base text-[14px] !leading-[140%] pb-5 xl:pb-0'>Leave private (non-public) reviews for business hosts to ensure trust and safety. We summarize your reviews to highlight the best traits on their business page. A trust score for all businesses ensures integrity of the promotion. Businesses can get full reviews to help them iterate or improve their products.</p>
                    </div>

                    <div className='bg-white border border-white rounded-[10px] max-w-[558px] w-full card_shadow xl:min-h-[321px]'>
                        <img className='w-[65px] md:w-[82px] mx-auto pt-5 sm:pt-7 md:pt-9' src={PromoImg5} alt="PromoImg5" />

                        <p className='text-center ff_CircularStd font-bold text-[18px] md:text-[20px] !leading-[140%] text-black py-1'>Social Interactions</p>
                        <p className='font-normal max-w-[508px] text-center mx-auto ff_CircularStd text-[14px] sm:text-base px-[20px] text-[#797979] !leading-[140%] pb-5 xl:pb-0'>Promotions ensure more reliable sales and getting feedback for brick and mortar as well as online stores. Do away with finnicky online ads or promoting with click based platforms.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Promote