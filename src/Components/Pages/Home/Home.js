import React from 'react';
import Footer from '../../Footer/Footer';
import Jewelries from './Jewelries/Jewelries';
import Header from './Header/Header';
import Clothes from './Clothes/Clothes';

export default function Home() {
    document.title = 'H-STYLE';
    return (
        <div className='Home'>
            <Header />
            <Jewelries />
            <Clothes />
            <Footer />
        </div>
    );
}
