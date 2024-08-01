// React
import React, { useState } from 'react';

// Contexts
import { useTheme } from '../../lib/contexts/ThemeProvider';

// Components
import WhiteBlackBorderBox from '../layout/WhiteBlackBorderBox';
import BlackBox from '../layout/BlackBox';

// Animation
import NextIntersectionObserver from '../layout/NextIntersectionObserver';

/**
 * Two Column Line Items
 * 
 * @param {Array} items
 * @returns 
 */
const TwoColumnLineItems = ({ items }) => {
  // Set color
  const { theme, changeTheme } = useTheme();
  const themeClassName = `theme-${theme}`;
  const textClassName = `text-js-${theme}`;

  return (
    <div className="two-column-line-items">
    <NextIntersectionObserver
      thresholdValue={0.25}
      topIn="fade-down-animate"
      classes="fade-down-init relative z-20 w-full max-w-[700px]"
    >
      <WhiteBlackBorderBox className="mx-auto py-6 md:py-10 lg:py-12 z-10">
        <h2 className="font-js-math text-center text-[3.25ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch]">
          They Need:
        </h2>
        <ul className="p-0 flex flex-col justify-center items-center my-6 sm:my-10 mx-6 sm:mx-10 space-y-10 md:space-y-12 font-light">
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">
              Their Mockups translated
            </strong>{' '}
            Into a Website with Care and Attention.
          </li>
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">
              Someone who can handle
            </strong>{' '}
            Domains, Servers, Migrations,{' '}
            <strong className="text-js-red font-light">Data</strong>, SEO
            and Accessibility.
          </li>
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">
              To Communicate
            </strong>{' '}
            about design, aesthetic and feeling like its important.
          </li>
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">
              Someone Willing to
            </strong>{' '}
            do the quantity of{' '}
            <strong className="text-js-red font-light">work</strong> to
            get to quality.
          </li>
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">
              Someone who can help
            </strong>{' '}
            project manage and communicate{' '}
            <strong className="text-js-red font-light">
              with the client
            </strong>
            .
          </li>
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">To align</strong>{' '}
            their resources with their client{"'"}s budget and Their Own
            Profit Margin.
          </li>
        </ul>
      </WhiteBlackBorderBox>
    </NextIntersectionObserver>

    <NextIntersectionObserver
      thresholdValue={0.1}
      classes="fade-right-init animate-delay-1s relative z-10 w-full max-w-[700px]"
      topIn="fade-right-animate"
    >
      <BlackBox className="mx-auto py-6 md:py-10 lg:py-12">
        <h2 className="text-js-white font-js-math text-center text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch]">
          I Give:
        </h2>
        <ul className="p-0 flex flex-col my-10 mx-10 space-y-12 font-light">
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">
              Websites identical to the mockups
            </strong>
          </li>
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">
              Designs that come alive and perform
            </strong>
          </li>
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">
              Clear Communication
            </strong>
          </li>
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">
              Unlimited Revisions
            </strong>
          </li>
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">
              Calls and emails with your client
            </strong>
          </li>
          <li className="two-column-line-item">
            <strong className="text-js-red font-light">Alignment and Flexibility</strong>
          </li>
        </ul>
      </BlackBox>
    </NextIntersectionObserver>
  </div>
  );
};

export default TwoColumnLineItems;
