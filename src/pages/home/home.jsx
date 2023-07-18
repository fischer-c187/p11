import image from '../../assets/images/montagne.png';
import { useLoaderData } from 'react-router-dom';
import { LocationGallery } from '../../layouts/locationGallery/locationGallery';
import './home.scss';
import { Hero } from '../../components/hero/hero';

export function Home() {
  const location = useLoaderData();

  return (
    <>
      <Hero image={image} text='Chez vous, partout et ailleurs'/>
      <LocationGallery data={location} />
    </>
  );
}