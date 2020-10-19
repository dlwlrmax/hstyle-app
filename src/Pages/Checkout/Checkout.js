import { Button } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Item from '../../Components/Cart/Item/Item';
import AddressForm from './AddressForm/AddressForm';
import Style from './Checkout.module.css';
export default function Checkout({ cart, removeItem, formatNumb, toggleCart, incCount, decCount, updatePrice }) {
    const total = useSpring({
        from: { val: 0 },
        to: { val: cart.reduce((sum, item) => sum + (item.quantity * item.price * (100 - item.sale)) / 100, 0) },
    });
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={Style.Checkout}>
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
            </div>
            <div className={Style.right}>
                <div className={Style.checkout}>
                    <div className={Style.TotalPrice}>
                        <span>Total: ￥</span>
                        <animated.span>{total.val.interpolate(val => Math.floor(val))}</animated.span>
                    </div>
                </div>

                <div className={Style.content}>
                    <AddressForm />
                </div>
                <Button variant='contained'>Place your order</Button>
            </div>
        </motion.div>
    );
}
