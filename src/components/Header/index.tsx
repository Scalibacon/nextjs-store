import styles from './Header.module.scss';
import HamburgerMenu from '../HamburgerMenu';
import Image from 'next/image';
import LogoImg from '../../assets/logo.png';
import SearchInput from '../SearchInput';

const Header = () => {
  return(
    <header className={styles.header}>
      <main>
        <HamburgerMenu/>
        <div className={styles.logo}>
          <Image
            src={LogoImg}
            layout='responsive'
          />
        </div>
        <SearchInput/>
        <div className={styles.accessContainer}></div>
        <div className={styles.iconsContainer}></div>
      </main>
      <section className={styles.navContainer}>
        <nav></nav>
      </section>
    </header>
  )
}

export default Header;