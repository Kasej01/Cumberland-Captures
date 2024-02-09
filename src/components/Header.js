// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'; // Create this file for your custom styles if needed
import logo from '../assets/images/CC-Logo.png';

const Header = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="Cumberland Captures Logo" className="logo" />
            </Link>
            <div id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/gallery' ? 'active' : ''}`}>
                        <Link className="nav-link" to="/gallery">
                            Photo Gallery
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/schedule' ? 'active' : ''}`}>
                        <Link className="nav-link" to="/schedule">
                            Schedule
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
