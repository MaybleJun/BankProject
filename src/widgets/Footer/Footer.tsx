import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import neoLogo from '../../assets/logoNeo.png';
import { footerLinks } from '../../routes/routsFooter';

const Navbar = () => (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__upinfo">
                <a href="https://www.neoflex.ru" target="_blank" rel="noreferrer">
                    <figure className="footer__logoNeo">
                        <img
                            src={neoLogo}
                            alt="Neoflex logo"
                            width="159"
                            height="50"
                        />
                    </figure>
                </a>
                <div className="footer__contacts">
                    <a className="footer__phone" href="tel:+74959842513">
                        +7 (495) 984 25 13
                    </a>
                    <a className="footer__email" href="mailto:info@neoflex.ru">
                        info@neoflex.ru
                    </a>
                </div>
            </div>

            <ul className="footer__links">
                {footerLinks.map((link) => (
                    <li key={link.href}>
                        <Link className="footer__link" to={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>

            <div className="footer__linear" />
            <p className="footer__textcookie">
                We use cookies to personalize our services and improve the user
                experience of our website. Cookies are small files containing
                information about previous visits to a website. If you do not want to
                use cookies, please change your browser settings
            </p>
        </div>
    </footer>
);

export default Navbar;
