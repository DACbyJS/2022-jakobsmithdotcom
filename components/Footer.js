// Next 
import Image from "next/image";
import Link from "next/link";

// Image 
import SvgJakobSmithLogo from "../components/SvgJakobSmithLogo"

// Style
import twConfig from '../tailwind.config';


export default function Footer() {
  const jsBlack = twConfig.theme.colors["js-black"];
  return (
    <footer className='footer relative flex flex-row just white-black-border w-full z-10 mt-28 py-10 px-10'>
        <div className='logo max-w-[275px]'>
          <SvgJakobSmithLogo pathFill={jsBlack}/>
        </div>
        <div className='contact-links flex flex-col items-center'>
          <Link href="" className="">hello@jakobsmith.com</Link>
          <Link href="" className="">hello@jakobsmith.com</Link>
          <Link href="" className="">hello@jakobsmith.com</Link>
          <Link href="" className="">hello@jakobsmith.com</Link>
        </div>
        <div className='user'></div>
    </footer>
  )
}