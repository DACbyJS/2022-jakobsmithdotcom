import classNames from 'classnames';

const BelowTheFold = ({ children, className }) => (
  <div className={classNames('relative z-0', className)}>{children}</div>
);

export default BelowTheFold;