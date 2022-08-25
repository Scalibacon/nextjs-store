import Header from "../../components/Header";
import styles from '../../styles/Product.module.scss';
import { FiShare2, FiHeart } from "react-icons/fi";
import { TbDiscount2 } from 'react-icons/tb';
import { IoMdStopwatch } from "react-icons/io";
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
            <div className={styles.discountContainer}>
              <span>
                <p><TbDiscount2 size={35}/></p>
                <b>25% OFF</b>
              </span>

              <span>
                <p><IoMdStopwatch size={35}/></p>
                <b>21D 12:50:37</b>
              </span>
            </div>

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
            <p>Em até 10x de <b>R$ 229,99</b> sem juros no cartão</p>
            <p className={styles.paymentPolicy}><a>Ver nossa Política de Pagamento</a></p>

            <div className={styles.consultZipCode}>
              <h3>Consultar frete e prazo de entrega</h3>
              <form>
                <input type="text" placeholder="Digite seu CEP"></input>
                <button type="submit">OK</button>
              </form>
            </div>

            <BuyButton className={styles.buyButtonMobile} iconSize={25}/>
          </section>
        </main>
      </section>
    </div>
  )
}

export default Product;