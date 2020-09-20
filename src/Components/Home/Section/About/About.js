import React from 'react';
import image from '../../../../img/about-thum.png';
import './About.css';

const About = props => {
    return (
        <div className='about-container'>
            <div className='text-content-container'>
                <div className='text-content hasShadow'>
                    <p>HanDuYiShe (HSTYLE) is a Chinese brand specializing in Korean fast fashion styles.</p>
                    <p>In 2010, HSTYLE launched Tao Brand, and received:</p>
                    <ul>
                        <li>Top 10 China’s Online Brand awards</li>
                        <li>The Best Globalization E-commerce Corporation awards</li>
                    </ul>
                    <p>
                        The company also won the "Top 10 Online Brand" award from the Chinese Annual Elite List of Textile & Clothing Industry. In
                        2012, HSTYLE’s sales ranked first in both Tmall.com and JD.com.
                    </p>
                </div>
                <button className='btn hasShadow bg-secondary'>Learn more</button>
            </div>
            <div className='about-image'>
                <img src={image} alt='hey' className='hasBorder hasShadow'></img>
            </div>
        </div>
    );
};

export default About;
