import React from 'react';
import Style from './Cart.module.css';
import Item from './Item/Item';
export default function Cart({ cart, removeItem }) {
    return (
        <div className={Style.container}>
            <div className={Style.Cart}>
                <div className={Style.title}>Item in your cart</div>
                {cart.map(item => {
                    return <Item item={item} key={item.id} removeItem={removeItem} />;
                })}
            </div>
        </div>
    );
}
