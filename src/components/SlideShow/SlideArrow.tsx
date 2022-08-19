import { CSSProperties, MouseEventHandler } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import styles from './SlideArrow.module.scss';

type SlideArrowProps = {
  isLeft: boolean,
  style?: CSSProperties,
  onClick?: MouseEventHandler
}

const SlideArrow = (props: SlideArrowProps) => {
  const { style, onClick, isLeft } = props;
  
  return (
    <div 
      style={{ ...style }} 
      className={`${styles.arrow} ${isLeft ? styles.left : styles.right}`}
      onClick={onClick}
    >
      <MdOutlineDoubleArrow size={25}/>
    </div>
  )
}

export default SlideArrow;