// Next
import Link from 'next/link';

// Custom
import SvgInfoIcon from '../svg/InfoIcon';
import SvgMenuDotsWithClose from '../svg/MenuDotsWithClose';
import SvgJakobSmithLogo from '../svg/JakobSmithLogo';

export default function Navigation({ handleMenuDotsClick , handleInfoClick}) {
  return (
    <nav
      id="info-logo-button-menu"
      className="nav relative space-x-12 flex flex-row justify-between items-center px-12 py-12 h-auto z-10"
    >
      <div className="i flex flex-col justify-center items-center max-w-[100px] w-full h-auto">
        <SvgInfoIcon handleInfoClick={handleInfoClick} />
      </div>

      <div className="logo max-w-[275px]">
        <Link href="/">
          <SvgJakobSmithLogo />
        </Link>
      </div>

      <div className="menu flex flex-col justify-center items-center max-w-[100px] w-full h-[60px]">
        <SvgMenuDotsWithClose handleMenuDotsClick={handleMenuDotsClick} />
      </div>
    </nav>
  );
}
