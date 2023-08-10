import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

const Questions = ({ leftColumnItems, rightColumnItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleQuestionHover = (id) => {
    setSelectedItem(id);
  };

  const handleMouseLeave = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-row mt-10 mx-10 space-x-3 font-light">
      <div className="flex flex-col justify-center items-center flex-1 space-y-2">
        {leftColumnItems.map((element, index) => (
          <Link
            key={index}
            href={element.href ?? '#'}
            className={classNames(
              'text-right w-full font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] transition-colors cursor-pointer',
              {
                'text-js-black':
                  selectedItem === element.id && element.type === 'q',
                'text-js-black':
                  selectedItem !== element.id && element.type === 'q',
                'text-js-red':
                  selectedItem === element.id && element.type === 'a',
                'text-js-white':
                  selectedItem !== element.id && element.type === 'a',
              }
            )}
            onMouseEnter={() => handleQuestionHover(element.id)}
            onMouseLeave={handleMouseLeave}
          >
            {element.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center flex-1 space-y-2">
        {rightColumnItems.map((element, index) => (
          <Link
            key={index}
            href={element.href ?? '#'}
            className={classNames(
              'text-left w-full font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] transition-colors cursor-pointer',
              {
                'text-js-black':
                  selectedItem === element.id && element.type === 'q',
                'text-js-black':
                  selectedItem !== element.id && element.type === 'q',
                'text-js-red':
                  selectedItem === element.id && element.type === 'a',
                'text-js-white':
                  selectedItem !== element.id && element.type === 'a',
              }
            )}
            onMouseEnter={() => handleQuestionHover(element.id)}
            onMouseLeave={handleMouseLeave}
          >
            {element.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Questions;
