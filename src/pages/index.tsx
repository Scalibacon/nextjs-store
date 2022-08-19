import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ScaliLoja</title>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>

      <Header/>
      <SlideShow/>
      Homepage com NextJS
    </div>  
  )
}

export default Home;