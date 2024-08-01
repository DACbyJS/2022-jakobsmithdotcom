import classNames from 'classnames';

const BelowTheFold = ({ children, className }) => (
  <section className={classNames('relative z-0 bg-js-white px-3 sm:px-4 md:px-6 lg:px-8', className)}>
    {children}
  </section>
);

export default BelowTheFold;
