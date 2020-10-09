import React from 'react';

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
                        <div className={Style.description}>
                            <strong>Information</strong>
                            <div className={Style.text}>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi beatae molestiae at cumque
                                    architecto neque repudiandae iusto natus consequuntur error nemo maxime dolorem animi ducimus dignissimos tempore,
                                    hic dolorum! Vero maiores, illum eligendi dolor et a sequi, quibusdam repellat commodi excepturi maxime vitae
                                    nostrum distinctio deleniti? Eius, asperiores magnam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.lowerContent}>
                        <div className={Style.price}>$2132</div>
                        <div className={Style.button}>
                            <button className={Style.cartBtn}>Buy it now</button>
                            <button className={Style.cartBtn}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
