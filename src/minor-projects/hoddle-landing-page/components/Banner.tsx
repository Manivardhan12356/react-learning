import React from 'react'
import { mockups } from '../../../assets'

const Banner:React.FC = () => {
  return (
    <div className='pt-16 flex justify-between lg:flex-row items-center px-10 md:flex-col max-sm:flex-col max-sm:gap-8 max-sm:text-center md:gap-20 md:text-center lg:text-left xl:text-left'>
        <div className="w-2/5 max-sm:w-full md:w-full">
           <h1 className='xl:text-4xl lg:text-3xl md:text-2xl max-sm:text-xl font-extrabold xl:leading-[50px]'>
              Build The Community
              <span className='block max-md:inline max-sm:block'>
                 Your Fans With Love
              </span>    
           </h1> 
           <p className='xl:text-xl lg:text-base md:text-base max-sm:text-base max-sm:py-5 text-[#020F17] xl:py-10 lg:py-7 md:py-5'>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
           </p>

           <a href="json" className='px-14 rounded-full text-xs py-3 max-sm:mb-5 bg-[#ff52bf] text-[#E5FFFF]'>Get Started For Free</a>
        </div>
        <div className="w-[55%] h-1/2  max-sm:w-full md:w-full">
           <img src={mockups} alt="mockups" className='h-1/2 w-full'/>
        </div>
    </div>
  )
}

export default Banner
