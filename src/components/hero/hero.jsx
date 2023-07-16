import './hero.scss';


export function Hero({ image, Balise = 'h1', text = '' }) {
  return (
    <div className='hero'>
      <img src={image} className='hero__image' alt='hero image' aria-hidden='true' />
      <Balise className='hero__text'> <span>{text}</span> </Balise>
    </div>
  );
}
