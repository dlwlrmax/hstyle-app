import React from 'react';
import Clothing from './Clothing/Clothing';
import Header from './Header/Header';

const Collections = () => {
    document.title = 'H-STYLE Collections';
    return (
        <div className='Collections'>
            <Header />
            <Clothing />
        </div>
    );
};

export default Collections;
