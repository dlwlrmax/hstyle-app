import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from '../../New/Card/Item/Item';
import Style from './Section.module.css';

export default function Section({ title, image, formatNumb }) {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
    const [data, setData] = useState([]);

    let limit = 4;

    useEffect(() => {
        window.addEventListener('resize', changeWidth);
        changeWidth();
        return () => window.removeEventListener('resize', changeWidth);
    });

    const changeWidth = () => {
        setBrowserWidth(window.innerWidth);
        changeDataLimit();
    };

    const changeDataLimit = () => {
        if (browserWidth <= 1400) {
            limit = 3;
        } else {
            limit = 4;
        }
    };

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://h-style-data.herokuapp.com/products?sort=date&&order=desc%&&_page=1&_limit=${limit}&&q=${title}`);
            const data = await res.json();
            console.log(data);
            setData(data);
        }
        getData();
    }, [title, limit, browserWidth]);

    const addItemToFav = id => {
        const currIndex = data.findIndex(item => item.id === id);
        let newData = [...data];
        newData[currIndex].isFav = !newData[currIndex].isFav;
        setData(newData);
    };
    return (
        <div className={Style.Section}>
            <div className={Style.side}>
                <img src={image} alt='images' />
                <div className={Style.linkContainer}>
                    <Link to={'/' + { title }}>{title}</Link>
                </div>
            </div>
            <div className={Style.Items}>
                {data.map((item, index) => {
                    return (
                        <div className={Style.Item} key={index}>
                            <Item item={item} addItemToFav={addItemToFav} />
                            <div className={Style.info}>
                                <div className={Style.itemName}>{item.name}</div>
                                <div className={Style.description}>{item.desc}</div>
                                <div className={Style.price}>
                                    <div className={Style.sale}>
                                        <span>{formatNumb((item.price * (100 - item.sale)) / 100)}</span>
                                        <span className={Style.fullPrice}>{formatNumb(item.price)}</span>
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
