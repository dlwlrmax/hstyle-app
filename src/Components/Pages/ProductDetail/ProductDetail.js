import React from 'react';
import Image from '../Home/Items/Image/Image';
import Style from './ProductDetail.module.css';
export default function ProductDetail() {
    return (
        <div className={Style.ProductDetail}>
            <div className={Style.goBack}>
                <div className={Style.line}></div>
                <div className={Style.backBtn}>Go Back</div>
            </div>
            <div className={Style.Content}>
                <div className={Style.ProductImage}>
                    <div className={Style.imageContainer}>
                        <img src='https://i.imgur.com/5zjSstu.jpg' alt='he' />
                    </div>
                    <div className={Style.mainImage}>
                        <img src='https://i.imgur.com/5zjSstu.jpg' alt='he' />
                    </div>
                    <div className={Style.imageContainer}>
                        <img src='https://i.imgur.com/5zjSstu.jpg' alt='he' />
                    </div>
                </div>
                <div className={Style.productInfo}>
                    <div className={Style.upperContent}>
                        {' '}
                        <div className={Style.Name}>Product 1</div>
                        <div className={Style.Collection}>Collection 1</div>
                    </div>
                    <div className={Style.centerContent}>
                        <button>-</button>
                        <input type='number' defaultValue={1} />
                        <button>+</button>
                    </div>
                    <div className={Style.lowerContent}>
                        <div className={Style.price}>$2132</div>
                        <button className={Style.cartBtn}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
