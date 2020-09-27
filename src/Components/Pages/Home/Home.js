import React from 'react';
import Clothing from './Clothing/Clothing';

import Header from './Header/Header';

export default function Home() {
    return (
        <div className='Home'>
            <Header />
            <Clothing />
        </div>
    );
}
