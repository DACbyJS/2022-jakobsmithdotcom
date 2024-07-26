import classNames from 'classnames';

const Spacer = ({ children, className }) => (
  <aside
    className={classNames(
      'spacer p-10 sm:py-14 lg:py-16 xl:py-20 2xl:py-24',
      className
    )}
  >
    {children}
  </aside>
);

export default Spacer;
