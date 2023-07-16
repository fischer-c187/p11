import { Link } from 'react-router-dom';
import './cardLocation.scss';

export function CardLocation({ image, name, id }) {
  return (
    <article className='card-location'>
      <Link to={`/annonce/${id}`} className='card-location__link'>
        <img
          src={image}
          alt='location illustration'
          className='card-location__image'
          aria-hidden='true'
        />
        <h2 className="card-location__title">{name}</h2>
      </Link>
    </article>
  );
}
