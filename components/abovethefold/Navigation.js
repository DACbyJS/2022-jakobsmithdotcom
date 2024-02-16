// Next
import Link from 'next/link';

// Custom
import SvgInfoIcon from '../svg/InfoIcon';
import SvgMenuDotsWithClose from '../svg/MenuDotsWithClose';
import SvgJakobSmithLogo from '../svg/JakobSmithLogo';

export default function Navigation({ handleMenuDotsClick, handleInfoClick }) {
  return (
    <nav
      id="info-logo-button-menu"
      className="nav relative space-x-6 flex flex-row flex-nowrap justify-between items-center px-10 sm:px-12 py-10 h-auto z-10"
    >
      <div className="flex flex-col justify-center items-center max-w-[40px] sm:max-w-[80px] lg:max-w-[100px] w-full h-auto">
        <SvgInfoIcon handleInfoClick={handleInfoClick} />
      </div>

      <div className="logo max-w-[100px] sm:max-w-[180px] 2xl:max-w-[275px] ">
        <Link href="/">
          <SvgJakobSmithLogo className={'rainbow-svg-on-hover path-white'}/>
        </Link>
      </div>

      <div className="menu -mb-3 md:-mb-6 lg:-mb-8 flex flex-col justify-center items-center max-w-[50px] sm:max-w-[80px] lg:max-w-[100px] w-full h-[25px] sm:h-[45px] lg:h-[60px]">
        <SvgMenuDotsWithClose handleMenuDotsClick={handleMenuDotsClick} />
      </div>
    </nav>
  );
}
