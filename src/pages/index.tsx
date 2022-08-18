import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ScaliLoja</title>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>

      <Header/>
      Homepage com NextJS
    </div>  
  )
}

export default Home;