import classNames from 'classnames';

const SvgRainbow = ({ className, svgProps }) => (
  <div
    className={classNames(
      'absolute z-0 left-0 sm:-top-[30vh] md:-top-[40vh] lg:-top-[50vh] w-[100vw] h-[300vh] bg-js-white',
      className
    )}
  >
    <svg
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 1920 2649"
      preserveAspectRatio="xMinYMin meet"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        fill="#5295CB"
        stroke="#121416"
        strokeWidth={20}
        d="M261.406 2707.56 44.288 2537.067l1743.686-2220.53L2005.09 487.03z"
      />
      <path
        fill="#FDCD49"
        stroke="#121416"
        strokeWidth={20}
        d="m57.3 2558.56-213-167.26L1592.123 165.502l213 167.26z"
      />
      <path
        fill="#FF4747"
        stroke="#121416"
        strokeWidth={20}
        d="m-133.03 2409.1-213-167.26L1401.794 16.042l213 167.26z"
      />
    </svg>
  </div>
);

export default SvgRainbow;
