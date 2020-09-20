import React from 'react';
import './Home.css';

import Navbar from '../Navbar/Navbar';
import Header from './Header/Header.js';
import Section from './Section/Section';
import Product from './Section/Products/Products';
import About from './Section/About/About';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <Header />
            <Section sectionTitle='Product' boxTitle='H-style' boxColor='var(--orange)' bgColor='var(--yellow)' direction='right' transform=' '>
                <Product />
            </Section>
            <Section
                sectionTitle='HSTYLE'
                boxTitle='About H-style'
                boxColor='var(--yellow)'
                bgColor='var(--orange)'
                direction='left'
                dNone='display-none'
                transform='-reverse'>
                <About />
            </Section>
            <Footer />
        </div>
    );
};

export default Home;