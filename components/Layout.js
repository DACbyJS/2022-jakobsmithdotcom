import Header from './Header'
import Footer from './Footer'

export default function Layout({className: fromAppClasses, children }) {
  return (
    <div className={`${fromAppClasses} site-wrap`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}