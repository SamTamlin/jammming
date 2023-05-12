import Head from 'next/head'
import { Inter } from 'next/font/google'
import App from '../Components/App/App'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jammming</title>
        <meta name="description" content="Search for tracks on Spotify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <App />
      </main>
    </>
  )
}
