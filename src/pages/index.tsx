import { NextPage } from "next";
import Head from "next/head";
import { IoMdStopwatch } from "react-icons/io";
import { BsFillLightningChargeFill, BsFillStarFill } from "react-icons/bs";
import { AiOutlineAim } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import styles from '../styles/Home.module.scss';
import ProductList from "../components/ProductList";
import Image1 from '../assets/images/1.jpg';
import Image2 from '../assets/images/2.jpg';
import Image from "next/image";

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

        <a className={styles.seeMore}>
          VER TODOS
          <MdKeyboardArrowRight size={23}/>
        </a>  

        <section className={styles.imagesContainer}>
          <div>
            <Image
              src={Image1}
              layout="responsive"
            />
          </div>

          <div>
            <Image
              src={Image2}
              layout="responsive"
            />
          </div>
        </section>

        <div className={styles.sectionTitle}>
          <BsFillStarFill size={20}/>
          <span>DESTAQUES</span>   
          <a className={`${styles.seeMore} ${styles.insideTitle}`}>
            VER TODOS
            <MdKeyboardArrowRight size={23}/>
          </a>       
        </div>

        <div className={styles.row}>
          <ProductList />
        </div> 

        <div className={styles.sectionTitle}>
          <AiOutlineAim size={20}/>
          <span>MAIS PROCURADOS</span>   
          <a className={`${styles.seeMore} ${styles.insideTitle}`}>
            VER TODOS
            <MdKeyboardArrowRight size={23}/>
          </a>       
        </div>

        <div className={styles.row}>
          <ProductList />
        </div>
             
      </main>
    </div>  
  )
}

export default Home;