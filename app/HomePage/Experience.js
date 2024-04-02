
import React from 'react'
import { ExperienceData, ExperienceSection } from '../Assist/FakeData/FakeData'
import { IoCloudDoneSharp } from "react-icons/io5";



export default function Experience() {

  return (
    <div className='Experience-section'>
      <div className='container'>
            <div className='title'>
                <p>Explore my</p>
                <h3>{ExperienceSection.title}</h3>
            </div>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-2 rounded-sm'>  
        {
          ExperienceData.map((data, i)=>{
           return(
            <div className='shadow mt-5 cursor-pointer hover:peer-last: shadow-cyan-400 w-[80%] p-5 mx-auto text-center group relative' key={i}>
            <div className='flex justify-center gap-5'>
              <span className='text-3xl flex items-center group-hover:text-pink-400 text-cyan-400 absolute left-[-12px] top-[35%]'><IoCloudDoneSharp /></span>
              <span>
                <h4 className='text-lg font-semibold'>{data.title}</h4>
                <p>{data.description}</p>
              </span>
            </div>
          </div>
           )
          })
        }
      </div>
    </div>
  )
}
