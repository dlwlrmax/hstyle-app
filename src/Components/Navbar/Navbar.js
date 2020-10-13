import React, { useState, useEffect } from 'react';
import Style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faSearch, faShoppingCart, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import MoboBar from './MoboBar/MoboBar';

const Navbar = () => {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

    const [isSidebarOpened, setSideBar] = useState(false);

    const onWidthChange = () => {
        setBrowserWidth(window.innerWidth);
    };

    const openSidebar = () => {
        setSideBar(value => !value);
    };

    const closeNavHandler = () => {
        setSideBar(false);
    };

    useEffect(() => {
        window.addEventListener('resize', onWidthChange);
        onWidthChange();
        return () => window.removeEventListener('resize', onWidthChange);
    });

    const desktopNav = (
        <div className={Style.navContainer}>
            <ul className={Style.Navbar}>
                <li className={Style.navLinkContainer}>
                    <Link to='/collections'>Collections</Link>
                </li>{' '}
                <li className={Style.navLinkContainer}>
                    <Link to='/shop'>Shop</Link>
                </li>{' '}
                <li className={Style.navLinkContainer + ' ' + Style.brandName}>
                    <Link to='/'>H-STYLE</Link>
                </li>{' '}
                <li className={Style.navLinkContainer}>
                    <Link to='/about'>About</Link>
                </li>{' '}
                <li className={Style.navLinkContainer}>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>

            <ul className={Style.IconBar}>
                <li className={Style.Search}>
                    <FontAwesomeIcon icon={faSearch} />
                </li>
                <li className={Style.Cart}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </li>
                <li className={Style.SignIn}>
                    <FontAwesomeIcon icon={faSignInAlt} />
                </li>
            </ul>
        </div>
    );

    const MoboNav = (
        <div className={Style.navContainer}>
            <div className={Style.LeftElements}>
                <div className={Style.Menu} onClick={openSidebar}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
                <div className={Style.Search}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <div className={Style.navLinkContainer + ' ' + Style.brandName}>
                <Link to='/'>H-STYLE</Link>
            </div>
            <ul className={Style.IconBar}>
                <li className={Style.Cart}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </li>
                <li className={Style.SignIn}>
                    <FontAwesomeIcon icon={faSignInAlt} />
                </li>
            </ul>
            {isSidebarOpened && <MoboBar closeNavHandler={closeNavHandler} />}
        </div>
    );
    return browserWidth > 1200 ? desktopNav : MoboNav;
};

export default Navbar;
