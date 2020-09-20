import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <ul className='Navbar'>
                <li className='nav-link-container'>
                    <a href='/'>Home</a>
                </li>{' '}
                <li className='nav-link-container'>
                    <a href='/shop'>Shop</a>
                </li>{' '}
                <li className='nav-link-container brand-name'>
                    <a href='/'>H-STYLE</a>
                </li>{' '}
                <li className='nav-link-container'>
                    <a href='/about'>About</a>
                </li>{' '}
                <li className='nav-link-container'>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
