import styles from './Header.module.scss';
import HamburgerMenu from '../HamburgerMenu';

const Header = () => {
  return(
    <header className={styles.header}>
      <main>
        <HamburgerMenu/>
        <div className={styles.logo}/>
        <div className={styles.searchContainer}></div>
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