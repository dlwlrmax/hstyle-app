import React from 'react';
import Style from './Sidebar.module.css';
export default function Sidebar() {
    return (
        <div className={Style.Sidebar}>
            <div className={Style.text}>Filter what you like</div>
            <div className={Style.Filter}>
                <fieldset className={Style.Category}>
                    <div className={Style.title}>Category</div>
                    <div className={Style.item}>
                        <input type='radio' name='clothes' id='clothes' />
                        <label htmlFor='clothes'>Clothes (12)</label>
                    </div>
                    <div className={Style.item}>
                        <input type='radio' name='jewelry' id='jewelry' />
                        <label htmlFor='jewelry'>Jewelry (32)</label>
                    </div>
                    <div className={Style.item}>
                        <input type='radio' name='glasses' id='glasses' />
                        <label htmlFor='glasses'>Glasses (11)</label>
                    </div>
                </fieldset>
                <fieldset className={Style.price}>
                    <div className={Style.title}>Price</div>
                    <div className={Style.item}>
                        <input type='radio' name='u100' id='u100' />
                        <label htmlFor='u100'>$100- (21)</label>
                    </div>
                    <div className={Style.item}>
                        <input type='radio' name='100t200' id='100t200' />
                        <label htmlFor='100t200'>$100 - $200 (12)</label>
                    </div>
                    <div className={Style.item}>
                        <input type='radio' name='200' id='200' />
                        <label htmlFor='200'>$200+ (11)</label>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}
