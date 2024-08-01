import classNames from 'classnames';
import NextIntersectionObserver from '../layout/NextIntersectionObserver';

const BigRedTriangle = ({ className, svgProps }) => (
  <NextIntersectionObserver
    thresholdValue={1}
    classes="big-red-triangle-animate-init h-full relative"
    topIn="big-red-triangle-rotate-in"
  >
    <div
      className={classNames(
        'absolute z-0 big-red-triangle',
        className
      )}
    >
      <svg
        className="big-red-triangle-svg"
        width="2749"
        height="2342"
        viewBox="0 0 2749 2342"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        {...svgProps}
      >
        <path
          className="big-red-triangle-path"
          d="M2727.69 12.8673L1085.77 2323.05L16.6244 324.482L2727.69 12.8673Z"
          fill="#FF4747"
          stroke="#121416"
          strokeWidth="20"
        />
      </svg>
    </div>
  </NextIntersectionObserver>
);

export default BigRedTriangle;
