"use client"

import React from 'react'

export default function InputTag({type, placeholder, Action, value}) {
  return (
    <input type={type} placeholder={placeholder} onClick={Action} value={value} />
  )
}
