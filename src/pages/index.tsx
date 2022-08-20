import { NextPage } from "next";
import Head from "next/head";
import { IoMdStopwatch } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import styles from '../styles/Home.module.scss';
import ProductList from "../components/ProductList";

const Home: NextPage = () => {
  return (
    <div className={styles.homeWrapper}>
      <Head>
        <title>ScaliLoja</title>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>

      <Header/>

      <SlideShow/>

      <main className={styles.contentContainer}>
        <header>
          <span>
            <BsFillLightningChargeFill size="23"/>
            OFERTAS RELÂMPAGO
          </span>
          <span>
            <small>TERMINA EM:</small>
            <p>
              <IoMdStopwatch size="23"/>
              11D 12:50:37
            </p>
          </span>
        </header>

        <div className={styles.row}>
          <ProductList />
        </div>        
      </main>
    </div>  
  )
}

export default Home;