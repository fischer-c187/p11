import './hero.scss';

/**
 * Renders a hero component with a background image. If a text is provided, it is displayed within a specified HTML tag.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {String} props.image - The image to be displayed in the background.
 * @param {String} [props.Balise='h1'] - The HTML tag for the text (default is 'h1').
 * @param {String} [props.text=''] - The text to be displayed in the hero component (default is empty string).
 *
 * @returns {React.Component} - The JSX for the Hero component.
 */
export function Hero({ image, Balise = 'h1', text = '' }) {
  return (
    <div className='hero'>
      <img
        src={image}
        className='hero__image'
        alt='hero image'
        aria-hidden='true'
      />
      {text && (
        <Balise className='hero__text'>
          <span>{text}</span>
        </Balise>
      )}
    </div>
  );
}
