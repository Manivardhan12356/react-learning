import React from 'react'
import { illustrationData, Illustrations } from './data'

const Illustrator: React.FC = () => {
   const firstIllustration = illustrationData.find((illustration: Illustrations) => illustration.id === 1);
   const secondIllustration = illustrationData.find((illustration: Illustrations) => illustration.id === 2);
   const thirdIllustration = illustrationData.find((illustration: Illustrations) => illustration.id === 3);
   return (
      <div className="flex justify-center py-20">
         <div className='xl:w-[1350px] lg:w-[80%] md:w-[80%] max-sm:w-[80%]'>
            <div className='flex justify-between max-lg:flex-col max-lg:gap-5 max-lg:text-center  items-center px-10 py-5 mb-20 shadow-lg' key={firstIllustration?.id}>
               <div className='w-2/5 max-lg:w-full'>
                  <h3 className='text-2xl pb-3 font-semibold'>{firstIllustration?.heading}</h3>
                  <p className='text-base opacity-80 max-sm:text-xs'>{firstIllustration?.text}</p>
               </div>
               <div className='w-2/5 max-lg:w-[80%]'>
                  <img src={firstIllustration?.image} alt="images" />
               </div>
            </div>
            <div className='flex justify-between items-center px-10 py-5 mb-20 shadow-lg max-lg:flex-col-reverse max-lg:gap-5 max-lg:text-center' key={secondIllustration?.id}>
               <div className='w-2/5 max-lg:w-[80%]'>
                  <img src={secondIllustration?.image} alt="images" />
               </div>
               <div className='w-2/5 max-lg:w-full'>
                  <h3 className='text-2xl pb-3 font-semibold'>{secondIllustration?.heading}</h3>
                  <p className='text-base opacity-80 max-sm:text-xs'>{secondIllustration?.text}</p>
               </div>
            </div>
            <div className='flex justify-between items-center px-10 py-5 shadow-lg max-lg:flex-col max-lg:gap-5 max-lg:text-center' key={thirdIllustration?.id}>
               <div className='w-2/5 max-lg:w-full'>
                  <h3 className='text-2xl pb-3 font-semibold'>{thirdIllustration?.heading}</h3>
                  <p className='text-base opacity-80 max-sm:text-xs'>{thirdIllustration?.text}</p>
               </div>
               <div className='w-2/5 max-lg:w-[80%]'>
                  <img src={thirdIllustration?.image} alt="images" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Illustrator
