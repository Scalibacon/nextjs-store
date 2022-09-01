import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ImagesGallery.module.scss';
import Picture from '../../types/Picture';

type ImagesGalleryProps = {
  images: Picture[]
}

const ImagesGallery = ({
  images
}: ImagesGalleryProps) => {
  // chumbado, depois pegar dinamicamente concatenando o id
  const urls = [
    "https://images.kabum.com.br/produtos/fotos/154974/samsung-smart-tv-43-uhd-4k-43au7700-processador-crystal-4k-tela-sem-limites-alexa-built-in-controle-unico-un43au7700gxzd_1617624901_gg.jpg",
    "https://images.kabum.com.br/produtos/fotos/154974/samsung-smart-tv-43-uhd-4k-43au7700-processador-crystal-4k-tela-sem-limites-alexa-built-in-controle-unico-un43au7700gxzd_1628864755_gg.jpg",
    "https://images.kabum.com.br/produtos/fotos/154974/samsung-smart-tv-43-uhd-4k-43au7700-processador-crystal-4k-tela-sem-limites-alexa-built-in-controle-unico-un43au7700gxzd_1617624899_gg.jpg",
  ];

  function createCustomDots(index: number) {
    return (
      <a>
        <img
          src={images[index].imagePath}
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
        responsive={[
          {
            breakpoint: 800,
            settings: {
              fade: false,
              speed: 500
            }
          },
        ]}
      >
        {images.map((image, index) => {
          return (
            <div className={styles.imageContainer} key={image.id}>
              <div className={styles.image}>
                <img
                  src={image.imagePath}
                />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default ImagesGallery;