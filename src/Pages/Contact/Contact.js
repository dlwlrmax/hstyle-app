import React from 'react';
import Header from './Header/Header';
import From from './Form/From';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import { motion } from 'framer-motion';
const Contact = () => {
    document.title = 'Contact';
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='Contact'>
            <ScrollToTop />
            <Header />
            <From />
        </motion.div>
    );
};
export default Contact;
