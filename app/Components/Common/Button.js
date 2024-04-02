"use client"

import React from 'react'



export default function ButtonTag({name, Class, btnFunction}) {
  return (
   <button onClick={btnFunction} className={Class}>{name}</button>
  )
}
