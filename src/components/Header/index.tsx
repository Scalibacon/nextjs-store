import styles from './Header.module.scss';
import HamburgerMenu from '../HamburgerMenu';
import Image from 'next/image';
import BigLogoImg from '../../assets/logo.png';
import MiniLogoImg from '../../assets/mini-logo.png';
import SearchInput from '../SearchInput';
import ProfileAccess from '../ProfileAccess';
import { BsFillChatSquareQuoteFill, BsFillHeartFill } from 'react-icons/bs';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Category from '../../types/category';
import http from '../../config/http';

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect( () => {
    async function fetchCategories(){
      const response = await http.get('/category');
      const categories = response.data.categories as Category[];
      
      setCategories( oldArray => categories);
    }
    
    fetchCategories();
  }, []);

  return(
    <header className={styles.header}>
      <main>
        <span className={styles.leftHamburger}>
          <HamburgerMenu/>
        </span>        
        <div className={styles.logoBig}>
          <Image
            src={BigLogoImg}
            layout='responsive'
            priority={true}
          />
        </div>
        <div className={styles.logoMini}>
          <Image
            src={MiniLogoImg}
            layout='responsive'
            priority={true}
          />
        </div>
        <SearchInput/>

        <ProfileAccess/>

        <div className={styles.iconsContainer}>
          <a><BsFillChatSquareQuoteFill size={20}/></a>
          <a><BsFillHeartFill size={20}/></a>
          <a className={styles.showInSmall}><FaShoppingCart size={20}/></a>
        </div>

        <span className={styles.rightHamburger}>
          <HamburgerMenu/>
        </span>
      </main>
      <section className={styles.navContainer}>
        <nav>
          <span>
            TODAS AS CATEGORIAS <MdOutlineArrowBackIosNew size={13}/>
            <section className={styles.dropdownMenu}>
              <ul>
                { categories.map(category => {
                  return (
                    <li key={category.id}><a>{ category.name }</a></li>
                  )
                }) }                 
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