import React from 'react'

export default function SkillSection() {
  return (
    <div>
      <div>
        {
            SkillData.map((item, index) => {
              return (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">
                    <IoCloudDoneSharp />
                  </div>
                  <div className="skill-name">
                    {item.name}
                  </div>
                </div>
              )
            })
        }
      </div>
    </div>
  )
}
