import { Collapsible } from '../../components/collapsible/collapsible';
import './about.scss';
import image from '../../assets/images/about-image.png';
import { Hero } from '../../components/hero/hero';
import { useUpdateTitle } from '../../hooks/useUpdateTitle';
import { collapseText } from './aboutText';

export function About({ title }) {

  useUpdateTitle(title);

  return (
    <div className="about">
      <Hero image={image} />
      <div className="about__collapse">
        {collapseText.map((item, index) => (
          <Collapsible key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>



  );

}