import { AiFillGithub, AiFillFacebook, AiOutlineInstagram, AiFillTwitterCircle, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
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

        <div>
          <h4>Atendimento</h4>
          <p>Horário de atendimento:</p>
          <p>09:00 às 17:30 - Segunda a Sexta</p>
          <p>09:00 às 13:00 - Sábado</p>
          <p>Horário de Brasília</p>
          <p>(Exceto feriados)</p>
        </div>

        <div>
          <h4>Contato</h4>
          <p>(11) 2055-5539</p>
          <p>(11) 98111-6773 <AiOutlineWhatsApp size={15} /></p>
          <p>scalidev@outlook.com</p>
        </div>
      </main>

    </footer>
  )
}

export default Footer;