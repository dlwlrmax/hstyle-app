import React, { useState } from 'react';
import Style from './Item.module.css';
export default function Item({ item, removeItem }) {
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
                    <div className={Style.price}>{(item.price * (100 - item.sale)) / 100}</div>
                </div>
                <div className={Style.priceContainer}>
                    <div className={Style.input}>
                        <button onClick={decCount}>-</button>
                        <input type='Number' className={Style.quantity} value={quantity} onChange={updatePrice} />
                        <button onClick={incCount}>+</button>
                    </div>
                    <div className={Style.totalPrice}>{((item.price * (100 - item.sale)) / 100) * quantity}</div>
                </div>
            </div>
            <button onClick={() => removeItem(item.id)}>remove</button>
        </div>
    );
}
