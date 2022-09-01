import Header from "../../components/Header";
import styles from '../../styles/Product.module.scss';
import { FiShare2, FiHeart } from "react-icons/fi";
import { TbDiscount2 } from 'react-icons/tb';
import { IoMdStopwatch } from "react-icons/io";
import { VscBook } from 'react-icons/vsc';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import StarRank from "../../components/StarRank";
import ImagesGallery from "../../components/ImagesGallery";
import BuyButton from "../../components/BuyButton";
import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Product from "../../types/Product";
import MOCKED_PRODUCTS from '../../utils/MOCKED_PRODUCTS.json';

type ProductProps = {
  product: Product
}

const Product: NextPage<ProductProps> = ({
  product
}: ProductProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true);

  const router = useRouter();

  function toggleDescriptionExpand() {
    setIsDescriptionExpanded(prev => !prev);
  }

  if (router.isFallback) {
    return (
      <div style={{ color: 'white' }}>Tá carregando...</div>
    )
  }

  if (!product) {
    return (
      <div style={{ color: 'deepskyblue' }}>Produto não encontrado!</div>
    )
  }

  return (
    <div className={styles.productContainer}>
      <Header />

      <section className={styles.infoContainer}>
        <header>
          <b>Você está em: </b>
          <a>{`${product.category.name} >`}</a>
          <span>Código: {product.id}</span>
        </header>
        <h2>{product.name}</h2>

        <main>
          <section className={styles.imageSection}>
            <header>
              <span>MARCA</span>
              <span>
                <StarRank size={15} textBelow={false} />
              </span>
              <span>
                <FiShare2 size={25} />
                <FiHeart size={25} />
              </span>
            </header>
            <ImagesGallery images={product.pictures} />
          </section>

          <section className={styles.shoppingSection}>
            <div className={styles.discountContainer}>
              <span>
                <p><TbDiscount2 size={35} /></p>
                <b>25% OFF</b>
              </span>

              <span>
                <p><IoMdStopwatch size={35} /></p>
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
                <p>{product.price.toLocaleString('pt-br', { style: 'currency', 'currency': 'BRL' })}</p>
                <small>À vista ou no PIX</small>
              </span>
              <BuyButton />
            </div>
            <p>
              Em até 10x de
              <b> {(product.price / 10).toLocaleString('pt-br', { style: 'currency', 'currency': 'BRL' })} </b>
              sem juros no cartão
            </p>
            <p className={styles.paymentPolicy}><a>Ver nossa Política de Pagamento</a></p>

            <div className={styles.consultZipCode}>
              <h3>Consultar frete e prazo de entrega</h3>
              <form>
                <input type="text" placeholder="Digite seu CEP"></input>
                <button type="submit">OK</button>
              </form>
            </div>

            <BuyButton className={styles.buyButtonMobile} iconSize={25} />
          </section>
        </main>
      </section>

      <section className={styles.descriptionContainer}>
        <header onClick={toggleDescriptionExpand}>
          <VscBook size={27} />
          <h2>DESCRIÇÃO DO PRODUTO</h2>
          <MdOutlineArrowForwardIos
            size={20}
            className={`${styles.arrow} ${isDescriptionExpanded ? styles.expand : ''}`} />
        </header>

        <main
          className={isDescriptionExpanded ? styles.expand : ''}
          dangerouslySetInnerHTML={{ __html: product.description }}
        >
        </main>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const product = MOCKED_PRODUCTS.find(product => product.id === id);

  return {
    props: {
      product: product || null
    },
    revalidate: 60 * 5
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {

  return {
    paths: [{
      params: {
        id: '1'
      }
    }],
    fallback: true
  }
}

export default Product;