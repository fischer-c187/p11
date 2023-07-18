import { Hero } from './hero/hero';
import image from '../assets/images/montagne.png';
import { useLoaderData } from 'react-router-dom';
import { Collapsible } from './collapsible/collapsible';
import { Rating } from './rating/rating';

export function Test() {
  const location = useLoaderData();

  return (
    <>
      <Collapsible title='test' text='rrrrr' />
      <Rating rating={2}/>
    </>
  );
}
