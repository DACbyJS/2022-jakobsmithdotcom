import classNames from "classnames";

const DisclaimerBox = ({ children, className }) => (
  <div
    className={classNames(
      "border-[10px] border-js-black font-js-math w-full max-w-[500px] mx-auto text-center p-8",
      className
    )}
  >
    {children}
  </div>
);

export default DisclaimerBox;
