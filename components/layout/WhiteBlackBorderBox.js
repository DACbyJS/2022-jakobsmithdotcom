import classNames from 'classnames';

const WhiteBlackBorderBox = ({ children, className }) => (
  <div
    className={classNames(
      'white-black-border relative z-10 w-full py-6 lg:py-10',
      className
    )}
  >
    {children}
  </div>
);

export default WhiteBlackBorderBox;
