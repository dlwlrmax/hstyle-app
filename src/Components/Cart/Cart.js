import React, { useRef, useEffect } from 'react';
import Style from './Cart.module.css';
import Item from './Item/Item';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function Cart({ cart, removeItem, formatNumb, toggleCart, incCount, decCount, updatePrice, setCartVisible }) {
    // const showCart = useSpring({
    //     from: { opacity: 0 },
    //     to: { opacity: 1 },
    // });

    const total = useSpring({
        from: { val: 0 },
        to: { val: cart.reduce((sum, item) => sum + (item.quantity * item.price * (100 - item.sale)) / 100, 0) },
    });
    const onMouseEnter = () => {
        setCartVisible(true);
    };
    const container = useRef(null);
    useEffect(() => {
        console.log(container.current);
        container.current.scrollTo(0, 0);
    }, []);
    return (
        <animated.div className={Style.container}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={Style.modal}
                onClick={toggleCart}></motion.div>
            <div className={Style.Cart} onMouseEnter={onMouseEnter}>
                <div className={Style.title}>Items in your cart</div>
                <div className={Style.itemContainer} ref={container}>
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

                <div className={Style.checkout}>
                    <Link to='/checkout' onClick={() => setCartVisible(false)}>
                        Check out
                    </Link>
                    <div className={Style.TotalPrice}>
                        <span>Total: ￥</span>
                        <animated.span>{total.val.interpolate(val => Math.floor(val))}</animated.span>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}
