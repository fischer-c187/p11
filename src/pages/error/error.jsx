import { Link } from 'react-router-dom';
import './error.scss';
import { Header } from '../../layouts/header/header';
import { Footer } from '../../layouts/footer/footer';
import { useUpdateTitle } from '../../hooks/useUpdateTitle';

/**
 * Displays a 404 error page when the route is unknown or an error occurs.
 * @param {String} title - Used to update the document title.
 * @returns {React.Component} JSX for the error page.
 */
export function ErrorPage({ title }) {

  useUpdateTitle(title);

  return (
    <>
      <div className='wrapper'>
        <Header />
        <main>
          <div className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__text'>
              Oups! La page que vous demandez n’existe pas.
            </p>
            <Link className='error__link' to='/'>
              Retourner sur la page d’accueil
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
