import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <NavLink 
                        className='navbar-link' 
                        to={'/runpod_frontend'}
                    end>
                        Home
                    </NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink 
                        className='navbar-link' 
                        to={'/about'}
                    >
                        About
                    </NavLink>
                </li>
                <li className='navbar-item'>
                    <a className='navbar-link' href='https://github.com/anamika8/runpod_frontend'>GitHub</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
