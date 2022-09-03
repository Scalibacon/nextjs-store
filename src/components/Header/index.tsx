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
import Link from 'next/link';

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect( () => {
    async function fetchCategories(){
      const response = await fetch('http://localhost:3000/api/category');
      const { categories }  = await response.json();
      
      setCategories( oldArray => categories);
    }
    
    fetchCategories();
  }, []);

  const toggleDropdownMenu = (show: boolean) => {
    const pageMain = document.getElementById('pageMain');
    if(!pageMain) return;

    if(show){
      pageMain.classList.add('darkened');
    } else {
      pageMain.classList.remove('darkened');
    }
  }

  return(
    <header className={styles.header}>
      <main>
        <span className={styles.leftHamburger}>
          <HamburgerMenu/>
        </span>  

        <Link href="/">
          <a>
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
          </a>          
        </Link>      
        
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
          <span 
            className={styles.dropdownTrigger}
            onMouseEnter={e => toggleDropdownMenu(true)}
            onMouseLeave={e => toggleDropdownMenu(false)}
          >
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