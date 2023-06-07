import classNames from 'classnames';

const Main = ({ children, className }) => (
  <main className={classNames('relative z-10 bg-js-black', className)}>{children}</main>
);

export default Main;