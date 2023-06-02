import classNames from 'classnames';

const Main = ({ children, className }) => (
  <main className={classNames('relative z-10', className)}>{children}</main>
);

export default Main;