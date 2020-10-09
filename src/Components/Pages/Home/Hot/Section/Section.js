import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Section.module.css';

export default function Section({ images, title }) {
    return (
        <div className={Style.Section}>
            <div className={Style.side}>
                {' '}
                <div className={Style.Title}>{title}</div>
                <Link to='/shop'>More {'>'}</Link>
            </div>
            <div className={Style.Items}>
                {images.map((image, index) => {
                    return (
                        <div className={Style.Item} key={index}>
                            <div className={Style.image}>
                                <img src={image} alt='dim' />
                                <div className={Style.like}>
                                    <FontAwesomeIcon icon={emptyHeart} />
                                </div>
                            </div>
                            <div className={Style.info}>
                                <div className={Style.itemName}>Goache</div>
                                <div className={Style.description}>Lorem ipsum dolor sit amet consectetur</div>
                                <div className={Style.price}>
                                    <div className={Style.sale}>
                                        <span>2032</span>
                                        <span className={Style.fullPrice}>2222</span>
                                    </div>
                                    <div className={Style.percent}>10%</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
