import React from 'react'
import { email, location, logo, phone } from '../../../assets'
import { RiTwitterXLine } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'
import { SlSocialLinkedin } from 'react-icons/sl'
 
const Footer: React.FC = () => {
   return (
      <>
         <div className=' justify-center items-center flex flex-col mt-20 relative  bg-[#1c2022]'>
            <div className="flex flex-col gap-10 p-10 w-[1350px] max-xl:w-[90%]">
                  <img src={logo} alt="logoFooter" className='bg-white rounded-lg p-2 w-40 h-15' />
               <div className="grid grid-cols-4 max-lg:grid-cols-1  gap-20 text-white">
                  <div className="text-white flex flex-col gap-5">
                     <div className='flex gap-4'>
                        <img src={location} alt="loaction" className='w-6 h-6' />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium blanditiis veniam non. Voluptatum, odio.</span>
                     </div>
                     <div className='flex gap-4 max-lg:text-center'>
                        <img src={phone} alt="phone" className='w-6 h-6' />
                        <span>+1678954325</span>
                     </div>
                     <div className='flex gap-4'>
                        <img src={email} alt="email" className='w-6 h-6' />
                        <span>exmaple#gmail.com</span>
                     </div>

                  </div>
                  <div className="flex flex-col align-middle gap-5">
                     <p>About Us</p>
                     <p>What We Do</p>
                    <p>FAQ</p>
                  </div>
                  <div className="flex flex-col align-middle gap-5">
                     <p>Career</p>
                     <p>Blog</p>
                    <p>Contact Us</p>
                  </div>
                  <div className="flex gap-5">
                     <RiTwitterXLine />
                     <BsInstagram />
                     <SlSocialLinkedin/>
                  </div>
           </div>
            </div>
         </div>
         
      </>
   )
}

export default Footer
