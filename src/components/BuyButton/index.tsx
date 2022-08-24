import { FaShoppingCart } from 'react-icons/fa';
import styles from './BuyButton.module.scss';

const BuyButton = () => {
  return (
    <button type="button" className={styles.buyButton}>
      <FaShoppingCart size={18}/>
      <p>COMPRAR</p>
    </button>
  )
}

export default BuyButton;