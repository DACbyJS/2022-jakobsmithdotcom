// Next
import Link from 'next/link';

// Lib
import { uid } from 'uid';

// Animations
import {
  navDrawerTrickleOpen,
  navDrawerTrickleClose,
} from '../lib/animations/navDrawerTrickle';

export default function NavDrawer({ isActive }) {
  let navDrawerClasses = '';
  let navLinksClasses = [];
  const navigationContent = [
    {
      title: 'Home',
      href: '#',
      dataContent: 'the page with the rainbow',
    },
    {
      title: 'Website Designers',
      href: '#',
      dataContent: 'for those keyboard shortcut lovers',
    },
    {
      title: 'Website Developers',
      href: '#',
      dataContent: 'for those b2b/b2c startups',
    },
    {
      title: 'Agencies',
      href: '#',
      dataContent: 'for those who want to be a part of the team',
    },
    {
      title: 'Beneficial Business',
      href: '#',
      dataContent: 'for those who kindly take turns',
    },
    {
      title: 'Portfolio',
      href: '#',
      dataContent: 'examples of my skillsets',
    },
  ];

  if (isActive) {
    ({ navDrawerClasses, navLinksClasses } = navDrawerTrickleOpen());
  } else {
    ({ navDrawerClasses, navLinksClasses } = navDrawerTrickleClose());
  }

  return (
    <div className={navDrawerClasses}>
      <nav role="navigation">
        <ul>
          {navigationContent.map((navItem, index) => {
            return (
              <li key={uid(index)} className={navLinksClasses[index]}>
                <Link href={navItem?.href} data-content={navItem?.dataContent}>
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
