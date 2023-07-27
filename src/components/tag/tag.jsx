import './tag.scss';

/**
 * Renders a tag, which is text with a background color.
 *
 * @param {object} props The properties passed to the component.
 * @param {string} props.text The text to be displayed in the tag.
 * @param {boolean} [props.animation=false] If true, a fade-in animation is played when the page is loaded.
 * @returns {React.Component} The JSX for the Tag component.
 */
export function Tag({ text, animation = false }) {
  return (
    <div className='tag'>
      <p className={`tag__text ${animation ? 'tag__text--animation' : ''}`}>
        {text}
      </p>
    </div>
  );
}
