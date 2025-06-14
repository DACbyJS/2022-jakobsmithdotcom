import classNames from "classnames";
import NextIntersectionObserver from "../layout/NextIntersectionObserver";

const BigBlueCircle = ({ className, svgProps }) => (
  <NextIntersectionObserver
    thresholdValue={.5}
    classes="big-blue-circle-animate-init h-full relative"
    topIn="big-blue-circle-grow-in"
  >
    <div className={classNames("absolute z-0 big-blue-circle", className)}>
      <svg
        className="big-blue-circle-svg"
        width="1910"
        height="1912"
        viewBox="0 0 1910 1912"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
      >
        <path
          className="big-blue-circle-path"
          d="M955 10C1476.9 10 1900 433.529 1900 956C1900 1478.47 1476.9 1902 955 1902C433.101 1902 10 1478.47 10 956C10 433.529 433.101 10 955 10Z"
          fill="#5295CB"
          stroke="#121416"
          strokeWidth="20"
        />
      </svg>
    </div>
  </NextIntersectionObserver>
);

export default BigBlueCircle;
