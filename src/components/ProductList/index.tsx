import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ProductList.module.scss';
import ProductCard from '../ProductCard';
import SlideArrow from '../SlideShow/SlideArrow';
import Product from '../../types/Product';

type ProductListProps = {
  products: Product[]
}

const ProductList = ({
  products
}: ProductListProps) => {
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
          }
        ]}
      >
        { products.map( product => (
          <ProductCard product={product} isInsideSlicker={true}/>
        ))}

      </Slider>
    </section>
  )
}

export default ProductList;