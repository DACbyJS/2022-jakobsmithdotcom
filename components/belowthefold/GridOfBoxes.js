// Contexts
import { useTheme } from "../../lib/contexts/ThemeProvider";

// Libs
import classNames from "classnames";

// Components
import WhiteBlackBorderBox from "../layout/WhiteBlackBorderBox";
import BlackBox from "../layout/BlackBox";

// Animation
import NextIntersectionObserver from "../layout/NextIntersectionObserver";

/**
 * Grid of Boxes
 *
 * @param {Array} items
 * @returns
 */
const GridOfBoxes = ({ items }) => {
  // Set color
  const { theme } = useTheme();
  const textClassName = `text-js-${theme}`;

  // if items empty don't render
  if (items.length === 0) return null;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pad-inline-section py-12 sm:py-16 gap-8 sm:gap-12 font-js-math leading-[1.4] text-center text-[1.6ch] sm:text-[2ch] lg:text-[2.7ch] 2xl:text-[3.3ch]">
      {items?.map((item, index) => (
        <div key={item.id}>
          <NextIntersectionObserver
            thresholdValue={0.25}
            topIn="fade-down-animate"
            classes={classNames(
              "fade-down-init",
              `delay-${((index % 10) + 1) * 100}`
            )}

          >
            {index % 2 === 0 ? (
              <BlackBox
                className={classNames(
                  "p-8 md:p-12 lg:p-14",
                  item.special ? textClassName : "text-js-white"
                )}
              >
                {item.text}
              </BlackBox>
            ) : (
              <WhiteBlackBorderBox
                className={classNames(
                  "p-8 md:p-12 lg:p-14",
                  item.special ? textClassName : "text-js-black"
                )}
              >
                {item.text}
              </WhiteBlackBorderBox>
            )}
          </NextIntersectionObserver>
        </div>
      ))}
    </section>
  );
};

export default GridOfBoxes;
