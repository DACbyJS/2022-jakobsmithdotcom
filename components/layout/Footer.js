// Next
import Image from 'next/image';
import Link from 'next/link';

// Image
import tuka from '../../public/png/TUKA.png';
import SvgJakobSmithLogo from '../../components/svg/JakobSmithLogo';

// Style
import twConfig from '../../tailwind.config';

export default function Footer() {
  const jsBlack = twConfig.theme.colors['js-black'];
  return (
    <footer className="footer bg-js-white relative flex flex-row justify-between items-center white-black-border w-full z-20 py-10 px-10">
      <div className="logo max-w-[275px]">
        <SvgJakobSmithLogo pathFill={jsBlack} />
      </div>
      <div className="contact-links flex flex-col items-center">
        <Link className="overpass-underline mb-4" href="/contact">
          Contact Form
        </Link>
        <Link
          className="overpass-underline mb-4"
          href="https://www.linkedin.com/in/jakob-smith-webdev/"
        >
          linkedin.com/jakobsmithdev
        </Link>
        <Link className="overpass-underline" href="https://github.com/DACbyJS">
          github.com/dacbyjs
        </Link>
      </div>
      <div className="user relative flex-1 max-w-[375px]">
        <Image
          className="tuka absolute w-full h-auto"
          src={tuka}
          alt="The User Knows All Icon"
        />
      </div>
    </footer>
  );
}
