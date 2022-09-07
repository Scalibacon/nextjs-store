import { ReactNode } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from './StarRank.module.scss';

type StarRankProps = {
  rating: number,
  ratingCount: number,
  size?: number
  textBelow?: boolean
}

const StarRank = ({
  ratingCount = 0,
  rating = 0,
  size = 13,
  textBelow = true
}: StarRankProps) => {
  rating = Math.round(rating);

  const renderStars = () => {
    const filledStars: ReactNode[] = [];

    for (let i = 1; i <= rating; i++) {
      filledStars.push(<AiFillStar size={size} key={i} />);
    }

    for (let i = 5; i > rating; i--) {
      filledStars.push(<AiOutlineStar size={size} key={i} />);
    }

    return filledStars;
  }


  if (ratingCount === 0) return <></>;
  return (
    <span className={`${styles.rating} ${textBelow ? styles.textBelow : ''}`}>
      <span>
        {renderStars()}
      </span>
      <p>({ratingCount})</p>
    </span>
  )
}

export default StarRank;