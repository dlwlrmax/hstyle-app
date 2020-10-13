import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Style from './Section.module.css';

export default function Section({ title }) {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
    const [data, setData] = useState([]);
    useEffect(() => {
        window.addEventListener('resize', changeWidth);
        changeWidth();
        return () => window.removeEventListener('resize', changeWidth);
    });
    const changeWidth = () => {
        setBrowserWidth(window.innerWidth);
        console.log(browserWidth);
    };

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://h-style-data.herokuapp.com/products?sort=date&&order=desc%&&_page=1&_limit=4&&q=${title}`);
            const data = await res.json();
            console.log(data);
            setData(data);
        }
        getData();
    }, [title]);
    return (
        <div className={Style.Section}>
            <div className={Style.side}>
                <img src='https://i.imgur.com/s191gRTh.jpg' alt='images' />
                <div className={Style.linkContainer}>
                    <Link to={'/' + { title }}>{title}</Link>
                </div>
            </div>
            <div className={Style.Items}>
                {data.map((item, index) => {
                    return (
                        <div className={Style.Item} key={index}>
                            <div className={Style.image}>
                                <img src={item.thumb} alt='dim' />
                                <div className={Style.like}>
                                    <FontAwesomeIcon icon={emptyHeart} />
                                </div>
                            </div>
                            <div className={Style.info}>
                                <div className={Style.itemName}>{item.name}</div>
                                <div className={Style.description}>{item.desc}</div>
                                <div className={Style.price}>
                                    <div className={Style.sale}>
                                        <span>{(item.price * (100 - item.sale)) / 100}</span>
                                        <span className={Style.fullPrice}>{item.price}</span>
                                    </div>
                                    <div className={Style.percent}>{item.sale}%</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
