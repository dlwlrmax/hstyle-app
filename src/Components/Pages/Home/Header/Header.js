import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Header.module.css';
import Slider from '@farbenmeer/react-spring-slider';
export default function Header() {
    return (
        <div className={Style.Header}>
            <Slider hasBullets auto={5000}>
                <div className={Style.banner}>
                    <img src='https://i.imgur.com/UYKC1V7.jpg' alt='banner1' />
                    <div className={Style.backdrop}></div>
                    <div className={Style.bannerText + ' ' + Style.white}>
                        <div className={Style.textContainer}>
                            <div className={Style.label}>New collection available</div>
                            <div className={Style.mainText}> I J.ESTINA U</div>
                            <div className={Style.subText}>2020 FW Collection</div>
                        </div>
                        <div className={Style.button}>
                            <Link to='/Shop' className={Style.btn}>
                                Buy It Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={Style.banner}>
                    <img src='https://i.imgur.com/oIyPNEV.png' alt='banner1' />
                    <div className={Style.backdrop}></div>
                    <div className={Style.bannerText}>
                        <div className={Style.textContainer}>
                            <div className={Style.label}>New collection available</div>
                            <div className={Style.mainText}>IU x H-Style</div>
                            <div className={Style.subText}>2020 FW Collection</div>
                        </div>
                        <div className={Style.button}>
                            <Link to='/Shop' className={Style.btn}>
                                Buy It Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={Style.banner}>
                    <img src='https://i.imgur.com/s2voK9s.jpg' alt='banner1' />
                    <div className={Style.backdrop}></div>
                    <div className={Style.bannerText}>
                        <div className={Style.textContainer}>
                            <div className={Style.label}>New collection available</div>
                            <div className={Style.mainText}>VEDI VERO</div>
                            <div className={Style.subText}>2020 FW Collection</div>
                        </div>
                        <div className={Style.button}>
                            <Link to='/Shop' className={Style.btn}>
                                Buy It Now
                            </Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
