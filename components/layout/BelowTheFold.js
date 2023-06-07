import classNames from 'classnames';

const BelowTheFold = ({ children, className }) => (
  <section className={classNames('relative z-0 bg-js-white pb-40', className)}>
    {children}
  </section>
);

export default BelowTheFold;
