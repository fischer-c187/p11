import { Collapsible } from '../../components/collapsible/collapsible';
import './about.scss';
import image from '../../assets/images/about-image.png';
import { Hero } from '../../components/hero/hero';
import { useUpdateTitle } from '../../hooks/useUpdateTitle';
import { collapseText } from './aboutText';


/**
 * Display the "About" page which contains information about Kasa and includes a Hero component.
 * @param {String} title - The title to set for the document.
 * @returns {React.Component} JSX for the "About" page.
 */
export function About({ title }) {

  useUpdateTitle(title);

  return (
    <div className="about">
      <Hero image={image} />
      <div className="about__collapse">
        {/* collapseText contains a set of text objects to be rendered as collapsible components */}
        {collapseText.map((item, index) => (
          <Collapsible key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}