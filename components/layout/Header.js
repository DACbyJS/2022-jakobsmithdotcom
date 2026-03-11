import { useState, useEffect, useRef } from "react";

// Lib
import {
  toClose,
  toDots,
  getMenuDotsData,
} from "../../lib/animations/morphDotsOrClose";

// Components
import NavDrawer from "../abovethefold/NavDrawer";
import Navigation from "../abovethefold/Navigation";
import InfoModal from "../abovethefold/InfoModal";

export default function Header() {
  const [isNavDrawerActive, setIsNavDrawerActive] = useState(false);
  const [isInfoModalActive, setIsInfoModalActive] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
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

  useEffect(() => {
    const headerElement = headerRef.current;

    if (!headerElement) {
      return undefined;
    }

    const updateHeaderHeight = () => {
      setHeaderHeight(Math.ceil(headerElement.getBoundingClientRect().height));
    };

    updateHeaderHeight();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateHeaderHeight);

      return () => {
        window.removeEventListener("resize", updateHeaderHeight);
      };
    }

    const resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight();
    });

    resizeObserver.observe(headerElement);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="header bg-js-black relative z-20"
      style={{ "--mobile-nav-offset": `${headerHeight}px` }}
    >
      <InfoModal
        isInfoModalActive={isInfoModalActive}
        toggleIsInfoModalActive={toggleIsInfoModalActive}
      />
      <Navigation
        handleMenuDotsClick={toggleIsNavDrawerActive}
        handleInfoClick={toggleIsInfoModalActive}
      />
      <NavDrawer
        isActive={isNavDrawerActive}
        handleLinkItemClick={toggleIsNavDrawerActive}
      />
    </header>
  );
}
