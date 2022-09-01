import { FaShoppingCart } from 'react-icons/fa';
import styles from './BuyButton.module.scss';

type BuyButtonProps = {
  className?: string,
  iconSize?: number
}

const BuyButton = ({ 
  className,
  iconSize = 18
}: BuyButtonProps) => {
  return (
    <button type="button" className={`${styles.buyButton} ${className}`}>
      <FaShoppingCart size={iconSize}/>
      <p>COMPRAR</p>
    </button>
  )
}

export default BuyButton;