import classNames from 'classnames';

const Spacer = ({ children, className }) => (
  <aside
    className={classNames(
      'py-8 sm:py-14 lg:py-20 xl:py-24 2xl:py-28',
      className
    )}
  >
    {children}
  </aside>
);

export default Spacer;
