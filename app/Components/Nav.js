import Link from 'next/link'
import React from 'react'
import LinkTag from './Common/LinkTag'
import Image from 'next/image'

export default function Nav() {
  return (
    <div className='navigation-bar flex justify-between'>
      <div className='logo'>
        Branding logo
        <LinkTag path={"/"} >
          <h3>Branding logo</h3>
          {/* <Image src={""} alt="logo"  width={100} height={100} /> */}
        </LinkTag>
      </div>
      <nav className='sm:w'>
          <ul className='flex justify-between'>
            <li>
              <LinkTag path={"/"} name={"Home"} />
            </li> <li>
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
