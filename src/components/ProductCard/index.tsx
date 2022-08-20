import styles from './ProductCard.module.scss';

type ProductCardProps = {
  id: number,
  isInsideSlicker?: boolean
}

const ProductCard = ({ id, isInsideSlicker }: ProductCardProps) => {
  return (
    <a className={`${styles.productCard} ${isInsideSlicker ? styles.isInsideSlicker : ''}`}>
      <header>{ id }</header>
      <div className={styles.image}></div>
      <p className={styles.name}></p>
      <p className={styles.price}></p>
      <footer></footer>
    </a>
  )
}

export default ProductCard;