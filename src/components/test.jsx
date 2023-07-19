import { Hero } from './hero/hero';
import image from '../assets/images/montagne.png';
import { useLoaderData } from 'react-router-dom';
import { Collapsible } from './collapsible/collapsible';
import { Rating } from './rating/rating';
import { Owner } from './owner/owner';
import { Tag } from './tag/tag';

export function Test() {
  const location = useLoaderData();

  return (
    <>
      <Tag text='Paris 10' animation={true} />
    </>
  );
}
