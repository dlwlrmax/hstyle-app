import React from 'react';
import Style from './Cart.module.css';
import Item from './Item/Item';
export default function Cart({ cart, removeItem, formatNumb, toggleCart }) {
    return (
        <div className={Style.container}>
            <div className={Style.modal} onClick={toggleCart}></div>
            <div className={Style.Cart}>
                <div className={Style.title}>Items in your cart</div>
                {cart.map(item => {
                    return <Item item={item} key={item.id} removeItem={removeItem} formatNumb={formatNumb} />;
                })}
            </div>
        </div>
    );
}
