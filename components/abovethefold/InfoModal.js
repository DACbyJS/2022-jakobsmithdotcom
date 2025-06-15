import Link from 'next/link';
import ReactStrapModal from '../reactstrap/Modal';

export default function InfoModal({ isInfoModalActive, toggleIsInfoModalActive}) {
  return (
    <ReactStrapModal
      args={{
        centered: true,
        scrollable: false,
        unmountOnClose: true,
      }}
      isActive={isInfoModalActive}
      toggle={toggleIsInfoModalActive}
    >
      <div className="text-center">
        <h2 className="font-js-math text-[3ch] md:text-[5ch] mb-3">General Info</h2>
        <ul>
          <li className="font-overpass mb-2">
            <Link
              className="line-link red"
              href="/about"
            >
              About Me
            </Link>
          </li>
          <li className="font-overpass mb-2">
            <a
              className="line-link blue"
              href="/contact"
              target="_blank"
            >
              Contact Me
            </a>
          </li>
        </ul>
        <h2 className="font-js-math text-[3ch] md:text-[5ch] mt-8 mb-3">Site Specs</h2>
        <h3 className="font-overpass-mono mb-4 text-[1.5ch] leading-5">
          Review how I made this site <br/> and we can learn something new together!
        </h3>
        <ul>
          <li className="font-overpass mb-2">
            <a
              className="line-link red"
              href="https://github.com/DACbyJS/2022-jakobsmithdotcom"
              target="_blank"
            >
              Public Github Repo
            </a>
          </li>
          <li className="font-overpass mb-2">
            <a
              className="line-link blue"
              href="https://www.figma.com/file/zdn5B5s1wSpM0MHxCB0uPG/jakobsmith.com-V1?type=design&node-id=0%3A1&t=r0LYfrCKqIFfzCWN-1"
              target="_blank"
            >
              Public Figma Mockup
            </a>
          </li>
          <li className="font-overpass mb-2">
            <a
              className="line-link yellow"
              href="https://www.youtube.com/@StefWithAnF/videos"
              target="_blank"
            >
              Video Credit to StefWithAnF
            </a>
          </li>
        </ul>
        <h3 className="font-overpass-mono mt-4 text-[1.2ch]">
          Made with React, Next.js, Mux, SnapSVG and TailwindCSS.
        </h3>
      </div>
    </ReactStrapModal>
  );
}
