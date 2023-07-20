import { useState, useRef, useEffect } from 'react';
import './carousel.scss';

export function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.remove('carousel__img--fade-in');
      const timeout = setTimeout(() => {
        imgRef.current.classList.add('carousel__img--fade-in');
      }, 150);

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
        ref={imgRef}
        src={images[index]}
        alt='image du logement'
        className='carousel__img'
      />

      {images.length > 1 && carouselControls}
    </div>
  );
}