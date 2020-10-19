import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Card.module.css';
import Item from './Item/Item';

export default function Card({ item, addItemToFav, formatNumb, quickView }) {
    return (
        <div className={Style.Item}>
            <Item item={item} addItemToFav={addItemToFav} />
            <div className={Style.info}>
                <Link to={`/product/${item.id}`} className={Style.itemName}>
                    {item.name}
                </Link>
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
}
