import React from 'react';
import './Navbar.css';
import Popup from '../Popup/Popup';
const Navbar = () => {
    return (
    <div>
        <nav>
            <div className="nav-logo-container">
                <img src='./logoo.png' alt="Wl" /><span>WorkLoom</span>
            </div>
            <div className="navbar-links-container">
                <a href="">Features</a>
                <a href="">Pricing</a>
                <a href="">Workflow</a>
                <a href="">Testimonials</a>
                <Popup />
                {/* <a href="./Components/login">
                <button className="primary-button">Login</button></a> */}
            </div>
        </nav>
    </div>
    );
}
export default Navbar;