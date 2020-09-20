import React from 'react';
import './Loading.css';
const Loading = () => {
    return (
        <div className='spinner-container'>
            <div className='spinner'>
                <div className='dot1' />
                <div className='dot2' />
            </div>
        </div>
    );
};

export default Loading;
