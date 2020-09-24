import React from 'react';
import Arrow from '../../../../img/arrow.png';
import cum1 from '../../../../img/cum1.png';
import cum2 from '../../../../img/cum2.png';
import cum3 from '../../../../img/cum3.png';

import Style from './Clothing.module.css';

const Clothing = () => {
    return (
        <div className='Clothing'>
            <div className='content-container'>
                <div className='text-container'>
                    {' '}
                    <div className='text'>The Collections</div>
                    <img src={Arrow} alt='arrow' />
                </div>
                <div className={Style.collectionItem}>
                    <div className='item small'>
                        <img src={cum1} alt='cum1' />
                    </div>
                    <div className='item big'>
                        <img src={cum3} alt='cum3' />
                    </div>
                    <div className='item small'>
                        <img src={cum2} alt='cum2' />
                    </div>
                </div>
            </div>
            <div className='side-header'>
                <div className='side-bg'>Clothing</div>
            </div>
        </div>
    );
};

export default Clothing;
