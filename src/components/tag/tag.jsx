import './tag.scss';

export function Tag({ text, animation = false }) {
  return (
    <div className='tag'>
      <p className={`tag__text ${animation ? 'tag__text--animation' : ''}`}>
        {text}
      </p>
    </div>
  );
}
