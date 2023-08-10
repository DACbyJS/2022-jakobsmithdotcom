import classNames from 'classnames';

const BelowTheFold = ({ children, className }) => (
  <section className={classNames('relative z-0 bg-js-white p-10 sm:py-20 lg:py-28 xl:py-36 2xl:py-40', className)}>
    {children}
  </section>
);

export default BelowTheFold;
