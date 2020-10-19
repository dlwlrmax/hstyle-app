import React from 'react';
import Style from './RadioInput.module.css';

export default function RadioInput({ changeInput, selectedInput, total1, total2, total3, total }) {
    return (
        <div className={Style.Input}>
            <div className={Style.item}>
                <input type='radio' name='all' id='all' onChange={changeInput} value='all' checked={selectedInput === 'all'} />
                <label htmlFor='all'>all ({total})</label>
            </div>
            <div className={Style.item}>
                <input type='radio' name='clothes' id='clothes' onChange={changeInput} value='clothes' checked={selectedInput === 'clothes'} />
                <label htmlFor='clothes'>Clothes ({total1})</label>
            </div>
            <div className={Style.item}>
                <input type='radio' name='jewelry' id='jewelry' onChange={changeInput} value='jewelry' checked={selectedInput === 'jewelry'} />
                <label htmlFor='jewelry'>Jewelry ({total2})</label>
            </div>
            <div className={Style.item}>
                <input type='radio' name='glasses' id='glasses' onChange={changeInput} value='glasses' checked={selectedInput === 'glasses'} />
                <label htmlFor='glasses'>Glasses ({total3})</label>
            </div>
        </div>
    );
}
