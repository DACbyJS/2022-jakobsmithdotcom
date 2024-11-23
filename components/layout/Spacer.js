import classNames from 'classnames';

const Spacer = ({ children, className }) => (
  <aside
    className={classNames(
      'zero:py-6 sm:py-12 lg:py-14 xl:py-16 2xl:py-20',
      className
    )}
  >
    {children}
  </aside>
);

export default Spacer;
