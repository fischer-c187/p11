import './owner.scss';


/**
 * Renders the Owner component, which displays the owner's image and name.
 * 
 * @param {object} props The properties passed to the component.
 * @param {string} props.image The URL of the owner's image.
 * @param {string} props.name The name of the owner.
 * @returns {JSX.Element} The JSX for the Owner component.
 */
export function Owner ({ image, name }){
  
  return (
    <div className="owner">
      <p className="owner__name">{ name }</p>
      <img src={ image } alt={`Owner: ${name}`} className="owner__image" />
    </div>
  );
}