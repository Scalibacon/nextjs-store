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
  const haveDiscount: boolean = product.finalPrice < product.price;

  const renderDiscount = () => {
    if (!haveDiscount) return;

    const percentage = Math.floor((product.price - product.finalPrice) / product.price * 100);

    return (
      <span className={styles.discount}>
        <p>{percentage}%</p>
        <svg width="16" viewBox="0 0 16 8">
          <path d="M0 -3.65575e-06L16 0L8 8L0 -3.65575e-06Z" fill="#fff"></path>
        </svg>
      </span>
    )
  }

  return (
    <Link href={`/product/${product.id}`}>
      <a className={`${styles.productCard} ${isInsideSlicker ? styles.isInsideSlicker : ''}`}>
        <header>
          {renderDiscount()}
          <span className={styles.remaining}>
            <small>RESTAM</small>
            <b>{product.inventory}</b>
            <small>UNID.</small>
          </span>
          <span className={styles.rating}>
            <StarRank rating={product.rating} ratingCount={product.ratingCount} />
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
              {haveDiscount && <small>{product.price.toLocaleString('pt-br', { style: 'currency', 'currency': 'BRL' })}</small>}
              <b>{product.finalPrice.toLocaleString('pt-br', { style: 'currency', 'currency': 'BRL' })}</b>
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