import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Jewelries.module.css';
export default function Jewelries() {
    return (
        <div className={Style.Jewelries}>
            <div className={Style.leftContent}>
                <img src='https://i.imgur.com/2qbIXyR.jpg' alt='imageCover' />
                {/* <img src='https://i.imgur.com/31yAnh0.jpg' alt='ring' /> */}
                <img src='https://i.imgur.com/ZpWBK3p.jpg' alt='smt' />
            </div>
            <div className={Style.rightContent}>
                <div className={Style.content}>
                    <div className={Style.subText}>A Trendy</div>
                    <div className={Style.mainText}>Jewelry</div>
                    <div className={Style.subText}> spot.</div>
                </div>
                <div className={Style.link}>
                    <Link to='/collections'>Collections</Link>
                    <br />
                    <Link to='Shop'>Shop</Link>
                </div>
            </div>
        </div>
    );
}
