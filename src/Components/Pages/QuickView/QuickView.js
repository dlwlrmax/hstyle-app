import React, { useEffect, useState } from 'react';

import Style from './QuickView.module.css';
export default function QuickView({ match, addItemToFav }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(match);
        const getData = async () => {
            const res = await fetch(`https://h-style-data.herokuapp.com/products/${match.params.id}`);
            const data = await res.json();
            setData(data);

            console.log(data.image[1]);
        };
        getData();
    }, [match]);

    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className={Style.ProductDetail}>
            <div className={Style.goBack}>
                <div className={Style.line}></div>
                <div className={Style.backBtn}> Back To Shopping</div>
            </div>
            <div className={Style.Content}>
                {data.image ? (
                    <div className={Style.ProductImage}>
                        <div className={Style.thumb}>
                            {data.image.map((item, index) => {
                                return (
                                    <div className={Style.imageContainer} key={index} onClick={() => setCurrentImage(index)}>
                                        <img src={item} alt='he' />
                                    </div>
                                );
                            })}
                        </div>
                        <div className={Style.mainImage}>
                            <img src={data.image[currentImage]} alt='he' />
                        </div>
                    </div>
                ) : null}
                <div className={Style.productInfo}>
                    <div className={Style.upperContent}>
                        {' '}
                        <div className={Style.Name}>{data.name}</div>
                        <div className={Style.Collection}>{data.collection}</div>
                    </div>
                    <div className={Style.centerContent}>
                        <div className={Style.description}>
                            <strong>Information</strong>
                            <div className={Style.text}>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.lowerContent}>
                        <div className={Style.price}>${data.price}</div>
                        <div className={Style.button}>
                            <button className={Style.cartBtn}>Buy it now</button>
                            <button className={Style.cartBtn} onClick={() => addItemToFav(match.params.id)}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
