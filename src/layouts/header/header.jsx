import { NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/images/logo.svg';

export function Header () {

  function activeLink({isActive}) {
    return isActive 
      ? 'header__link-nav header__link-nav--active'
      : 'header__link-nav';
  }
  
  return (
    <header className="header">
      <img src={logo} className='header__logo' alt="logo kasa" aria-hidden="true"/>

      <nav className="header__navbar">
        <ul className='header__list'>
          <li>
            <NavLink 
              to='/'
              className={activeLink}
            >Accueil</NavLink>
          </li>
          <li>
            <NavLink 
              to='/a-propos'
              className={activeLink}
            >A Propos</NavLink>
          </li>
        </ul>
      </nav>

    </header>
  );
}