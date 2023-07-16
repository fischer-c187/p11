import { Hero } from './hero/hero';
import image from '../assets/images/montagne.png';
import { useLoaderData } from 'react-router-dom';
import { CardLocation } from './cardLocation/cardLocation';

export function Test() {
  const location = useLoaderData()[1];
  console.log(location);
  return (
    <>
      <Hero image={image} text='Chez vous, partout et ailleurs'/>
      <CardLocation image={location.cover} id={location.id} name={location.title} />
      
    </>
  );
}

