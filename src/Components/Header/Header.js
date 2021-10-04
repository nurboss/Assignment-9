import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="main">
                <div className="logo">
                    <a href="/logo">Learn</a>
                </div>
                <div className="menu mt-3">
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/aboutus">About Us</NavLink></li>
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;