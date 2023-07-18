import { useEffect, useRef, useState } from 'react';
import './collapsible.scss';
import iconArrow from '../../assets/images/arrow_back.svg';

export function Collapsible({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const refP = useRef(null);

  useEffect(() => {
    if (refP.current) {
      setHeight(refP.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (refP.current) {
        setHeight(refP.current.scrollHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='collapsible'>
      <button
        type='button'
        className='collapsible__button'
        onClick={() => setIsOpen(!isOpen)}
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
      <div className='collapsible__text-wrapper' style={{maxHeight: isOpen ? `${height}px` : '0'}}>
        {<p ref={refP} className='collapsible__text'>{text}</p>}
      </div>
      
    </div>
  );
}
