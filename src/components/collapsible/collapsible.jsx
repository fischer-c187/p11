import { useEffect, useRef, useState } from 'react';
import './collapsible.scss';
import iconArrow from '../../assets/images/arrow_back.svg';

/**
 * Renders a Collapsible component. When clicked on, the content toggles between hide and show.
 *
 * @param {Object} props The properties passed to the component.
 * @param {String} props.title The title of the component, which is displayed on the button.
 * @param {String | String[]} props.text The text content of the collapsible component.
 * 
 * @returns {React.Component} The Collapsible component.
 */
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

    // Debounces the update function for performance improvement.
    function debouncedUpdateHeight() {
      clearTimeout(timer);
      timer = setTimeout(updateHeight, 200);
    }

    // initial height value
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
