import styles from './SlideShow.module.scss';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from '../../assets/banners/1.jpg';
import Banner1Mini from '../../assets/banners/1mini.jpg';
import SlideArrow from './SlideArrow';

const SlideShow = () => {
  return (
    <section className={styles.sliderContainer}>
      <Slider
        arrows={false}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5500}
        pauseOnHover={true}
        cssEase='ease'
        // prevArrow={<SlideArrow isLeft={true}/>}
        // nextArrow={<SlideArrow isLeft={false}/>}
      >
        <div className={`${styles.bannerContainer}`}>
          <div className={styles.big}>
            <Image
              src={Banner1}
              layout="responsive"
            />
          </div>
          <div className={styles.mini}>
            <Image
              src={Banner1Mini}
              layout="responsive"
            />
          </div>
        </div>

        <div className={`${styles.bannerContainer}`}>
          <div className={styles.big}>
            <Image
              src={Banner1}
              layout="responsive"
            />
          </div>
          <div className={styles.mini}>
            <Image
              src={Banner1Mini}
              layout="responsive"
            />
          </div>
        </div>
      </Slider>
    </section>
  )
}

export default SlideShow;