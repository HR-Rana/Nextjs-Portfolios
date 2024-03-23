import React from 'react'
import { ExperienceSection } from '../Assist/FakeData/FakeData'

export default function Experience() {
  return (
    <div className='Experience-section'>
      <div className='container'>
            <div className='title'>
                <p>Explore my</p>
                <h3>{ExperienceSection.title}</h3>
            </div>
      </div>
    </div>
  )
}
