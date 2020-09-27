import React from 'react';
import Style from './Clothing.module.css';
import Arrow from '../../../../img/right-arrow.svg';

export default function Clothing() {
    return (
        <div className={Style.Clothing}>
            <div className={Style.TitleWrapper}>
                <div className={Style.Title}>
                    <div className={Style.upperText}>Fresh your look with our</div>
                    <div className={Style.productType}>Clothing</div>
                    <div className={Style.lowerText}>designs</div>
                </div>
            </div>
            <div className={Style.Content}>
                <div className={Style.Items}>
                    <div className={Style.itemContainer}>
                        <div className={Style.itemInfo}>
                            <div className={Style.upperInfo}>
                                <div className={Style.itemName}>Item Name</div>
                                <div className={Style.itemCollection}>Item Collection</div>
                            </div>
                            <div className={Style.lowerInfo}>
                                <div className={Style.itemPrice}>$223.2</div>
                                <div className={Style.cartBtn}>
                                    <button className={Style.cartBtn}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.goToShop}>
                    <div className={Style.text}>Shop</div>
                    <div className={Style.icon}>
                        <img src={Arrow} alt='Arrow' />
                    </div>
                </div>
            </div>
        </div>
    );
}
