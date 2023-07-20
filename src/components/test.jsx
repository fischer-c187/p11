import { Hero } from './hero/hero';
import image from '../assets/images/montagne.png';
import { useLoaderData } from 'react-router-dom';
import { Collapsible } from './collapsible/collapsible';
import { Rating } from './rating/rating';
import { Owner } from './owner/owner';
import { Tag } from './tag/tag';
import { Carousel } from './carousel/carousel';

export function Test() {
  const location = useLoaderData();
  const imagesURL = [
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg',
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg',
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg',
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg'
  ];

  return (
    <>
      <Carousel images={imagesURL} />
    </>
  );
}
