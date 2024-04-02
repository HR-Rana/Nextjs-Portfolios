import Image from 'next/image'
import React from 'react'
import ButtonTag from '../Components/Common/Button'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export default function Hero() {
  return (
    <div className='hero-container'>
       <div className='hero-content-box flex justify-between'>
            <div className='left-site-text'>
                <h6>A passionate Frontend Web developer..</h6>
                <h1>Reactjs and Nextjs <br/> I am working as a Professional 
                Frontend developer</h1>
                <p>I am <span>Rana</span>, I working this sector since 2021, and i love to code with my passion as well as dominate the latest Web technologies also for the Client best Satisfaction...still working this sector as a Full time Developer to Providing Web related all kind o Services...</p>
                <div className='w-[20%] flex items-center justify-between py-5 text-2xl'>
                <FaFacebookSquare /> <span><FaLinkedin /></span> <span><FaGithubSquare /></span> <span className='text-green-400'><BsWhatsapp className='text-green-600' /></span>
                </div>
              <div className=''>
              <ButtonTag name="Download CV" Class="bg-cyan-400 text-red-900 w-[fit-content] py-2 px-3  rounded-sm" />
              </div>
            </div>
            <div className='hero-image-box'>
                <Image src={''} alt='' width={100} height={100} />
            </div>
       </div>
    </div>
  )
}
