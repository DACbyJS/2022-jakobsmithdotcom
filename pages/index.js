// Next
import Head from 'next/head'

// Custom
import Hero from '../components/Hero'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jakob Smith | Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.container}>
        <Hero/>
      </div>
    </>

  )
}
