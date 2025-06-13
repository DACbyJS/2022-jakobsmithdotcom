import { navClasses } from '../constants';
const { navDrawer, navLink } = navClasses;

/**
 * Returns CSS classes used to trigger the CSS animation
 * for the nav drawer open
 *
 * @returns {object} navDrawerClasses, navLinksClasses
 */
export const navDrawerTrickleOpen = () => {
  let navLinksClasses = [];
  let navDrawerClasses = `${navDrawer.mainClass} ${navDrawer.activeClass} ${navDrawer.downClass}`;

  for (let index = 0; index < 10; index++) {
    navLinksClasses[
      index
    ] = `${navLink.mainClass} ${navLink.slideInClass}-delay-${index}`;
  }

  return { navDrawerClasses, navLinksClasses };
};

/**
 * Returns CSS classes used to trigger the CSS animation
 * for the nav drawer close
 *
 * @returns {object} navDrawerClasses, navLinksClasses
 */
export const navDrawerTrickleClose = () => {
  let navLinksClasses = [];
  let navDrawerClasses = `${navDrawer.mainClass} ${navDrawer.upClass}`;

  for (let index = 0; index < 10; index++) {
    navLinksClasses[
      index
    ] = `${navLink.mainClass} ${navLink.slideInClass}-delay-${index}-reverse`;
  }
  return { navDrawerClasses, navLinksClasses };
};
