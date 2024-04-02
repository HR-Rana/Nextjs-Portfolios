"use client"

import React, { useState } from 'react'
import LinkTag from './Common/LinkTag'


export default function Nav() {

  return (
    <div className={`navigation-bar flex justify-between pt-2 top-0 sticky z-40 ` }>
      <nav className='shadow-md shadow-cyan-400 w-[70%] bg-slate-950 rounded-md mx-auto py-5 px-[25px]'>
          <ul className='flex justify-between w-[80%] mx-auto'>
            <li>
              <LinkTag path={"/"} name={"Home"} />
            </li> 
            <li>
              <LinkTag path={"/About"} name={"About"} />
            </li>
            <li>
              <LinkTag path={"/Services"} name={"Services"} />
            </li>
             <li>
              <LinkTag path={"/Portfolio"} name={"Portfolio"} />
            </li> <li>
              <LinkTag path={"/Contact"} name={"Contact"} />
            </li>
          </ul>
      </nav>
    </div>
  )
}
