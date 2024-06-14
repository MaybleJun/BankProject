import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { Button } from '../../components/Button/Button';
import { navLinks } from '../../routes/routsNavbar';

const Navbar = () => (
    <header className="header">
        <div className="header__container">
            <Link className="header__link-logotext" to="/">NeoBank</Link>
            <ul className="header__links">
                {navLinks.map((link) => (
                    <li key={link.href} className="header__link">
                        <Link to={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
            <Button className="Button">Online Bank</Button>
        </div>
    </header>
);

export default Navbar;
