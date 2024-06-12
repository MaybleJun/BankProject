import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
    <div className="counter-container">
        <Link to="/">NeoBank</Link>
        <Link to="/loan">Credit card</Link>
    </div>
);

export default Navbar;
