import { Link } from 'react-router-dom';
import './cardRental.scss';

/**
 * Renders a clickable card with a title and an image. When clicked, the user
 * is redirected to the specific rental page.
 *
 * @param {Object} props - The properties passed down to this component.
 * @param {string} props.image - The URL to the image to be displayed.
 * @param {string} props.name - The name of the rental.
 * @param {string} props.id - The id of the rental.
 *
 * @returns {React.Component} The Rental Card component.
 */
export function CardRental({ image, name, id }) {
  return (
    <article className='card-location'>
      <Link to={`/annonce/${id}`} className='card-location__link'>
        <img
          src={image}
          alt='rental illustration'
          className='card-location__image'
          aria-hidden='true'
        />
        <h2 className='card-location__title'>{name}</h2>
      </Link>
    </article>
  );
}
