import styles from './HamburgerMenu.module.scss';
import { FiMenu } from 'react-icons/fi';
import { FaUser, FaBuilding } from 'react-icons/fa';
import { IoMdBasket, IoMdHeart, IoMdClose } from 'react-icons/io';
import { BsFillChatSquareQuoteFill, BsFillLightningChargeFill } from 'react-icons/bs';
import { AiOutlineAim, AiFillTag } from 'react-icons/ai';
import { MdGroup } from 'react-icons/md';
import { useRef } from 'react';
import ProfileIcon from '../ProfileIcon';

const HamburgerMenu = () => {
  const backgroundCover = useRef<HTMLDivElement>(null);

  const ICON_SIZE = 20;

  const toggleMenu = () => {
    backgroundCover.current?.classList.toggle(styles.active);
  }

  return (
    <>
      <div className={styles.backgroundCover} ref={backgroundCover} onClick={toggleMenu}>
        <aside className={styles.sideMenuContainer} onClick={e => e.stopPropagation()}>
          <header>
            <ProfileIcon/>
            E aí! Faça seu login.
            <IoMdClose size={30} className={styles.closeIcon} onClick={toggleMenu}/>
          </header>

          <nav>
            <a><FaUser size={ICON_SIZE}/> <p>Minha Conta</p></a>
            <a><IoMdBasket size={ICON_SIZE}/> <p>Meus Pedidos</p></a>
            <a><IoMdHeart size={ICON_SIZE}/> <p>Favoritos</p></a>
            <a><BsFillChatSquareQuoteFill size={ICON_SIZE}/> <p>Atendimento</p></a>
            <hr/>

            <a><AiOutlineAim size={ICON_SIZE}/> <p>Mais Procurados</p></a>
            <a><BsFillLightningChargeFill size={ICON_SIZE}/> <p>Novidades</p></a>
            <a><AiFillTag size={ICON_SIZE}/> <p>Ofertas</p></a>
            <hr/>

            <a><FaBuilding size={ICON_SIZE}/> <p>Sobre Nós</p></a>
            <a><MdGroup size={ICON_SIZE}/> <p>Parceiros</p></a>
          </nav>

          <section className={styles.buttons}>
            <button>LOGIN</button>
            <a><p>CADASTRO</p></a>
          </section>          
        </aside>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <FiMenu size={33}/>
      </div>
    </>    
  )
}

export default HamburgerMenu;