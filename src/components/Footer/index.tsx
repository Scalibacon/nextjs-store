import { AiFillGithub, AiFillFacebook, AiOutlineInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <main>
        <div>
          <h4>Institucional</h4>
          <a>Sobre a ScaliLoja</a>
          <a>Política de Privacidade</a>
          <a>Trabalhe Conosco</a>
          <h4>Mídias Sociais</h4>
          <div className={styles.socialMediaContainer}>
            <a><AiFillGithub size={25} /></a>
            <a><AiFillFacebook size={25} /></a>
            <a><AiOutlineInstagram size={25} /></a>
            <a><AiFillTwitterCircle size={25} /></a>
            <a><AiFillLinkedin size={25} /></a>
          </div>
        </div>
      </main>

    </footer>
  )
}

export default Footer;