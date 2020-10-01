import React from 'react';
import './About.css';

import Header from '../About/Header/Header.js';
import Section from './Section/Section';
import Product from './Section/Products/Products';
import SAbout from './Section/About/About';
import Footer from '../../Footer/Footer';

const About = () => {
    document.title = 'H-STYLE';

    return (
        <div className='About'>
            <Header />
            <Section
                sectionTitle='H-STYLE'
                boxTitle='About H-style'
                boxColor='var(--yellow)'
                bgColor='var(--orange)'
                direction='left'
                dNone='display-none'
                transform=' '>
                <SAbout />
            </Section>
            <Section
                sectionTitle='Product'
                boxTitle='Our Products'
                boxColor='var(--orange)'
                bgColor='var(--yellow)'
                direction='right'
                transform='-reverse'>
                <Product />
            </Section>
            <Footer />
        </div>
    );
};

export default About;
