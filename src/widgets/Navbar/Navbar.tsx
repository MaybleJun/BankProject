import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { Button } from '../../components/Button/Button';
import { navLinks } from '../../routes/routsNavbar';

const Navbar = () => (
  <header className='Header'>
    <div className="navbar__container">
    <Link className='navbar__link-logotext' to="/">NeoBank</Link>
    <ul className='navbar__links'>
      {navLinks.map((link, index) => (
        <li className='navbar__link'>
          <Link key={index}  to={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
    <Button />
  </div>
  </header>
  
);

export default Navbar;
