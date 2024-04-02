import React from 'react'
import { AchiveSectionText, AchivementData } from '../Assist/FakeData/FakeData'

export default function Achivement() {
  
  return (
    <div>
      <h3 className='text-2xl red-700'>{AchiveSectionText.title}</h3>
      <div className='grid grid-cols-3'>
        {
          AchivementData.map((item, i) =>{
            return(
              <div className='cyan-shadow shadow shadow-cyan-400 w-[80%] mx-auto p-5 text-center' key={i}>
                  <h3 className='text-lg font-medium'>{item.title}</h3>
                  <p>{item.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
