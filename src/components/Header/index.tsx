import styles from './Header.module.scss';
import HamburgerMenu from '../HamburgerMenu';
import Image from 'next/image';
import LogoImg from '../../assets/logo.png';
import SearchInput from '../SearchInput';
import ProfileAccess from '../ProfileAccess';
import { BsFillChatSquareQuoteFill, BsFillHeartFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return(
    <header className={styles.header}>
      <main>
        <HamburgerMenu/>
        <div className={styles.logo}>
          <Image
            src={LogoImg}
            layout='responsive'
            priority={true}
          />
        </div>
        <SearchInput/>

        <ProfileAccess/>

        <div className={styles.iconsContainer}>
          <a><BsFillChatSquareQuoteFill size={25}/></a>
          <a><BsFillHeartFill size={25}/></a>
          <a><FaShoppingCart size={25}/></a>
        </div>
      </main>
      <section className={styles.navContainer}>
        <nav></nav>
      </section>
    </header>
  )
}

export default Header;