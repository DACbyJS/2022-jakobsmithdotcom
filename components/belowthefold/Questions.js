// React
import React, { useState } from 'react';

// Next
import Link from 'next/link';

// Third-Party
import classNames from 'classnames';

// Contexts
import { useTheme } from '../../lib/contexts/ThemeProvider';

// Effects
import useWindowSize from '../../lib/hooks/useWindowSize';

const Questions = ({ items }) => {
  // Set color
  const { theme, changeTheme } = useTheme();
  const themeClassName = `theme-${theme}`;

  const [selectedItem, setSelectedItem] = useState(null);
  const size = useWindowSize();

  const handleQuestionHover = (id) => {
    setSelectedItem(id);
  };

  const handleMouseLeave = () => {
    //setSelectedItem(null);
  };

  const handleTap = (id) => {
    if (size.width > 1024) {
      return;
    }
    setSelectedItem(id);
  };

  return (
    <div
      id="single-page-questions"
      className="flex flex-row mt-10 mx-10 font-light"
    >
      <div className="flex flex-col flex-1 space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col lg:flex-row">
            <Link
              href="#single-page-questions"
              className={classNames('questions-link', {
                'question-left': i % 2 === 0,
                'question-right': i % 2 !== 0,
              })}
              onMouseEnter={() => handleQuestionHover(item.id)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleTap(item.id)}
            >
              {item.q}
            </Link>
            <Link
              href={item.href ?? '#single-page-questions'}
              className={classNames('questions-link', {
                'question-right': i % 2 === 0,
                'question-left': i % 2 !== 0,
                'question-hover': selectedItem === item.id,
                'before-question-hover': selectedItem !== item.id,
                [themeClassName]: themeClassName !== null,
              })}
            >
              {item.a}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
