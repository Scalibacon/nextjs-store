import styles from './Header.module.scss';
import HamburgerMenu from '../HamburgerMenu';
import Image from 'next/image';
import LogoImg from '../../assets/logo.png';
import SearchInput from '../SearchInput';
import ProfileAccess from '../ProfileAccess';
import { BsFillChatSquareQuoteFill, BsFillHeartFill } from 'react-icons/bs';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import Category from '../../types/category';

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);

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
        <nav>
          <span>
            TODAS AS CATEGORIAS <MdOutlineArrowBackIosNew size={13}/>
            <section className={styles.dropdownMenu}>
              <ul>
                <li><a>Categoria 1</a></li>
                <li><a>Categoria 2</a></li>
                <li><a>Categoria 3</a></li>
                <li><a>Categoria 4</a></li>
                <li><a>Categoria 5</a></li>
              </ul>
            </section>
          </span>
          <span>LANÇAMENTOS</span>
          <span>OFERTAS</span>
          <span>DESTAQUES</span>
          <span>MAIS COBIÇADOS</span>
          <span>IMPORTADOS</span>                   
        </nav>
      </section>
    </header>
  )
}

export default Header;