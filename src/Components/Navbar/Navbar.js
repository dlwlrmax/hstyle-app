import React, { useState, useEffect } from 'react';
import Style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faSearch, faShoppingCart, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import MoboBar from './MoboBar/MoboBar';
import { useSpring, animated } from 'react-spring';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = ({ cart, showCart, isScrollUp, isCartVisible }) => {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
    const [isSidebarOpened, setSideBar] = useState(false);
    const [totalItem, setTotalItem] = useState(0);

    useEffect(() => {
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        setTotalItem(total);
    }, [cart]);

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

    //animation
    const showNav = useSpring({ top: isScrollUp || isCartVisible ? 0 : -100 });

    const desktopNav = (
        <animated.div style={showNav} className={isScrollUp || isCartVisible ? Style.navContainerStick : Style.navContainer}>
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
                <li className={Style.Cart} onClick={showCart}>
                    <FontAwesomeIcon icon={faShoppingCart} /> <span>{totalItem}</span>
                </li>
                <li className={Style.SignIn}>
                    <FontAwesomeIcon icon={faSignInAlt} />
                </li>
            </ul>
        </animated.div>
    );

    const MoboNav = (
        <animated.div style={showNav} className={isScrollUp || isCartVisible ? Style.navContainerStick : Style.navContainer}>
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
                <li className={Style.Cart} onClick={showCart}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>{totalItem}</span>
                </li>
                <li className={Style.SignIn}>
                    <FontAwesomeIcon icon={faSignInAlt} />
                </li>
            </ul>
            <AnimatePresence>
                {isSidebarOpened && (
                    <motion.div
                        initial={{ opacity: 0, position: 'fixed', zIndex: 1000, width: '100%', x: '-10%', top: 0, left: 0 }}
                        animate={{ opacity: 1, x: '0%' }}
                        exit={{ opacity: 0, x: '-10%' }}>
                        <MoboBar closeNavHandler={closeNavHandler} />
                    </motion.div>
                )}
            </AnimatePresence>
        </animated.div>
    );
    return browserWidth > 1200 ? desktopNav : MoboNav;
};

export default Navbar;
