// React
import React, { useState } from "react";

// Libs 
import classNames from "classnames";

// Contexts
import { useTheme } from "../../lib/contexts/ThemeProvider";

// Components
import WhiteBlackBorderBox from "../layout/WhiteBlackBorderBox";
import BlackBox from "../layout/BlackBox";

// Animation
import NextIntersectionObserver from "../layout/NextIntersectionObserver";

/**
 * Two Column Line Items
 *
 * @param {Array} items
 * @returns
 */
const TwoColumnLineItems = ({ items }) => {
  // Set color
  const { theme, changeTheme } = useTheme();
  const textClassName = `text-js-${theme}`;

  // if items empty don't render
  if (items.length === 0) return null;

  // Split items
  const leftItems = items?.left;
  const rightItems = items?.right;

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
            {leftItems?.map((item) => (
              <li key={item.id} className="two-column-line-item">
                {item.html}
              </li>
            ))}
          </ul>
        </WhiteBlackBorderBox>
      </NextIntersectionObserver>

      <NextIntersectionObserver
        thresholdValue={0.1}
        classes="animate-init fade-right-init animate-delay-1s relative z-10 w-full max-w-[700px]"
        topIn="fade-right-animate"
      >
        <BlackBox className="mx-auto py-6 md:py-10 lg:py-12">
          <h2 className="text-js-white font-js-math text-center text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch]">
            I Give:
          </h2>
          <ul className="p-0 flex flex-col my-10 mx-10 space-y-12 font-light">
            {rightItems?.map((item) => (
              <li key={item.id} className={classNames("two-column-line-item", textClassName)}>
                {item.html}
              </li>
            ))}
          </ul>
        </BlackBox>
      </NextIntersectionObserver>
    </div>
  );
};

export default TwoColumnLineItems;
