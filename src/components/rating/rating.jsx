import { Star } from '../star/star';
import './rating.scss';

/**
 * Renders a star-based rating component. The rating is displayed with stars out of 5.
 * 
 * @param {object} props The properties passed to the component.
 * @param {number} props.rating The rating to be displayed, should be a number between 0 and 5.
 * @returns {JSX.Element} The JSX for the Rating component.
 */
export function Rating({ rating }) {
  return (
    <div className='rating'>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          isActive={i < rating}
          delay={i * 150}
          startDelay={75}
        />
      ))}
    </div>
  );
}
