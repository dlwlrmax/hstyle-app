import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Style from './MoboBar.module.css';
import Avatar from '../../../img/IU.jpeg';

export default function MoboBar(props) {
    return (
        <div className={Style.MoboBarContainer}>
            <div className={Style.MoboNavbar}>
                <div className={Style.CloseIcon}>
                    <FontAwesomeIcon icon={faTimesCircle} onClick={props.closeNavHandler} />
                </div>
                <div className={Style.user}>
                    <div className={Style.avt}>
                        <img src={Avatar} alt='Style.avatar' />
                    </div>
                    <div className={Style.usrInfo}>
                        <div className={Style.usrName}>dlwlrmax</div>
                        <div className={Style.usrEmail}>dlwlrmax@gmail.com</div>
                    </div>
                </div>
                <ul className={Style.NavLink}>
                    <li className={Style.MoboNavLinkContainer}>
                        <Link onClick={props.closeNavHandler} to='/'>
                            Home
                        </Link>
                    </li>{' '}
                    <li className={Style.MoboNavLinkContainer}>
                        <Link to='/collections' onClick={props.closeNavHandler}>
                            Collections
                        </Link>
                    </li>{' '}
                    <li className={Style.MoboNavLinkContainer}>
                        <Link to='/shop' onClick={props.closeNavHandler}>
                            Shop
                        </Link>
                    </li>{' '}
                    <li className={Style.MoboNavLinkContainer}>
                        <Link to='/about' onClick={props.closeNavHandler}>
                            About
                        </Link>
                    </li>{' '}
                    <li className={Style.MoboNavLinkContainer}>
                        <Link to='/contact' onClick={props.closeNavHandler}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
