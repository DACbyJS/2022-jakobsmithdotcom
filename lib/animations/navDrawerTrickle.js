import {
  navDrawerMainClass,
  navDrawerActiveClass,
  navDrawerUpClass,
  navDrawerDownClass,
  navLinkMainClass,
  navLinkSlideIn,
} from '../constants';

export const navDrawerTrickleOpen = () => {
  let navLinksClasses = [];
  let navDrawerClasses = `${navDrawerMainClass} ${navDrawerActiveClass} ${navDrawerDownClass}`;

  for (let index = 0; index < 7; index++) {
    navLinksClasses[
      index
    ] = `${navLinkMainClass} ${navLinkSlideIn}-delay-${index}`;
  }

  return { navDrawerClasses, navLinksClasses };
};

export const navDrawerTrickleClose = () => {
  let navLinksClasses = [];
  let navDrawerClasses = `${navDrawerMainClass} ${navDrawerUpClass}`;
  
  for (let index = 0; index < 7; index++) {
    navLinksClasses[
      index
    ] = `${navLinkMainClass} ${navLinkSlideIn}-delay-${index}-reverse`;
  }
  return { navDrawerClasses, navLinksClasses };
};
