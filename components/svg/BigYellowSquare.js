import classNames from "classnames";
import NextIntersectionObserver from "../layout/NextIntersectionObserver";

const BigYellowSquare = ({ className, svgProps }) => (
  <NextIntersectionObserver
    thresholdValue={1}
    classes="big-yellow-square-animate-init h-full relative"
    topIn="big-yellow-square-grow-in"
  >
    <div
      className={classNames(
        "absolute z-0 big-yellow-square",
        className
      )}
    >
      <svg
        className="big-yellow-square-svg"
        width="1887"
        height="1886"
        viewBox="0 0 1887 1886"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        {...svgProps}
      >
        <rect
          className="big-yellow-square-rect"
          x="943.387"
          y="14.1421"
          width="1313.17"
          height="1313.17"
          transform="rotate(45 943.387 14.1421)"
          fill="#FFCB47"
          stroke="#121416"
          strokeWidth="20"
        />
      </svg>
    </div>
  </NextIntersectionObserver>
);

export default BigYellowSquare;
