import { Link, useLocation } from 'react-router-dom'; // Убедитесь, что useLocation правильно импортирован
import './Navbar.scss';
import { Button } from '../../components/Button/Button';
import { navLinks } from '../../routes/routsNavbar';

const Navbar = () => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header__container">
                <Link className="header__link-logotext" to="/">NeoBank</Link>
                <ul className="header__links">
                    {navLinks.map((link) => (
                        <li key={link.href} className="header__link">
                            <Link
                                to={link.href}
                                className={location.pathname === link.href ? 'header__link--active' : ''}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Button className="Button">Online Bank</Button>
            </div>
        </header>
    );
};

export default Navbar;
