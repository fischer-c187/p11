import { CardLocation } from '../../components/cardLocation/cardLocation';
import './locationGallery.scss';

export function LocationGallery({ data }) {
  return (
    <div className='location-gallery'>
      {data.map((obj) => (
        <CardLocation
          key={obj.id}
          image={obj.cover}
          name={obj.title}
          id={obj.id}
        />
      ))}
    </div>
  );
}
