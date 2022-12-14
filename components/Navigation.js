// Next
import Link from 'next/link';
import Image from 'next/image';

// Custom
import infoIcon from '../public/svg/info.svg';
import menuDots from '../public/svg/menu-dots.svg';
import logo from '../public/svg/white-jakob-smith-logo.svg';

export default function Navigation() {
  return (
    <nav className="nav flex flex-row justify-between px-12 py-12 h-auto">

      <div className="i flex flex-col justify-center items-center max-w-[100px] w-full h-auto">
        <Image src={infoIcon} alt="Click for more Information" />
      </div>

      <div className="logo max-w-[275px]">
        <Image src={logo} alt="Jakob Smith Logo" />
      </div>

      <div className="menu flex flex-col justify-center items-center max-w-[100px] w-full h-auto">
        <Image src={menuDots} alt="Click to Open Menu" />
      </div>

    </nav>
  );
}
