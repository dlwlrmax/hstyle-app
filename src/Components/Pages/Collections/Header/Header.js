import React from 'react';
import image1 from '../../../../img/______2.jpeg';
import image2 from '../../../../img/64427024gy1ghus5wbe40j22bc4457wj.png';
import image3 from '../../../../img/8a7afb288a57216c47c4a521525c23ba.jpg';
import arrow from '../../../../img/arrow.png';

import Style from './Header.module.css';

const Header = () => {
    return (
        <div className={Style.Header}>
            <div className={Style.text}>
                <div className={Style.collection}>
                    Collections
                    <img src={arrow} alt='arrow'></img>
                </div>
                <ul className={Style.category}>
                    <li>Clothing</li>
                    <li>Glasses</li>
                    <li>Jewelries</li>
                </ul>
            </div>
            <div className={Style.image}>
                <div className={Style.box}></div>
                <div className={Style.imageLayout}>
                    <div className={Style.first}>
                        <img src={image1} alt='hey' className={Style.img}></img>
                    </div>
                    <div className={Style.second}>
                        <img src={image2} alt='hey' className={Style.img}></img>
                    </div>
                    <div className={Style.last}>
                        <img src={image3} alt='hey' className={Style.img}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
