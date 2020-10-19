import React from 'react';
import Footer from '../../Footer/Footer';
import Clothing from './Clothing/Clothing';
import Glasses from './Glasses/Glasses';

import Header from './Header/Header';
import Jewelries from './Jewleries/Jewelries';

const CLOTHING = [
    {
        name: 'Product1',
        collection: 'Collection1',
        price: 5232,
        image: 'https://i.imgur.com/hMIrzQvh.png',
    },
    {
        name: 'Product2',
        collection: 'Collection2',
        price: 4232,
        image: 'https://i.imgur.com/TbPKp9Rh.png',
    },
    {
        name: 'Product3',
        collection: 'Collection3',
        price: 1232,
        image: 'https://i.imgur.com/rdOM1F7h.png',
    },
    {
        name: 'Product4',
        collection: 'Collection4',
        price: 2322,
        image: 'https://i.imgur.com/z6hfuDPh.png',
    },
];

const JEWELRIES = [
    {
        name: 'Product1',
        collection: 'Collection1',
        price: 5232,
        image: 'https://i.imgur.com/J5022hk.jpg',
    },
    {
        name: 'Product2',
        collection: 'Collection2',
        price: 4232,
        image: 'https://i.imgur.com/Ln5WB3l.jpg',
    },
    {
        name: 'Product3',
        collection: 'Collection3',
        price: 1232,
        image: 'https://i.imgur.com/QjNXLie.jpg',
    },
    {
        name: 'Product4',
        collection: 'Collection4',
        price: 2322,
        image: 'https://i.imgur.com/tIT31R4.jpg',
    },
];

const GLASSES = [
    {
        name: 'Product1',
        collection: 'Collection1',
        price: 5232,
        image: 'https://i.imgur.com/hJNA6o0.jpg',
    },
    {
        name: 'Product2',
        collection: 'Collection2',
        price: 4232,
        image: 'https://i.imgur.com/zuQ8C0R.jpg',
    },
    {
        name: 'Product3',
        collection: 'Collection3',
        price: 1232,
        image: 'https://i.imgur.com/6Vo09wG.jpg',
    },
    {
        name: 'Product4',
        collection: 'Collection4',
        price: 2322,
        image: 'https://i.imgur.com/klapufS.jpg',
    },
];

export default function Home() {
    document.title = 'Collections';
    return (
        <div className='Home'>
            <Header />
            <Clothing products={CLOTHING} />
            <Jewelries products={JEWELRIES} />
            <Glasses products={GLASSES} />
            <Footer />
        </div>
    );
}
