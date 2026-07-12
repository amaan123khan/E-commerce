import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'



const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

          <p>
            Welcome to <span className='font-semibold text-gray-800'>Forever</span>,
            your trusted online destination for stylish and high-quality fashion.
            We offer a carefully selected collection of clothing for men, women,
            and kids, combining comfort, quality, and the latest fashion trends.
          </p>

          <p>
            Built with the MERN Stack, TrendCart provides a fast, secure, and
            user-friendly shopping experience. From browsing products to placing
            orders, our goal is to make online shopping simple, reliable, and enjoyable
            for every customer.
          </p>

          <b className='text-gray-800'>Our Mission</b>

          <p>
            Our mission is to deliver fashionable products at affordable prices while
            providing excellent customer service, secure payments, and a seamless
            shopping experience that customers can trust.
          </p>

        </div>
      </div>


      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Every product is carefully selected to ensure premium quality, comfort, and long-lasting durability before reaching our customers.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Enjoy a smooth shopping experience with an easy-to-use interface, secure checkout, multiple payment options, and fast order processing.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service.</b>
          <p className='text-gray-600'> Our dedicated support team is always available to assist you with product inquiries, order tracking, returns, and any shopping-related questions.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
