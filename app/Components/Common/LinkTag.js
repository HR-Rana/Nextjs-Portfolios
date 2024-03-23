"use client"

import Link from 'next/link'
import React from 'react'

export default function LinkTag({path, name}) {
  return (
    <Link href={path} >{name}</Link>
  )
}
