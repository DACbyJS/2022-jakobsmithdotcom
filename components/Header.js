import { useState } from 'react';

import NavDrawer from './NavDrawer';
import Navigation from './Navigation';

export default function Header() {
  const [isNavDrawerActive, setIsNavDrawerActive] = useState(false);

  const toggleisNavDrawerActive = () => {
    setIsNavDrawerActive(!isNavDrawerActive);
  };

  return (
    <header className="header bg-js-black relative z-20">
      <Navigation handleMenuDotsClick={toggleisNavDrawerActive} />
      <NavDrawer isActive={isNavDrawerActive} />
    </header>
  );
}
