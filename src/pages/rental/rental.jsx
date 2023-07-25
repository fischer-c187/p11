import { useLoaderData } from 'react-router-dom';
import './rental.scss';
import { Carousel } from '../../components/carousel/carousel';
import { TitleLocation } from '../../components/titleLocation/titleLocation';
import { Tag } from '../../components/tag/tag';
import { Rating } from '../../components/rating/rating';
import { Owner } from '../../components/owner/owner';
import { Collapsible } from '../../components/collapsible/collapsible';
import { useEffect } from 'react';
import { useUpdateTitle } from '../../hooks/useUpdateTitle';

export function Rental() {
  const data = useLoaderData();

  useUpdateTitle(data.title);

  return (
    <>
      <Carousel images={data.pictures} />
      <div className="rental-description">
        <div className="rental-information">
          <TitleLocation title={data.title} location={data.location} />
          <div className='tags-wrapper'>
            {data.tags.map((tag, index) => (
              <Tag key={index} text={tag} animation={false} />
            ))}
          </div>        
        </div>
        <div className="owner-description">
          <Rating rating={data.rating} />
          <Owner image={data.host.picture} name={data.host.name}/>
        </div>
      </div>
      <div className="collapse-wrapper">
        <Collapsible title='Description' text={data.description} />
        <Collapsible title='Equipements' text={data.equipments} />
      </div>
    
     
    </>
  );
}
