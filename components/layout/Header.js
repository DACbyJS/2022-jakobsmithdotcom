import { useState, useEffect, useRef } from 'react';

// Lib
import {
  toClose,
  toDots,
  getMenuDotsData,
} from '../../lib/animations/morphDotsOrClose';

// Components
import NavDrawer from '../abovethefold/NavDrawer';
import Navigation from '../abovethefold/Navigation';
import ReactStrapModal from '../reactstrap/Modal';

export default function Header() {
  const [isNavDrawerActive, setIsNavDrawerActive] = useState(false);
  const [isInfoModalActive, setIsInfoModalActive] = useState(false);
  const menuDotsData = useRef(null);

  const toggleIsNavDrawerActive = () => {
    setIsNavDrawerActive(!isNavDrawerActive);
  };

  const toggleIsInfoModalActive = () => {
    setIsInfoModalActive(!isInfoModalActive);
  };

  useEffect(() => {
    // Why async/await? Because we need to wait for the Snap library to load
    async function getData() {
      menuDotsData.current = await getMenuDotsData();
    }
    getData();

    // Why a ref? Because the Snap library-selected svg data needs to remain
    // the same between renders of svg itself
    if (menuDotsData.current === null) {
      return;
    }

    const { allDots, allDotsPoints, allClosesPoints } = menuDotsData.current;
    isNavDrawerActive
      ? toClose(allDots, allClosesPoints)
      : toDots(allDots, allDotsPoints);
  }, [isNavDrawerActive]);

  return (
    <header className="header bg-js-black relative z-20">
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
          <h2 className="font-js-math text-[5ch] mb-4">Site Specs</h2>
          <h3 className="font-overpass-mono mb-4 text-[1.5ch]">
            Review how I made this site and we can learn something new together!
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
      <Navigation
        handleMenuDotsClick={toggleIsNavDrawerActive}
        handleInfoClick={toggleIsInfoModalActive}
      />
      <NavDrawer isActive={isNavDrawerActive} handleLinkItemClick={toggleIsNavDrawerActive}/>
    </header>
  );
}
