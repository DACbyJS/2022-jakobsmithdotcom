// Next
import Image from 'next/image';
import Link from 'next/link';

// Image
import tuka from '../../public/png/TUKA.png';
import SvgJakobSmithLogo from '../../components/svg/JakobSmithLogo';
import WigglyLink from '../../components/svg/WigglyLink';

// Style
import twConfig from '../../tailwind.config';

export default function Footer() {
  const jsBlack = twConfig.theme.colors['js-black'];
  return (
    <footer className="footer bg-js-white relative flex flex-row justify-center md:justify-between items-center white-black-border w-full z-20 py-10 px-10">
      <div className="logo hidden xl:block max-w-[275px]">
        <SvgJakobSmithLogo pathFill={jsBlack} className={'rainbow-svg-on-hover path-black'}/>
      </div>
      <div className="contact-links text-[1.2ch] md:text-[2ch] flex flex-col items-center justify-center">
        <Link className="overpass-underline-no-line wiggly-svg-link mb-4" href="/contact">
          Contact Me
          <WigglyLink/>
        </Link>
        <Link
          className="overpass-underline-no-line wiggly-svg-link mb-4"
          href="https://www.linkedin.com/in/jakob-smith-webdev/"
        >
          linkedin.com/jakobsmithdev
          <WigglyLink/>
        </Link>
        <Link className="overpass-underline-no-line wiggly-svg-link" href="https://github.com/DACbyJS">
          github.com/dacbyjs
          <WigglyLink/>
        </Link>
      </div>
      <div className="user relative flex-1 hidden md:block h-[150px] max-w-[375px]">
        <Image
          className="tuka absolute w-full h-auto"
          src={tuka}
          alt="The User Knows All Icon"
        />
      </div>
    </footer>
  );
}
