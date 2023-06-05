// Next
import Link from 'next/link';

// Lib
import { uid } from 'uid';

// Animations
import {
  navDrawerTrickleOpen,
  navDrawerTrickleClose,
} from '../../lib/animations/navDrawerTrickle';

// Constants
import { pageData } from '../../lib/constants';

export default function NavDrawer({ isActive, handleLinkItemClick }) {
  let navDrawerClasses = '';
  let navLinksClasses = [];

  if (isActive) {
    ({ navDrawerClasses, navLinksClasses } = navDrawerTrickleOpen());
  } else {
    ({ navDrawerClasses, navLinksClasses } = navDrawerTrickleClose());
  }

  return (
    <div className={navDrawerClasses}>
      <nav role="navigation">
        <ul>
          {pageData.map((navItem, index) => {
            return (
              <li key={uid(index)} className={navLinksClasses[index]}>
                <Link
                  onClick={handleLinkItemClick}
                  href={navItem?.data?.href}
                  data-content={navItem?.data?.dataContent}
                >
                  {navItem?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
