import { CardRental } from '../../components/cardRental/cardRental';
import './rentalGallery.scss';

/**
 * Renders a collection of rental cards.
 * @param {Array.<Object>} data - Data for all rentals.
 * @returns {React.Component} JSX elements for all rental cards.
 */
export function RentalGallery({ data }) {
  return (
    <div className='rental-gallery'>
      {data.map((obj) => (
        <CardRental
          key={obj.id}
          image={obj.cover}
          name={obj.title}
          id={obj.id}
        />
      ))}
    </div>
  );
}
