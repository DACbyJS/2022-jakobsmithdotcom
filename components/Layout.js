import Header from './Header';
import Footer from './Footer';
import Hero from '../components/Hero';
import SvgRainbow from './SvgRainbow';

export default function Layout({ className: fromAppClasses, children }) {
  return (
    <div className={`${fromAppClasses} site-wrap overflow-hidden`}>
      <Header />
      <Hero />
      <main className="relative z-0">
        <SvgRainbow />
        {children}
      </main>
      <Footer />
    </div>
  );
}
