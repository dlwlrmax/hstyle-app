import React, { useEffect, useState } from 'react';
import Card from '../../Home/New/Card/Card';
import Style from './Related.module.css';
export default function Related(addItemToFav, formatNumb, match) {
    const [data, setData] = useState([]);
    const [item, setItem] = useState([]);
    useEffect(() => {
        //console.log(match);
        const getItem = async () => {
            const res = await fetch(`https://h-style-data.herokuapp.com/products/${match.params.id}`);
            const data = await res.json();
            setItem(data);
        };
        getItem();
        const getData = async () => {
            const res = await fetch(`https://h-style-data.herokuapp.com/products?category=${item.category}`);
            const data = await res.json();
            setData(data);
        };
        getData();

        // const filter = () => {
        //     const _data = [];
        //     for (let i = 0; i < 4; i++) {
        //         _data.push(data[i]);
        //     }
        //     setData(_data);
        // };
        // filter();
        console.log(data);
    }, [data, item, match]);

    return (
        <div className={Style.Related}>
            <div className={Style.Title}>Related Items</div>
            <div className={Style.Items}>
                {data &&
                    data.map((item, index) => {
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
