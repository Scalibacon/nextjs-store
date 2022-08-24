import Header from "../../components/Header";
import styles from '../../styles/Product.module.scss';
import { FiShare2, FiHeart } from "react-icons/fi";
import StarRank from "../../components/StarRank";
import ImagesGallery from "../../components/ImagesGallery";
import BuyButton from "../../components/BuyButton";

const Product = () => {
  return (
    <div className={styles.productContainer}>
      <Header/>
      
      <section className={styles.infoContainer}>
        <header>
          <b>Você está em: </b> 
          <a>Categoria 1 {'>'}</a> 
          <span>Produto 1</span>
        </header>
        <h2>Samsung Smart TV 43´´ UHD 4K 43AU7700, Processador Crystal 4K, Tela sem limites, Alexa Built In, Controle Único - UN43AU7700GXZD</h2>

        <main>
          <section className={styles.imageSection}>
            <header>
              <span>MARCA</span>
              <span>
                <StarRank size={15} textBelow={false}/>
              </span>
              <span>
                <FiShare2 size={25}/>
                <FiHeart size={25}/>
              </span>
            </header>
            <ImagesGallery/>
          </section>

          <section className={styles.shoppingSection}>
            <p>
              Vendido e entregue por:
              <b> ScaliLoja </b> 
              | 
              <span className={styles.stock}><b> Em estoque</b></span>
            </p>
            <p className={styles.oldPrice}>R$ 4.399,00</p>
            <div className={styles.price}>
              <span>
                <p>R$ 2.299,99</p>
                <small>À vista ou no PIX</small>
              </span>
              <BuyButton/>
            </div>
          </section>
        </main>
      </section>
    </div>
  )
}

export default Product;