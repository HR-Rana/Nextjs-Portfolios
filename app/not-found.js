import React from 'react'
import Image from 'next/image'

import Img from '@/app/Assist/images/Not-found.png'
import LinkTag from './Components/Common/LinkTag'


export default function NotFound() {
  return (
    <div className=' h-[100dvh] justify-center'>
       <div className='text-center '>
            <h4 className='text-xl text-red-300 pt-5'>Sorry, the page is not found..!
                <span className='ml-2 text-cyan-400'>
                  <LinkTag path={"/"} name={"Go to Home"} className={"text-cyan-400 font-semibold"}  />
                </span>
            </h4>
       </div>
       <div className='flex items-center justify-center h-[100%] my-5'>
            <Image src={Img} alt='' />
       </div>
    </div>
  )
}
