import React from 'react';
import Style from './Hot.module.css';
import Section from './Section/Section';

export default function Hot({ formatNumb }) {
    return (
        <div className={Style.Hot}>
            <div className={Style.title}>Best Pick</div>
            <Section title='jewelry' image='https://i.imgur.com/s191gRTh.jpg' formatNumb={formatNumb} />
            <Section title='glasses' image='https://i.imgur.com/5X6bac4h.jpg' formatNumb={formatNumb} />
            <Section title='clothes' image='https://i.imgur.com/RnREW2Dh.jpg' formatNumb={formatNumb} />
        </div>
    );
}
