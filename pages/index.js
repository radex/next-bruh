import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>bruh</h1>
      <button onClick={async () => {
        const res = await fetch('/api/hello')
        const json = await res.text()
        alert(json)
      }}>bruh?</button>
    </div>
  )
}
