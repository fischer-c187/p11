import { useState, useRef, useEffect } from 'react';
import './carousel.scss';

/**
 * Carousel component that displays a series of images. If multiple images are present,
 * navigation controls are provided to cycle through the images.
 * @param {Object} props Component properties
 * @param {Array.<string>} props.images An array of URLs pointing to the images to be displayed
 * @returns {React.Component} JSX for Carousel component
 */
export function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.remove('carousel__img--fade-in');
      const timeout = setTimeout(() => {
        imgRef.current.classList.add('carousel__img--fade-in');
      }, 150);

      // The cleanup callback within the useEffect is performed only when necessary
      return () => clearTimeout(timeout);
    }
  }, [index]);

  function handleRightClick() {
    index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  function handleLeftClick() {
    index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
  }

  const carouselControls = (
    <>
      <button
        className='carousel__navigation--right carousel__navigation'
        type='button'
        onClick={handleRightClick}
      >
        <i className='fa-solid fa-chevron-right'></i>
      </button>

      <button
        className='carousel__navigation--left carousel__navigation'
        type='button'
        onClick={handleLeftClick}
      >
        <i className='fa-solid fa-chevron-left'></i>
      </button>
      <div className='carousel__information'>
        <p>
          <span className='carousel__nbr-index'>{index + 1}</span>/
          {images.length}
        </p>
      </div>
    </>
  );

  return (
    <div className='carousel'>
      <img
        key={index}
        ref={imgRef}
        src={images[index]}
        alt='image du logement'
        className='carousel__img'
      />

      {images.length > 1 && carouselControls}
    </div>
  );
}
