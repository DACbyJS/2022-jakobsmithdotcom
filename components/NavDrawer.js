// Next
import Link from 'next/link';

export default function NavDrawer({ isActive }) {
  /* Nav Drawer */
  const navDrawerMainClass = 'overlay-navigation';
  const navDrawerActiveClass = 'overlay-active';
  const navDrawerUpClass = 'overlay-slide-up';
  const navDrawerDownClass = 'overlay-slide-down';
  let navDrawerClasses = '';

  /* Nav Links */
  const navLinkMainClass = 'nav-link';
  const navLinkSlideIn = 'slide-in-nav-item';
  let navLinksClasses = [];

  if (isActive) {
    navDrawerClasses = `${navDrawerMainClass} ${navDrawerActiveClass} ${navDrawerDownClass}`;
    for (let index = 0; index < 7; index++) {
      navLinksClasses[
        index
      ] = `${navLinkMainClass} ${navLinkSlideIn}-delay-${index}`;
    }
  } else {
    navDrawerClasses = `${navDrawerMainClass} ${navDrawerUpClass}`;
    for (let index = 0; index < 7; index++) {
      navLinksClasses[
        index
      ] = `${navLinkMainClass} ${navLinkSlideIn}-delay-${index}-reverse`;
    }
  }

  return (
    <div className={navDrawerClasses}>
      <nav role="navigation">
        <ul>
          <li className={navLinksClasses[0]}>
            <Link href="#" data-content="the page with the rainbow">
              Home
            </Link>
          </li>
          <li className={navLinksClasses[1]}>
            <Link href="#" data-content="for those keyboard shortcut lovers">
              Website Designers
            </Link>
          </li>
          <li className={navLinksClasses[2]}>
            <Link href="#" data-content="for those b2b/b2c startups">
              Agencies
            </Link>
          </li>
          <li className={navLinksClasses[3]}>
            <Link href="#" data-content="for those who kindly break even">
              Beneficial Business
            </Link>
          </li>
          <li className={navLinksClasses[4]}>
            <Link href="#" data-content="the page with all the examples">
              Portfolio
            </Link>
          </li>
          <li className={navLinksClasses[5]}>
            <Link
              href="#"
              data-content="the page about the creator of this site"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
