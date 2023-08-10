import classNames from 'classnames';

const BigRedTriangle = ({ className, svgProps }) => (
  <div className={classNames('absolute -left-[20%] top-[15%] 2xl:w-[100vw]', className)}>
    <svg
      width="2749"
      height="2342"
      viewBox="0 0 2749 2342"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2727.69 12.8673L1085.77 2323.05L16.6244 324.482L2727.69 12.8673Z"
        fill="#FF4747"
        stroke="#121416"
        strokeWidth="20"
      />
    </svg>
  </div>
);

export default BigRedTriangle;
