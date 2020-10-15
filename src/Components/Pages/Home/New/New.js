import React, { useEffect, useState } from 'react';
import Style from './New.module.css';
import Card from './Card/Card';

export default function New({ formatNumb, addItemToFav }) {
    const [Items, setItems] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await fetch('https://h-style-data.herokuapp.com/products?sort=date&&order=desc&&_page=1&_limit=5');
            const data = await res.json();
            console.log(data);
            setItems(data);
        }
        getData();
    }, []);

    return (
        <div className={Style.New}>
            <div className={Style.title}>What's New?</div>
            <div className={Style.Slider}>
                {Items.map((item, index) => {
                    return <Card key={index} item={item} addItemToFav={addItemToFav} formatNumb={formatNumb} />;
                })}
            </div>
        </div>
    );
}
