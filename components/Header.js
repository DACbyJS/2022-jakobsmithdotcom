import { useState, useEffect, useRef } from 'react';

// Lib
import {
  toClose,
  toDots,
  getMenuDotsData,
} from '../lib/animations/morphDotsOrClose';

// Components
import NavDrawer from './NavDrawer';
import Navigation from './Navigation';

export default function Header() {
  const [isNavDrawerActive, setIsNavDrawerActive] = useState(false);
  const menuDotsData = useRef(null);

  const toggleisNavDrawerActive = () => {
    setIsNavDrawerActive(!isNavDrawerActive);
  };

  useEffect(() => {
    async function getData() {
      menuDotsData.current = await getMenuDotsData();
    }
    getData();

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
      <Navigation handleMenuDotsClick={toggleisNavDrawerActive} />
      <NavDrawer isActive={isNavDrawerActive} />
    </header>
  );
}
