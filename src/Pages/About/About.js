import React from 'react';
import './About.css';

import Header from '../About/Header/Header.js';
import Section from './Section/Section';
import Product from './Section/Products/Products';
import SAbout from './Section/About/About';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import { motion } from 'framer-motion';
const About = () => {
    document.title = 'About';

    return (
        <motion.div
            initial={{ opacity: 0, height: '0%' }}
            animate={{ opacity: 1, height: '100%' }}
            exit={{ opacity: 0, height: '100%' }}
            className='About'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}></motion.div>
            <ScrollToTop />
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
        </motion.div>
    );
};

export default About;
