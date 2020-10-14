import React from 'react';
import Style from './Card.module.css';
import Item from './Item/Item';

export default function Card({ item, addItemToFav, formatNumb }) {
    return (
        <div className={Style.Item}>
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
}
