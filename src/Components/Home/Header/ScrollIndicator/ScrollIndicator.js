import React from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
    return (
        <div className='scroll-container'>
            <div className='chevron' />
            <div className='chevron' />
            <div className='chevron' />
            <span className='text-s'>Scroll down</span>
        </div>
    );
};

export default ScrollIndicator;
