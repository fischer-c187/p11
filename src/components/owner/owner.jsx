import './owner.scss';

export function Owner ({ image, name }){
  
  return (
    <div className="owner">
      <p className="owner__name">{ name }</p>
      <img src={ image } alt="" className="owner__image" />
    </div>
  );
}