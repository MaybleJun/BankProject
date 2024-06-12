import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { Button } from '../../components/Button/Button';
import { navLinks } from '../../routes/routsNavbar';

const Navbar = () => (
  <div className="navbar__container">
    <Link className='navbar__link-logotext' to="/">NeoBank</Link>
    <ul className='navbar__links'>
      {navLinks.map((link, index) => (
        <Link key={index} className='navbar__link' to={link.href}>{link.label}</Link>
      ))}
    </ul>
    <Button />
  </div>
);

export default Navbar;
