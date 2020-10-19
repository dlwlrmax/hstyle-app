import React from 'react';
import Jewelries from './Jewelries/Jewelries';
import Header from './Header/Header';
import Clothes from './Clothes/Clothes';
import Glasses from './Glasses/Glasses';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import { motion } from 'framer-motion';

export default function Collection() {
    document.title = 'Collection';
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='Collection'>
            <ScrollToTop />
            <Header />
            <Jewelries />
            <Clothes />
            <Glasses />
        </motion.div>
    );
}
