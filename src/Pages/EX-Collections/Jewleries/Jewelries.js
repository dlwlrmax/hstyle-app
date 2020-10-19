import React, { useState, useEffect } from 'react';
import Items from '../Items/Items';
import MoboItem from '../MoboItem/MoboItem';
import Style from './Jewelries.module.css';
const arrow = (
    <svg
        version='1.1'
        id='Capa_1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0 512 512'
        style={{ enableBackground: 'new 0 0 512 512' }}
        xmlSpace='preserve'>
        <g>
            <g>
                <path
                    d='M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z'
                />
            </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
    </svg>
);
export default function Jewelries({ products }) {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

    const sizeChangeHandler = () => {
        setBrowserWidth(window.innerWidth);
        // //console.log(browserWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', sizeChangeHandler);
        // sizeChangeHandler();
        return () => window.removeEventListener('resize', sizeChangeHandler);
    });

    const desktop = (
        <div className={Style.Jewelries}>
            <div className={Style.TitleWrapper}>
                <div className={Style.Title}>
                    <div className={Style.upperText}>Fresh your look with our</div>
                    <div className={Style.productType}>Clothes</div>
                    <div className={Style.lowerText}>designs</div>
                </div>
            </div>
            <div className={Style.Content}>
                <div className={Style.contentWrapper}>
                    <Items products={products} />
                    <div className={Style.goToShop}>
                        <div className={Style.text}>Shop</div>
                        <div className={Style.icon}>{arrow}</div>
                    </div>
                </div>
            </div>
        </div>
    );
    const mobile = (
        <div className={Style.MoboClothing}>
            <div className={Style.text}>
                <div className={Style.upperText}>Fresh your look with our</div>
                <div className={Style.productType}>Clothes</div>
                <div className={Style.lowerText}>designs</div>
            </div>
            <MoboItem products={products} />
        </div>
    );
    return browserWidth > 1024 ? desktop : mobile;
}
