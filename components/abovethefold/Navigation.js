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
      className="nav relative space-x-1 flex flex-row flex-nowrap justify-between items-center px-6 sm:px-10 py-6 sm:py-8 h-auto z-10"
    >
      <div className="flex flex-col justify-center items-center max-w-[41px] sm:max-w-[75px] lg:max-w-[120px] w-full h-auto">
        <SvgInfoIcon handleInfoClick={handleInfoClick} />
      </div>

      <div className="logo max-w-[95px] sm:max-w-[175px] 2xl:max-w-[225px] ">
        <Link href="/">
          <SvgJakobSmithLogo className={'rainbow-svg-on-hover path-white'}/>
        </Link>
      </div>

      <div className="menu -mb-3 md:-mb-6 lg:-mb-8 flex flex-col justify-center items-center max-w-[41px] sm:max-w-[75px] lg:max-w-[120px] w-full h-[25px] sm:h-[45px] lg:h-[60px]">
        <SvgMenuDotsWithClose handleMenuDotsClick={handleMenuDotsClick} />
      </div>
    </nav>
  );
}
