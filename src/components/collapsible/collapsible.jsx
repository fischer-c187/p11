import { useEffect, useRef, useState } from 'react';
import './collapsible.scss';
import iconArrow from '../../assets/images/arrow_back.svg';

export function Collapsible({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const refP = useRef(null);

  useEffect(() => {
    let timer = null;

    function updateHeight() {
      if (refP.current) {
        setHeight(refP.current.scrollHeight);
      }
    }

    function debouncedUpdateHeight() {
      clearTimeout(timer);
      timer = setTimeout(updateHeight, 200); 
    }

    updateHeight();

    window.addEventListener('resize', debouncedUpdateHeight);

    return () => {
      window.removeEventListener('resize', debouncedUpdateHeight);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='collapsible'>
      <button
        type='button'
        className='collapsible__button'
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        {title}
        <img
          src={iconArrow}
          alt=''
          className={`collapsible__icon ${
            isOpen ? 'collapsible__icon--rotate' : ''
          }`}
          aria-hidden='true'
        />
      </button>
      <div ref={refP} className='collapsible__text-wrapper' style={{maxHeight: isOpen ? `${height}px` : '0'}}>
        <div className='collapsible__text'>
          {Array.isArray(text)
            ? text.map((item, index) => (
              <p key={index}>{item}</p>
            ))
            : <p>{text}</p>
          }
        </div>
      </div>
      
    </div>
  );
}
