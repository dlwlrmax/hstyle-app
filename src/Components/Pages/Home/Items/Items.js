import React, { useState, useRef } from 'react';
import Image from './Image/Image';
import Style from './Item.module.css';

export default function Items({ products }) {
    const [index, setProductIndex] = useState(2);
    const ref = useRef(null);

    const [cursor, setCursor] = useState('');

    const setCursorLeft = () => {
        if (index === 0) {
            return;
        }
        setCursor('CursorLeft');
    };
    const setCursorRight = () => {
        if (index === products.length - 1) {
            return;
        }
        setCursor('CursorRight');
    };
    const resetCursor = () => {
        setCursor('');
    };

    const nextItem = () => {
        if (index === products.length - 1) {
            resetCursor();
            return;
        }
        let newIndex = index;
        newIndex++;
        if (newIndex === products.length - 1) {
            resetCursor();
        }
        setProductIndex(newIndex);
    };

    const prvItem = () => {
        if (index === 0) {
            resetCursor();
            return;
        }
        let newIndex = index;
        newIndex--;
        if (newIndex === 0) {
            resetCursor();
        }
        setProductIndex(newIndex);
    };
    return (
        <div className={Style.Items + ' ' + cursor} ref={ref}>
            <div className={Style.itemContainer}>
                <div className={Style.itemInfo}>
                    <div className={Style.upperInfo}>
                        <div className={Style.itemName}>{products[index].name}</div>

                        <div className={Style.itemCollection}>{products[index].collection}</div>
                    </div>
                    <div className={Style.prvItem} onMouseEnter={setCursorLeft} onMouseOut={resetCursor} onClick={prvItem}></div>
                    <div className={Style.lowerInfo}>
                        <div className={Style.itemPrice}>${products[index].price}</div>
                        <div className={Style.cartBtn}>
                            <button className={Style.btn}>
                                <p>Add to cart</p>
                            </button>
                        </div>
                    </div>
                </div>
                <Image image={products[index].image} />
                <div className={Style.nxtItem} onMouseEnter={setCursorRight} onMouseOut={resetCursor} onClick={nextItem}></div>
            </div>
        </div>
    );
}
