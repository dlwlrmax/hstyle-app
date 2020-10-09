import React from 'react';
import Footer from '../../Footer/Footer';
import Jewelries from './Jewelries/Jewelries';
import Header from './Header/Header';
import Clothes from './Clothes/Clothes';
import Glasses from './Glasses/Glasses';

export default function Collection() {
    document.title = 'Collection';
    return (
        <div className='Collection'>
            <Header />
            <Jewelries />
            <Clothes />
            <Glasses />
            <Footer />
        </div>
    );
}
