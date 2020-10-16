import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Style from './Item.module.css';
export default function Item({ item, removeItem, formatNumb }) {
    const [quantity, setQuantity] = useState(1);
    const updatePrice = e => {
        setQuantity(e.target.value);
    };
    const incCount = () => {
        let _quantity = quantity;
        _quantity++;
        setQuantity(_quantity);
    };
    const decCount = () => {
        let _quantity = quantity;

        if (_quantity === 1) {
            return;
        }
        _quantity--;
        setQuantity(_quantity);
    };
    return (
        <div className={Style.Item}>
            <div className={Style.image}>
                <img src={item.thumb} alt='thumb' />
            </div>
            <div className={Style.cartContent}>
                <div className={Style.itemInfo}>
                    <div className={Style.name}>{item.name}</div>
                </div>
                <div className={Style.priceContainer}>
                    <div className={Style.price}>{formatNumb((item.price * (100 - item.sale)) / 100)}</div>
                    <div className={Style.input}>
                        <button className={Style.btn} onClick={decCount}>
                            -
                        </button>
                        <input type='Number' className={Style.quantity} value={quantity} onChange={updatePrice} />
                        <button className={Style.btn} onClick={incCount}>
                            +
                        </button>
                    </div>
                    <div className={Style.totalPrice}>{formatNumb(((item.price * (100 - item.sale)) / 100) * quantity)}</div>
                </div>
            </div>
            <div className={Style.remove}>
                {' '}
                <FontAwesomeIcon icon={faMinusCircle} onClick={() => removeItem(item.id)} />
            </div>
        </div>
    );
}
