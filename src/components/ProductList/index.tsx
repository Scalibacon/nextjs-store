import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ProductList.module.scss';
import ProductCard from '../ProductCard';
import SlideArrow from '../SlideShow/SlideArrow';

const ProductList = () => {
  return (
    <section className={`${styles.productList} verticalPaddingSlick`}>
      <Slider
        arrows={true}
        infinite={true}
        centerMode={true}
        centerPadding="5vw"
        slidesToShow={5}
        slidesToScroll={1}
        swipeToSlide={true}
        prevArrow={<SlideArrow isLeft={true} isInsideSlicker={true}/>}
        nextArrow={<SlideArrow isLeft={false} isInsideSlicker={true}/>}
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 975,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 755,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerPadding: "7vw"
            }
          },
          // {
          //   breakpoint: 540,
          //   settings: {
          //     slidesToShow: 1,
          //     centerPadding: "5vw"
          //   }
          // },
        ]}
      >
        <ProductCard id={1} isInsideSlicker={true}/>
        <ProductCard id={2} isInsideSlicker={true}/>
        <ProductCard id={3} isInsideSlicker={true}/>
        <ProductCard id={4} isInsideSlicker={true}/>
        <ProductCard id={5} isInsideSlicker={true}/>
        <ProductCard id={6} isInsideSlicker={true}/>
        <ProductCard id={7} isInsideSlicker={true}/>
      </Slider>
    </section>
  )
}

export default ProductList;