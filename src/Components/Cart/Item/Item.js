import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated } from 'react-spring';
import React from 'react';
import Style from './Item.module.css';
export default function Item({ item, removeItem, formatNumb, incCount, decCount, updatePrice }) {
    const total = useSpring({
        from: { val: 0 },
        to: { val: ((item.price * (100 - item.sale)) / 100) * item.quantity },
    });
    return (
        <div className={Style.Item}>
            <div className={Style.leftContent}>
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
                            <button className={Style.btn} onClick={() => decCount(item)}>
                                -
                            </button>
                            <input type='Number' className={Style.quantity} value={item.quantity} onChange={e => updatePrice(e, item)} />
                            <button className={Style.btn} onClick={() => incCount(item)}>
                                +
                            </button>
                        </div>
                        <div className={Style.totalPrice}>
                            <span>￥</span>
                            <animated.span>{total.val.interpolate(val => Math.floor(val))}</animated.span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.remove}>
                {' '}
                <FontAwesomeIcon icon={faMinusCircle} onClick={() => removeItem(item.id)} />
            </div>
        </div>
    );
}
