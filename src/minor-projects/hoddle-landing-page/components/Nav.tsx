import React from 'react'
import { logo } from '../../../assets'
const Nav: React.FC = () => {
  return (
    <div className='flex justify-between px-10 items-center'>
      <div className='flex'>
        <img src={logo} alt="logo" className='max-sm:w-30 max-sm:h-5' />
      </div>
      <div className='flex'>
        <a className='bg-white xl:px-9 xl:py-3 md:px-9 md:py-3 lg:px-9 lg:py-3 max-sm:px-3 max-sm:py-1 rounded-full text-base  font-semibold list-none'>Try it free</a>
      </div>
    </div>
  )
}

export default Nav
