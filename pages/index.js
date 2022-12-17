// Next
import Head from 'next/head';
import Link from 'next/link';

// Styles
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jakob Smith | Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.container}>
        <div className="white-black-border relative z-10 mt-40 w-full max-w-[900px] mx-auto p-6">
          <div className="font-js-math text-center">
            <h2 className="text-[7ch] -mb-4">Web Development</h2>
            <h2 className="text-[5ch] tracking-[0.5ch]">Services For</h2>
          </div>
          <div className="flex flex-col items-center mt-10 font-overpass font-light uppercase text-[5.5ch] tracking-wider text-center">
            <Link className="mb-8 red line-link" href="/web-designers">
              Designers
            </Link>
            <Link className="mb-8 yellow line-link" href="/agencies">
              Agencies
            </Link>
            <Link className="mb-8 blue line-link" href="/beneficial-businesses">
              Businesses
            </Link>
          </div>
        </div>

        <div className="white-black-border relative z-10 mt-32 w-full max-w-[900px] mx-auto p-6">
          <div className="font-js-math text-center">
            <h2 className="text-[7ch] tracking-wide -mb-4">Who Is</h2>
            <h2 className="text-[7ch] tracking-wide">Jakob Smith?</h2>
          </div>
          <div className="flex flex-col items-center mt-8">
            <Link href="/portfolio" className="btn">
              Portfolio
            </Link>
            <div className="flex flex-row justify-center items-center mt-8 mb-8 space-x-8">
              <Link href="/about" className="btn">
                Story
              </Link>
              <Link href="/contact" className="btn">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
