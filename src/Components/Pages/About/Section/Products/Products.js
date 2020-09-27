import React, { useState, useEffect } from 'react';
import './Products.css';
import clothing from '../../../../../img/clothing-thum.png';
import jew from '../../../../../img/jew-thum.png';
import glasses from '../../../../../img/glass-thum.png';

const Products = props => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const widthChangeHandler = () => {
        //console.log(windowWidth);
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', widthChangeHandler);
    });
    let _product = (
        <div className='product-layout'>
            <div className='home-product hvr-grow-rotate clothing'>
                <div className='product-container hasBorder'>
                    <img src={clothing} alt='clothing'></img>
                    <div className='product-name'>
                        <p>Clothing</p>
                    </div>
                </div>
            </div>
            <div className='product-group'>
                <div className='home-product hvr-grow-rotate glasses'>
                    <div className='product-container hasBorder'>
                        <img src={glasses} alt='glasses'></img>
                        <div className='product-name'>
                            <p>Glasses</p>
                        </div>
                    </div>
                </div>
                <div className='home-product hvr-grow-rotate jew'>
                    <div className='product-container hasBorder'>
                        <div className='product-name'>
                            <p>Jewelries</p>
                        </div>
                        <img src={jew} alt='jew'></img>
                    </div>
                </div>
            </div>
        </div>
    );
    if (windowWidth <= 1024) {
        _product = (
            <div className='product-layout'>
                <div className='home-product hvr-grow-rotate clothing'>
                    <div className='product-container hasBorder'>
                        <img src={clothing} alt='clothing'></img>
                        <div className='product-name'>
                            <p>Clothing</p>
                        </div>
                    </div>
                </div>
                <div className='home-product hvr-grow-rotate glasses'>
                    <div className='product-container hasBorder'>
                        <img src={glasses} alt='glasses'></img>
                        <div className='product-name'>
                            <p>Glasses</p>
                        </div>
                    </div>
                </div>
                <div className='home-product hvr-grow-rotate jew'>
                    <div className='product-container hasBorder'>
                        <div className='product-name'>
                            <p>Jewelries</p>
                        </div>
                        <img src={jew} alt='jew'></img>
                    </div>
                </div>
            </div>
        );
    }
    return _product;
};

export default Products;
