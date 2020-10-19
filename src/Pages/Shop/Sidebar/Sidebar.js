import React, { useState, useEffect } from 'react';
import RadioInput from './RadioInput/RadioInput';
import Style from './Sidebar.module.css';
import { useHistory } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';

export default function Sidebar({ Items, getQuery }) {
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
    const history = useHistory();
    const changeInput = e => {
        setSelectedInput(e.target.value);
        history.push(`?${e.target.name}=${e.target.value}`);
        if (e.target.value === 'all') {
            getQuery('?');
        } else {
            getQuery(window.location.search);
        }

        console.log(typeof window.location.search);
    };
    const [value, setValue] = React.useState([0, 400]);

    const handleChange = (e, newValue) => {
        setValue(newValue);
        history.push(`?&&price=${value[0]}-${value[1]}`);
    };
    const valuetext = value => {
        return `${value}`;
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
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay='auto'
                        aria-labelledby='range-slider'
                        getAriaValueText={valuetext}
                        min={0}
                        max={400}
                    />
                </fieldset>
            </div>
        </div>
    );
}
