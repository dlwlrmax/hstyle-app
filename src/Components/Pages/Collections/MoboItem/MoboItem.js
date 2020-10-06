import React from 'react';
import Style from './MoboItem.module.css';
export default function MoboItem({ products }) {
    return (
        <div className={Style.MoboItem}>
            {products.map((product, index) => {
                return (
                    <div className={Style.Item} key={index}>
                        <div className={Style.image}>
                            <img src={product.image} alt='amd' />
                        </div>
                        <div className={Style.info}>
                            <div className={Style.name}>{product.name}</div>
                            <div className={Style.price}>${product.price}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
