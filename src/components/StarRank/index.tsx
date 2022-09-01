import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from './StarRank.module.scss';

type StarRankProps = {
  size?: number
  textBelow?: boolean
}

const StarRank = ({
  size = 13,
  textBelow = true
}: StarRankProps) => {
  return (
    <span className={`${styles.rating} ${textBelow ? styles.textBelow : ''}`}>
      <span>
        <AiFillStar size={size}/>
        <AiFillStar size={size}/>
        <AiFillStar size={size}/>
        <AiFillStar size={size}/>
        <AiOutlineStar size={size}/>
      </span>
      <p>(1234)</p>
    </span>
  )
}

export default StarRank;