import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/images/CC-Logo.png';

const Footer = () => {
    return (
        <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="first-column col-lg-4 col-md-6 col-sm-6">
                        <Link to="/">
                            <img src={logo} alt="Cumberland Captures Logo" className="logo" />
                        </Link>
                        <div>
                            <p className="small text-muted text-white">Cumberland Captures is a photography business based in Cookeville, TN. We offer couples, family, and event photography options.</p>
                            <p className="small text-muted mb-0 text-white">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">CumberlandCaptures.com</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><Link className="nav-link text-white" to="/">Home</Link></li>
                            <li><Link className="nav-link text-white" to="/gallery">Photo Gallery</Link></li>
                            <li><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                            <li><Link className="nav-link text-white" to="/schedule">Schedule</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <h5 className="text-white mb-3">Contact us</h5>
                        <p className="text-white">Phone: +1 (931)-704-5669</p>
                        <p className="text-white">Email: amayalei2003@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
