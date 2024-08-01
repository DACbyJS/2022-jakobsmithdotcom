import classNames from 'classnames';

const WhiteBlackBorderBox = ({ children, className }) => (
  <div
    className={classNames(
      'white-black-border relative w-full',
      className
    )}
  >
    {children}
  </div>
);

export default WhiteBlackBorderBox;
