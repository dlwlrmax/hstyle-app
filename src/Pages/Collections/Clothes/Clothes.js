import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Clothes.module.css';

export default function Clothes() {
    return (
        <div className={Style.Clothes}>
            <div className={Style.backgroundText}>H-STYLE</div>
            <div className={Style.leftContent}>
                <div className={Style.upperContent}>
                    <div className={Style.slogan}>A new Looook</div>
                    <div className={Style.collection}>FW 2020 Collection</div>
                </div>
                <div className={Style.link}>
                    <Link to='/collections'>Collections</Link>
                    <br />
                    <Link to='/Shop'>Shop</Link>
                </div>
                <div className={Style.lowerContent}>
                    <div className={Style.subText}>Expect more from your</div>
                    <div className={Style.mainText}>Clothes.</div>
                </div>
            </div>

            <div className={Style.rightContent}>
                <div className={Style.imageContainer}>
                    <img src='https://i.imgur.com/7BLnd0n.png' alt='anh' />
                </div>
            </div>
        </div>
    );
}
