import React from 'react';
import './Header.css';

import ScrollIndicator from './ScrollIndicator/ScrollIndicator';

import HeaderLeftImage from '../../../../img/background.png';
import HeaderRightImage from '../../../../img/background3.png';
import HeaderCenterImage from '../../../../img/header-center.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <div className='image-layout'>
                <div className='left-image'>
                    <img src={HeaderLeftImage} alt='left header'></img>
                </div>
                <div className='center-image'>
                    <img src={HeaderCenterImage} alt='center header'></img>
                </div>
                <div className='right-image'>
                    <img src={HeaderRightImage} alt='right header'></img>
                </div>
            </div>
            <div className='slogan'>
                <blockquote>
                    “Be my <strong>fashionista</strong>.”
                    <div className='author'>- Elisha Horn</div>
                </blockquote>
            </div>
            <div className='discover'>
                <div className='btn-container'>
                    <Link to='/shop'>
                        <button className='btn shop-now hvr-bob'>Shop Now</button>
                    </Link>
                    <ScrollIndicator />
                </div>
            </div>
        </div>
    );
};

export default Header;
