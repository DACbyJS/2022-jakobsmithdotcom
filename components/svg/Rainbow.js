import classNames from 'classnames';
import NextIntersectionObserver from '../layout/NextIntersectionObserver';

const SvgRainbow = ({ className, svgProps }) => (
  <NextIntersectionObserver
    thresholdValue={1}
    classes={`rainbow-animate-init`}
    topIn="rainbow-flow-in"
  >
    <div
      className={classNames(
        'absolute z-0 bg-js-white responsive-rainbow',
        className
      )}
    >
      <svg
        className="responsive-rainbow-svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 1920 2649"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
      >
        <path
          className="responsive-rainbow-path-blue"
          fill="#5295CB"
          stroke="#121416"
          strokeWidth={20}
          d="M261.406 2707.56 44.288 2537.067l1743.686-2220.53L2005.09 487.03z"
        />
        <path
          className="responsive-rainbow-path-yellow"
          fill="#FDCD49"
          stroke="#121416"
          strokeWidth={20}
          d="m57.3 2558.56-213-167.26L1592.123 165.502l213 167.26z"
        />
        <path
          className="responsive-rainbow-path-red"
          fill="#FF4747"
          stroke="#121416"
          strokeWidth={20}
          d="m-133.03 2409.1-213-167.26L1401.794 16.042l213 167.26z"
        />
      </svg>
    </div>
  </NextIntersectionObserver>
);

export default SvgRainbow;
