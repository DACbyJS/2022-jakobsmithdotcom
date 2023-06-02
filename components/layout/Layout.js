import Header from './Header';
import Footer from './Footer';
import LoadingWrapper from './LoadingWrapper';
import Main from './Main';

export default function Layout({ className: fromAppClasses, children }) {
  return (
    <div className={`${fromAppClasses} site-wrap overflow-hidden`}>
      <Header />
      <LoadingWrapper>
        <Main>{children}</Main>
      </LoadingWrapper>
      <Footer />
    </div>
  );
}
