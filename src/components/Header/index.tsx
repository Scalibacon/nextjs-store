import styles from './Header.module.scss';
import HamburgerMenu from '../HamburgerMenu';
import Image from 'next/image';
import LogoImg from '../../assets/logo.png';
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