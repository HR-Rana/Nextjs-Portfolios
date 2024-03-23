import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='hero-container'>
       <div className='hero-content-box flex justify-between'>
            <div className='left-site-text'>
                <h6>A passionate Frontend Web developer..</h6>
                <h1>Reactjs and Nextjs <br/> I am working as a Professional 
                Frontend developer</h1>
                <p>I am <span>Rana</span>, I working this sector since 2021, and i love to code with my passion as well as dominate the latest Web technologies also for the Client best Satisfaction...still working this sector as a Full time Developer to Providing Web related all kind o Services...</p>
            </div>
            <div className='hero-image-box'>
                <Image src={''} alt='' width={100} height={100} />
            </div>
       </div>
    </div>
  )
}
