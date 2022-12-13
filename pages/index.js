import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jakob Smith | Digital Marketing Developer</title>
        <meta name="description" content="Jakob Smith | Digital Marketing Developer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/js-math-cmti.woff2" as="font" type="font/woff2" crossorigin/>
        <link rel="preload" href="/fonts/js-math-cmti.woff" as="font" type="font/woff" crossorigin/>
      </Head>

      <main className={styles.main}>
        <h1>Hello</h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
