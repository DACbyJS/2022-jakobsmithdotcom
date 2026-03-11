import classNames from 'classnames';

const BelowTheFold = ({ children, className }) => (
  <section className={classNames('relative z-0 bg-js-white pad-inline-section', className)}>
    {children}
  </section>
);

export default BelowTheFold;
