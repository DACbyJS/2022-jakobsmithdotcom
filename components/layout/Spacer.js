import classNames from 'classnames';

const Spacer = ({ children, className }) => (
  <aside
    className={classNames(
      'spacer p-10 sm:py-14 lg:py-20 xl:py-24 2xl:py-28',
      className
    )}
  >
    {children}
  </aside>
);

export default Spacer;
