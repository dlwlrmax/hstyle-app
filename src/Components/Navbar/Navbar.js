import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='nav-container'>
            <ul className='Navbar'>
                <li className='nav-link-container'>
                    <Link to='/'>Home</Link>
                </li>{' '}
                <li className='nav-link-container'>
                    <Link to='/shop'>Shop</Link>
                </li>{' '}
                <li className='nav-link-container brand-name'>
                    <Link to='/'>H-STYLE</Link>
                </li>{' '}
                <li className='nav-link-container'>
                    <Link to='/about'>About</Link>
                </li>{' '}
                <li className='nav-link-container'>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
