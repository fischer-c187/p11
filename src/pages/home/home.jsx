import image from '../../assets/images/montagne.png';
import { useLoaderData } from 'react-router-dom';
import { RentalGallery } from '../../layouts/rentalGallery/rentalGallery';
import './home.scss';
import { Hero } from '../../components/hero/hero';
import { useUpdateTitle } from '../../hooks/useUpdateTitle';


/**
 * Displays the home page, including a hero component and a gallery with all rentals.
 * @param {String} title - Used to update the document title.
 * @returns {React.Component} JSX for the homepage.
 */
export function Home({ title }) {
  const data = useLoaderData();
  useUpdateTitle(title);

  return (
    <>
      <Hero image={image} text='Chez vous, partout et ailleurs'/>
      <RentalGallery data={data} />
    </>
  );
}