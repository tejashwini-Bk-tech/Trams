import { useState } from 'react';
import logoImage from '../assets/Component 126.png';
import logo from '../assets/Elementum.png'
import './navbar.css';

function navBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <img src={logo} alt="Elementum logo" />
                    </div>
                    <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                        <ul className="navbar-links">
                            <li><a href="#home" onClick={closeMenu}>Home</a></li>
                            <li><a href="#studio" onClick={closeMenu}>Studio</a></li>
                            <li><a href="#services" onClick={closeMenu}>Services</a></li>
                            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                            <li><a href="#faq" onClick={closeMenu}>FAQs</a></li>
                        </ul>
                    </div>
                    <div className="navbar-hamburger" onClick={toggleMenu}>
                        <img src={logoImage} alt="menu" />
                    </div>
                </div>
            </nav>
        </>
    )
}
export default navBar