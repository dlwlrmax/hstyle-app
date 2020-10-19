import React from 'react';
import Style from './RadioInput.module.css';

export default function RadioInput({ changeInput, selectedInput, total1, total2, total3, total }) {
    return (
        <div className={Style.Input}>
            <div className={Style.item}>
                <input type='radio' name='category' id='all' onChange={changeInput} value='all' checked={selectedInput === 'all'} />
                <label htmlFor='all'>all</label>
            </div>
            <div className={Style.item}>
                <input type='radio' name='category' id='clothes' onChange={changeInput} value='clothes' checked={selectedInput === 'clothes'} />
                <label htmlFor='clothes'>Clothes </label>
            </div>
            <div className={Style.item}>
                <input type='radio' name='category' id='jewelry' onChange={changeInput} value='jewelry' checked={selectedInput === 'jewelry'} />
                <label htmlFor='jewelry'>Jewelry </label>
            </div>
            <div className={Style.item}>
                <input type='radio' name='category' id='glasses' onChange={changeInput} value='glasses' checked={selectedInput === 'glasses'} />
                <label htmlFor='glasses'>Glasses </label>
            </div>
        </div>
    );
}
