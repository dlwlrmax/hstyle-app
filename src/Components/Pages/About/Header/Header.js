import React from 'react';
import './Header.css';

import HeaderLeftImage from '../../../../img/background.png';
import HeaderRightImage from '../../../../img/background3.png';
import HeaderCenterImage from '../../../../img/header-center.png';
import Style from './Header.module.css';
import arrow from '../../../../img/arrow.png';

const Header = () => {
    return (
        <div className='Header'>
            <div className={Style.centerContent}>
                <div className={Style.lefText}>About us</div>

                <img src={arrow} alt='arrow' />
            </div>
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
        </div>
    );
};

export default Header;
