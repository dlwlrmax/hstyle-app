import React, { useState, useEffect } from 'react';
import RadioInput from './RadioInput/RadioInput';
import Style from './Sidebar.module.css';
export default function Sidebar({ Items, getFilter, filterItems }) {
    const [clothes, setClothes] = useState(0);
    const [glasses, setGlasses] = useState(0);
    const [jewelry, setJewelry] = useState(0);

    useEffect(() => {
        getTotalClothes();
        getTotalGlasses();
        getTotalJewelry();
    });

    const getTotalClothes = () => {
        const _clothes = Items.filter(item => item.category === 'clothes');
        setClothes(_clothes.length);
    };
    const getTotalGlasses = () => {
        const _glasses = Items.filter(item => item.category === 'glasses');
        setGlasses(_glasses.length);
    };
    const getTotalJewelry = () => {
        const _jewelry = Items.filter(item => item.category === 'jewelry');
        setJewelry(_jewelry.length);
    };
    const [selectedInput, setSelectedInput] = useState('all');

    const changeInput = e => {
        setSelectedInput(e.target.value);
        getFilter(e);
    };

    return (
        <div className={Style.Sidebar}>
            <div className={Style.text}>Filter what you like</div>
            <div className={Style.Filter}>
                <fieldset className={Style.Category}>
                    <div className={Style.title}>Category</div>
                    <RadioInput
                        changeInput={changeInput}
                        selectedInput={selectedInput}
                        total1={clothes}
                        total2={jewelry}
                        total3={glasses}
                        total={Items.length}
                    />
                </fieldset>
                <fieldset className={Style.price}>
                    <div className={Style.title}>Price</div>
                </fieldset>
            </div>
        </div>
    );
}
