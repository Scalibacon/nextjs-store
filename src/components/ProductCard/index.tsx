import styles from './ProductCard.module.scss';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import StarRank from '../StarRank';
import BuyButton from '../BuyButton';

type ProductCardProps = {
  id: number,
  isInsideSlicker?: boolean
}

const ProductCard = ({ id, isInsideSlicker }: ProductCardProps) => {
  return (
    <Link href="/product/1">
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
            <b>123</b>
            <small>UNID.</small>
          </span>
          <span className={styles.rating}>
            <StarRank/>
          </span>          
        </header>
        
        <main className={styles.main}>
          <div className={styles.image}>
            <img 
              src="https://images2.kabum.com.br/produtos/fotos/254192/notebook-lenovo-ultrafino-ideapad-3i-intel-core-i3-10110u-4gb-ssd-256gb-windows-11-15-6-prata-82bs000jbr_1636555918_m.jpg"        
            />
          </div>
          <section>
            <p className={styles.name}>
              Notebook Lenovo Ultrafino IdeaPad 3i Intel Core i3-10110U, 4GB, SSD 256GB, Windows 11, 15.6, Prata - 82BS000JBR
            </p>
            <p className={styles.price}>
              <small>R$ 4.399,00</small>
              <b>R$ 2.299,99</b>
              <span>À vista ou no PIX</span>
            </p>
          </section>        
        </main>
        
        <footer>
          <BuyButton/>
        </footer>
      </a>
    </Link>    
  )
}

export default ProductCard;