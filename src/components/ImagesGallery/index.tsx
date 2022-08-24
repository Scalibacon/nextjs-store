import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ImagesGallery.module.scss';

const ImagesGallery = () => {
  function createCustomDots(index: number){
    // chumbado, depois pegar dinamicamente concatenando o id
    const urls = [
      "https://images.kabum.com.br/produtos/fotos/154974/samsung-smart-tv-43-uhd-4k-43au7700-processador-crystal-4k-tela-sem-limites-alexa-built-in-controle-unico-un43au7700gxzd_1617624901_gg.jpg",
      "https://images.kabum.com.br/produtos/fotos/154974/samsung-smart-tv-43-uhd-4k-43au7700-processador-crystal-4k-tela-sem-limites-alexa-built-in-controle-unico-un43au7700gxzd_1628864755_gg.jpg"
    ]

    return (
      <a>
        <img
          src={urls[index]}
        />
      </a>
    )
  }

  return (
    <div className={styles.galleryContainer}>
      <Slider
        arrows={false}
        dots={true}
        dotsClass={styles.galleryDots}
        fade={true}
        speed={0}
        infinite={true}
        customPaging={createCustomDots}
      >
        <div className={styles.imageContainer}>
          <img
            src="https://images.kabum.com.br/produtos/fotos/154974/samsung-smart-tv-43-uhd-4k-43au7700-processador-crystal-4k-tela-sem-limites-alexa-built-in-controle-unico-un43au7700gxzd_1617624901_gg.jpg"
          />
        </div>

        <div className={styles.imageContainer}>
          <img
            src="https://images.kabum.com.br/produtos/fotos/154974/samsung-smart-tv-43-uhd-4k-43au7700-processador-crystal-4k-tela-sem-limites-alexa-built-in-controle-unico-un43au7700gxzd_1628864755_gg.jpg"
          />
        </div>
      </Slider>
    </div>
  )
}

export default ImagesGallery;