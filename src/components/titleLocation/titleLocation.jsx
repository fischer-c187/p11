import './titleLocation.scss';

/**
 * Renders a title and a location in a single component.
 *
 * @param {object} props The properties passed to the component.
 * @param {string} props.title The main title to be displayed.
 * @param {string} props.location The location to be displayed below the title.
 * @returns {React.Component} The JSX for the TitleLocation component.
 */
export function TitleLocation({ title, location }) {
  return (
    <div className="title-location">
      <h1 className="title-location__title">{title}</h1>
      <p className="title-location__location">{location}</p>
    </div>
  );
}