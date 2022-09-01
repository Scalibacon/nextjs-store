import styles from './ProductCard.module.scss';
import Link from 'next/link';
import StarRank from '../StarRank';
import BuyButton from '../BuyButton';
import Product from '../../types/Product';

type ProductCardProps = {
  product: Product
  isInsideSlicker?: boolean
}

const ProductCard = ({ product, isInsideSlicker }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <a className={`${styles.productCard} ${isInsideSlicker ? styles.isInsideSlicker : ''}`}>
        <header>
          <span className={styles.discount}>
            <p>26%</p>
            <svg width="16" viewBox="0 0 16 8">
              <path d="M0 -3.65575e-06L16 0L8 8L0 -3.65575e-06Z" fill="#fff"></path>
            </svg>
          </span>
          <span className={styles.remaining}>
            <small>RESTAM</small>
            <b>{product.inventory}</b>
            <small>UNID.</small>
          </span>
          <span className={styles.rating}>
            <StarRank />
          </span>
        </header>

        <main className={styles.main}>
          <div className={styles.image}>
            <img
              src={product.pictures[0].imagePath}
            />
          </div>
          <section>
            <p className={styles.name}>
              {product.name}
            </p>
            <p className={styles.price}>
              <small>R$ 4.399,00</small>
              <b>{product.price.toLocaleString('pt-br', { style: 'currency', 'currency': 'BRL' })}</b>
              <span>À vista ou no PIX</span>
            </p>
          </section>
        </main>

        <footer>
          <BuyButton />
        </footer>
      </a>
    </Link>
  )
}

export default ProductCard;