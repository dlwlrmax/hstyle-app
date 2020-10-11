import React from 'react';
import Style from './Hot.module.css';
import Section from './Section/Section';

const CLOTHES = [
    'https://i.imgur.com/vhQ7o9sh.png',
    'https://i.imgur.com/IR3gyfDh.png',
    'https://i.imgur.com/x1EOLPxh.png',
    'https://i.imgur.com/rrieUVdh.png',
];
const GLASSES = [
    'https://i.imgur.com/klapufSh.jpg',
    'https://i.imgur.com/zuQ8C0Rh.jpg',
    'https://i.imgur.com/hJNA6o0h.jpg',
    'https://i.imgur.com/HykmhWWh.jpg',
];

const Jewelry = [
    'https://i.imgur.com/vCGdjkJ.jpg',
    'https://i.imgur.com/2qbIXyR.jpg',
    'https://i.imgur.com/cq6sIli.jpg',
    'https://i.imgur.com/5zjSstu.jpg',
];

export default function Hot() {
    return (
        <div className={Style.Hot}>
            <div className={Style.title}>Best Pick</div>
            <Section images={Jewelry} title='Jewelry' />
            <Section images={GLASSES} title='Glasses' />
            <Section images={CLOTHES} title='Clothes' />
        </div>
    );
}
