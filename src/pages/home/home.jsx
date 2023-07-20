import image from '../../assets/images/montagne.png';
import { useLoaderData } from 'react-router-dom';
import { RentalGallery } from '../../layouts/rentalGallery/rentalGallery';
import './home.scss';
import { Hero } from '../../components/hero/hero';
import { useEffect } from 'react';

export function Home({ title }) {
  const location = useLoaderData();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Hero image={image} text='Chez vous, partout et ailleurs'/>
      <RentalGallery data={location} />
    </>
  );
}