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
  const { theme, changeTheme } = useTheme();
  const textClassName = `text-js-${theme}`;

  // if items empty don't render
  if (items.length === 0) return null;

  // Create a random number between 100 and 1000 that is always divisible by 100
  const randomDelay = () => Math.floor(Math.random() * 10 + 1) * 100;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10 gap-6 sm:gap-10 font-js-math leading-[1.4] text-center text-[1.6ch] sm:text-[2.1ch] lg:text-[3ch] 2xl:text-[3.5ch]">
      {items?.map((item, index) => (
        <div key={item.id}>
          <NextIntersectionObserver
            thresholdValue={0.25}
            topIn="fade-down-animate"
            classes={classNames(
              "fade-down-init",
              `delay-${randomDelay()}`
            )}

          >
            {index % 2 === 0 ? (
              <BlackBox
                className={classNames(
                  "p-6 md:p-12",
                  item.special ? textClassName : "text-js-white"
                )}
              >
                {item.text}
              </BlackBox>
            ) : (
              <WhiteBlackBorderBox
                className={classNames(
                  "p-6 md:p-12",
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
