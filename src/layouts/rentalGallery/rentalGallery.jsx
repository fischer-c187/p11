import { CardRental } from '../../components/cardRental/cardRental';
import './rentalGallery.scss';

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
