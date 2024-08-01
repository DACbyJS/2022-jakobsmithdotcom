import classNames from 'classnames';

const TransBox = ({ children, className }) => (
  <div
    className={classNames(
      'relative z-10 w-full max-w-[900px] bg-transparent',
      className
    )}
  >
    {children}
  </div>
);

export default TransBox;
