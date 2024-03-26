import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <Link to="/" className="navbar-link keysoundboard-link" style={{fontWeight: "bold"}}>KeySoundboard</Link>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={isOpen ? "hamburger open" : "hamburger"}></div>
            </div>
            <div className={isOpen ? "links-container open" : "links-container"}>
                <Link to="/faq" className="navbar-link">FAQ</Link>
                <Link to="/contact" className="navbar-link">Contact</Link>
                <Link to="/soundboard/driver" className="navbar-link">Audio Driver</Link>
            </div>
        </div>
    );
}

export default Navbar;
