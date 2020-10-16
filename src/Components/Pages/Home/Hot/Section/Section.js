import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../New/Card/Card';
import Style from './Section.module.css';

export default function Section({ Items, title, image, formatNumb, addItemToFav }) {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
    const [data, setData] = useState([]);

    const [limit, setLimit] = useState(4);

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
            setLimit(3);
        } else {
            setLimit(4);
        }
    };

    useEffect(() => {
        const newData = Items.filter(item => item.category === title);
        if (newData.length > limit) {
            newData.splice(limit, newData.length - limit);
        }
        setData(newData);
    }, [Items, limit, title]);

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
                        <div className={Style.container} key={index}>
                            <Card item={item} addItemToFav={addItemToFav} formatNumb={formatNumb} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
