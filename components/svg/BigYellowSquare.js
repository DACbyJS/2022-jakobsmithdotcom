import classNames from 'classnames';

const BigYellowSquare = ({ className, svgProps }) => (
  <div
    className={classNames(
      'absolute -left-[20%] top-[15%] 2xl:w-[100vw]',
      className
    )}
  >
    <svg
      width="1887"
      height="1886"
      viewBox="0 0 1887 1886"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
    >
      <rect
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
);

export default BigYellowSquare;
