// Components
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

export default function Layout({ className: fromAppClasses, children }) {
  return (
    <div className={`${fromAppClasses} site-wrap overflow-hidden bg-js-black`}>
      <Header />
      <Main>
        <div className="flex flex-col bg-js-black">{children}</div>
      </Main>
      <Footer />
    </div>
  );
}
