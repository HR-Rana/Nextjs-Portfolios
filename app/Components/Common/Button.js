"use client"

import React from 'react'



export default function ButtonTag({name, btnFunction}) {
  return (
   <button onClick={btnFunction}>{name}</button>
  )
}
