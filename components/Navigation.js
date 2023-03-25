// Next
import Link from 'next/link';
import Image from 'next/image';

// Custom
import infoIcon from '../public/svg/info.svg';
import menuDots from '../public/svg/menu-dots.svg';
import SvgJakobSmithLogo from './SvgJakobSmithLogo';

export default function Navigation({handleMenuDotsClick}) {

  return (
    <nav
      id="info-logo-button-menu"
      className="nav relative flex flex-row justify-between px-12 py-12 h-auto z-10"
    >
      <div className="i flex flex-col justify-center items-center max-w-[100px] w-full h-auto">
        <Image src={infoIcon} alt="Click for more Information" />
      </div>

      <div className="logo max-w-[275px]">
        <SvgJakobSmithLogo />
      </div>

      <div className="menu flex flex-col justify-center items-center max-w-[100px] w-full h-auto">
        <Image className="cursor-pointer" onClick={handleMenuDotsClick} src={menuDots} alt="Click to Open Menu" />
      </div>
    </nav>
  );
}
