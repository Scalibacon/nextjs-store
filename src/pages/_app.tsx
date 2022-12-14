import '../global/global.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ScaliLoja</title>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp;