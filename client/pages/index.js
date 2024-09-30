import Head from 'next/head'
import { PropertyHighlighter } from '../components'
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>SellCRE Backend</title>
        <meta name="description" content="Property Highlight Viewer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <PropertyHighlighter />
    </div>
  )
}
