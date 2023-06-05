import classNames from 'classnames';

const Main = ({ children, className }) => (
  <main className={classNames('relative z-10 pb-40 bg-js-white', className)}>{children}</main>
);

export default Main;