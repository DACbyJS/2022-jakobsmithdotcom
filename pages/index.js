import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/navigation'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.container}>
       <h1 className='font-js-math'> Home Page Header</h1>
      </div>
    </>

  )
}
