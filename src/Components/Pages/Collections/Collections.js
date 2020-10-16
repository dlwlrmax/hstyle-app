import React from 'react';
import Footer from '../../Footer/Footer';
import Jewelries from './Jewelries/Jewelries';
import Header from './Header/Header';
import Clothes from './Clothes/Clothes';
import Glasses from './Glasses/Glasses';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

export default function Collection() {
    document.title = 'Collection';
    return (
        <div className='Collection'>
            <ScrollToTop />
            <Header />
            <Jewelries />
            <Clothes />
            <Glasses />
            <Footer />
        </div>
    );
}
