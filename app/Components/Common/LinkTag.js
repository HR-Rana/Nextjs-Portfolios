"use client"

import Link from 'next/link'
import React from 'react'

export default function LinkTag({path,className, name}) {
  return (
    <Link href={path} className={className} >{name}</Link>
  )
}
