import React, { useEffect } from 'react';
import Header from './Header/Header';
import New from './New/New';
import Hot from './Hot/Hot';
import Collections from './Collections/Collections';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import { motion } from 'framer-motion';
const Home = ({ Items, addItemToFav, newItems, formatNumb, setQuery, query }) => {
    document.title = 'HStyle';
    useEffect(() => {
        setQuery('?');
    }, []);
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='Home'>
            <ScrollToTop />
            <Header />
            <New formatNumb={formatNumb} addItemToFav={addItemToFav} Items={newItems} />
            <Collections />
            <Hot formatNumb={formatNumb} Items={Items} addItemToFav={addItemToFav} />
        </motion.div>
    );
};

export default Home;
