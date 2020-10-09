import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Glasses.module.css';
export default function Glasses() {
    return (
        <div className={Style.Glasses}>
            <div className={Style.background}></div>
            <div className={Style.leftContent}>
                <div className={Style.mainImage}>
                    <img src='https://i.imgur.com/zuQ8C0Rh.jpg' alt='iu' />
                </div>
                {/* <div className={Style.subImage}>
                    <img src='https://i.imgur.com/GPzfGOC.png' alt='glasses' />
                </div> */}
            </div>
            <div className={Style.rightContent}>
                <div className={Style.link}>
                    <Link to='/collections'>Collections</Link>
                    <br />
                    <Link to='/Shop'>Shop</Link>
                </div>
                <div className={Style.lowerContent}>
                    <div className={Style.subText}>Look hot with cool</div>
                    <div className={Style.mainText}>Glasses.</div>
                </div>
            </div>
        </div>
    );
}
