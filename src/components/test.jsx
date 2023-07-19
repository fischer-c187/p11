import { Hero } from './hero/hero';
import image from '../assets/images/montagne.png';
import { useLoaderData } from 'react-router-dom';
import { Collapsible } from './collapsible/collapsible';
import { Rating } from './rating/rating';
import { Owner } from './owner/owner';

export function Test() {
  const location = useLoaderData();

  return (
    <>
      <Owner image={image} name='morgan dealmeidathierry' />
    </>
  );
}
