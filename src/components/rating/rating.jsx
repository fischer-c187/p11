import { Star } from '../star/star';
import './rating.scss';

export function Rating({ rating }) {
  return (
    <div className='rating'>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          isActive={i < rating ? true : false}
          delay={i * 150}
          startDelay={75}
        />
      ))}
    </div>
  );
}
