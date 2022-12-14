import Header from './header'
import Footer from './footer'

export default function Layout({className: fromAppClasses, children }) {
  return (
    <div className={`${fromAppClasses} site-wrap`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}