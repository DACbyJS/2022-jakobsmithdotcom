import classNames from 'classnames';

const WhiteBox = ({ children, className }) => (
  <div
    className={classNames(
      'relative z-10 w-full max-w-[900px] py-6 lg:py-10',
      className
    )}
  >
    {children}
  </div>
);

export default WhiteBox;
