// Next
import Link from 'next/link';

// Lib
import { uid } from 'uid';

// Animations
import {
  navDrawerTrickleOpen,
  navDrawerTrickleClose,
} from '../../lib/animations/navDrawerTrickle';

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
      title: 'Web Designers',
      href: '#',
      dataContent: 'for those keyboard shortcut lovers',
    },
    {
      title: 'Creatives & Artists',
      href: '#',
      dataContent: 'for those who hone their senses to inspire',
    },
    {
      title: 'Beneficial Business',
      href: '#',
      dataContent: 'for those who kindly break even and take turns',
    },
    {
      title: 'Portfolio',
      href: '#',
      dataContent: 'examples of my skillsets',
    },
    {
      title: 'About',
      href: '#',
      dataContent: 'a little about me',
    },
    {
      title: 'Contact',
      href: '#',
      dataContent: 'get a hold of my attention',
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
