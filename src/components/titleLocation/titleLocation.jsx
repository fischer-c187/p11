import './titleLocation.scss';

export function TitleLocation({ title, location }) {
  return (
    <div className="title-location">
      <h1 className="title-location__title">{title}</h1>
      <p className="title-location__location">{location}</p>
    </div>
  );
}