import image from '../../assets/images/montagne.png';
import { useLoaderData } from 'react-router-dom';
import { RentalGallery } from '../../layouts/rentalGallery/rentalGallery';
import './home.scss';
import { Hero } from '../../components/hero/hero';

export function Home() {
  const location = useLoaderData();

  return (
    <>
      <Hero image={image} text='Chez vous, partout et ailleurs'/>
      <RentalGallery data={location} />
    </>
  );
}