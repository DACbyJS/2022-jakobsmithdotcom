// Next
import Link from 'next/link'
import Image from 'next/image'

// Custom
import infoIcon from '../public/svg/info.svg'
import menuDots from '../public/svg/menu-dots.svg'
import logo from '../public/svg/white-jakob-smith-logo.svg'

export default function Navigation() {
  return (
    <nav className='nav'>
        <div className='i'>
          <Image src={infoIcon} alt="Click for more Information"/>
        </div>
        <div className='logo'><Image src={logo} alt="Jakob Smith Logo"/></div>
        <div className='menu'><Image src={menuDots} alt="Click to Open Menu"/></div>
    </nav>
  )
}