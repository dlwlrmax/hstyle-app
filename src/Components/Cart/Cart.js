import React from 'react';
import Style from './Cart.module.css';
import Item from './Item/Item';
import { useSpring, animated } from 'react-spring';
export default function Cart({ cart, removeItem, formatNumb, toggleCart, incCount, decCount, updatePrice }) {
    const showCart = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    const total = useSpring({
        from: { val: 0 },
        to: { val: cart.reduce((sum, item) => sum + (item.quantity * item.price * (100 - item.sale)) / 100, 0) },
    });

    return (
        <animated.div className={Style.container} style={showCart}>
            <div className={Style.modal} onClick={toggleCart}></div>
            <div className={Style.Cart}>
                <div className={Style.title}>Items in your cart</div>
                <div className={Style.itemContainer}>
                    {cart.length ? (
                        cart.map(item => {
                            return (
                                <Item
                                    item={item}
                                    key={item.id}
                                    removeItem={removeItem}
                                    formatNumb={formatNumb}
                                    incCount={incCount}
                                    decCount={decCount}
                                    updatePrice={updatePrice}
                                />
                            );
                        })
                    ) : (
                        <div className={Style.noItem}>
                            <img src='https://i.pinimg.com/originals/73/8c/42/738c42927ad3573197b3ba01035fb538.gif' alt='404' />
                            <h1>Cart is empty</h1>
                        </div>
                    )}
                </div>
                {cart.length && (
                    <div className={Style.checkout}>
                        <button>Check out</button>
                        <div className={Style.TotalPrice}>
                            <span>Total: ￥</span>
                            <animated.span>{total.val.interpolate(val => Math.floor(val))}</animated.span>
                        </div>
                    </div>
                )}
            </div>
        </animated.div>
    );
}
