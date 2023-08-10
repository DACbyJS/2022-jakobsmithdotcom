import classNames from 'classnames';

const BlackBox = ({ children, className }) => (
  <div
    className={classNames(
      'just-black-border relative z-10 w-full max-w-[900px] py-6 lg:py-10',
      className
    )}
  >
    {children}
  </div>
);

export default BlackBox;