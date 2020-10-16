import React from 'react';
import Style from './New.module.css';
import Card from './Card/Card';

export default function New({ Items, formatNumb, addItemToFav, quickView }) {
    return (
        <div className={Style.New}>
            <div className={Style.title}>What's New?</div>
            <div className={Style.Slider}>
                {Items.map((item, index) => {
                    return (
                        <div className={Style.container} key={index}>
                            <Card item={item} addItemToFav={addItemToFav} formatNumb={formatNumb} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
