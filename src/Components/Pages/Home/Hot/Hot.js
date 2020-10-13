import React from 'react';
import Style from './Hot.module.css';
import Section from './Section/Section';

export default function Hot() {
    return (
        <div className={Style.Hot}>
            <div className={Style.title}>Best Pick</div>
            <Section title='jewelry' />
            <Section title='glasses' />
            <Section title='clothes' />
        </div>
    );
}
