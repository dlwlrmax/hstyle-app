import React from 'react';
import Style from './Header.module.css';
import image1 from '../../../../img/71008b98d23ec316b77716c52d851c42.jpg';
import image2 from '../../../../img/120013138_261788528304275_6889414303221423611_n.jpg';
import image3 from '../../../../img/______3.jpeg';
import image4 from '../../../../img/4(243).jpeg';
import arrow from '../../../../img/arrow.png';

export default function Header() {
    return (
        <div className={Style.Header}>
            <div className={Style.leftContent}>
                <div className={Style.image}>
                    <img src={image1} alt='image1' className='hasShadow' />
                </div>
                <div className={Style.image}>
                    <img src={image2} alt='image2' className='hasShadow' />
                </div>
            </div>
            <div className={Style.centerContent}>
                <div className={Style.lefText}>Fashion</div>

                <img src={arrow} alt='arrow' />

                <div className={Style.rightText}>Style</div>
            </div>

            <div className={Style.rightContent}>
                <div className={Style.image}>
                    <img src={image3} alt='image3' className='hasShadow' />
                </div>
                <div className={Style.image}>
                    <img src={image4} alt='image4' className='hasShadow' />
                </div>
            </div>
        </div>
    );
}
