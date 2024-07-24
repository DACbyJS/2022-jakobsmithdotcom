import classNames from 'classnames';

const BlackBox = ({ children, className }) => (
  <div
    className={classNames(
      'just-black-border relative w-full',
      className
    )}
  >
    {children}
  </div>
);

export default BlackBox;