import Header from "../../components/Header";
import styles from '../../styles/Product.module.scss';
import { FiShare2, FiHeart } from "react-icons/fi";
import { TbDiscount2 } from 'react-icons/tb';
import { IoMdStopwatch } from "react-icons/io";
import { VscBook } from 'react-icons/vsc';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import StarRank from "../../components/StarRank";
import ImagesGallery from "../../components/ImagesGallery";
import BuyButton from "../../components/BuyButton";
import { useState } from "react";

const Product = () => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true);

  function toggleDescriptionExpand(){
    setIsDescriptionExpanded(prev => !prev);
  }

  return (
    <div className={styles.productContainer}>
      <Header />

      <section className={styles.infoContainer}>
        <header>
          <b>Você está em: </b>
          <a>Categoria 1 {'>'}</a>
          <span>Produto 1</span>
        </header>
        <h2>Samsung Smart TV 43´´ UHD 4K 43AU7700, Processador Crystal 4K, Tela sem limites, Alexa Built In, Controle Único - UN43AU7700GXZD</h2>

        <main>
          <section className={styles.imageSection}>
            <header>
              <span>MARCA</span>
              <span>
                <StarRank size={15} textBelow={false} />
              </span>
              <span>
                <FiShare2 size={25} />
                <FiHeart size={25} />
              </span>
            </header>
            <ImagesGallery />
          </section>

          <section className={styles.shoppingSection}>
            <div className={styles.discountContainer}>
              <span>
                <p><TbDiscount2 size={35} /></p>
                <b>25% OFF</b>
              </span>

              <span>
                <p><IoMdStopwatch size={35} /></p>
                <b>21D 12:50:37</b>
              </span>
            </div>

            <p>
              Vendido e entregue por:
              <b> ScaliLoja </b>
              |
              <span className={styles.stock}><b> Em estoque</b></span>
            </p>
            <p className={styles.oldPrice}>R$ 4.399,00</p>
            <div className={styles.price}>
              <span>
                <p>R$ 2.299,99</p>
                <small>À vista ou no PIX</small>
              </span>
              <BuyButton />
            </div>
            <p>Em até 10x de <b>R$ 229,99</b> sem juros no cartão</p>
            <p className={styles.paymentPolicy}><a>Ver nossa Política de Pagamento</a></p>

            <div className={styles.consultZipCode}>
              <h3>Consultar frete e prazo de entrega</h3>
              <form>
                <input type="text" placeholder="Digite seu CEP"></input>
                <button type="submit">OK</button>
              </form>
            </div>

            <BuyButton className={styles.buyButtonMobile} iconSize={25} />
          </section>
        </main>
      </section>

      <section className={styles.descriptionContainer}>
        <header onClick={toggleDescriptionExpand}>
          <VscBook size={27} />
          <h2>DESCRIÇÃO DO PRODUTO</h2>
          <MdOutlineArrowForwardIos 
            size={20} 
            className={`${styles.arrow} ${isDescriptionExpanded ? styles.expand : ''}`} />
        </header>

        <main className={isDescriptionExpanded ? styles.expand : ''}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor dui quis neque vulputate condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et ornare enim. In at velit sapien. Aenean ut neque at ligula gravida luctus eget ut odio. Integer id dictum metus. Nam ac enim odio. Phasellus at blandit est. Ut gravida leo mi, eu tincidunt massa fermentum ut. Aliquam rutrum vehicula est eget ultricies. Aliquam id risus erat. Nam eu tempus sapien. Aliquam eget dui volutpat, posuere risus vitae, rutrum quam. Aenean porta ligula ac purus fermentum, a faucibus nisi ornare. Sed elementum egestas massa sit amet tristique. Etiam id luctus odio.<br />

          Vestibulum vel dui at dui pulvinar mollis a in enim. Praesent lacinia convallis faucibus. Ut dictum nunc efficitur, faucibus purus a, rhoncus mi. Praesent auctor molestie suscipit. Ut interdum nunc tellus, a laoreet diam elementum vitae. Phasellus interdum, tortor ultricies mattis ornare, urna arcu sodales dolor, ac ultrices urna orci a magna. Nullam volutpat quis elit sit amet tincidunt. Proin hendrerit lectus sit amet massa interdum, in pharetra tellus imperdiet. Nullam justo leo, porta bibendum egestas ut, eleifend ac leo. Sed ut accumsan augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.<br />

          Mauris sodales, massa sed feugiat sollicitudin, nunc elit sagittis risus, in pulvinar dui magna ut massa. Aliquam sit amet erat vel nunc tristique egestas eget in urna. Aenean cursus ut diam quis auctor. Phasellus commodo efficitur nulla eget ornare. Mauris ultrices aliquet erat, et vestibulum lorem sollicitudin non. Proin lacinia imperdiet eros. Nunc convallis sapien ante, eu condimentum sem lacinia vel. Cras malesuada ligula in nunc dapibus malesuada. Sed cursus felis nisi, ac convallis felis hendrerit in. Nam nec neque sed turpis vulputate ultricies.<br />

          Donec fermentum iaculis neque, convallis vestibulum neque. Nullam ac sollicitudin libero, in interdum lectus. Cras facilisis libero vitae tortor ullamcorper feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nisl sapien, porta sed mauris non, vulputate posuere massa. Proin at mi accumsan, maximus nunc ac, faucibus est. Sed eget nisi dolor. Sed malesuada consectetur scelerisque. Sed consectetur condimentum sagittis. Phasellus mollis non diam nec sollicitudin. Pellentesque leo tellus, congue et ex ut, suscipit hendrerit nisi. Cras ultricies mi sed odio bibendum, sit amet posuere tortor aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </main>
      </section>
    </div>
  )
}

export default Product;