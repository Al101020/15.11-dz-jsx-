// import './Navbar.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='menu'>
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? 'menu__item-active menu__item' : 'menu__item'}
        end
      >
        Главная страница с поиском
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => isActive ? 'menu__item-active menu__item' : 'menu__item'}
      >
        Страница избранного
      </NavLink>
    </nav>
  )
}

export default Navbar;