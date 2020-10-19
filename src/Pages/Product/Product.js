import { motion } from 'framer-motion';
import React from 'react';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import CollectionsPage from '../Collections/Jewelries/CollectionsPage/CollectionsPage';
import QuickView from '../QuickView/QuickView';
import Style from './Product.module.css';
//import Related from './Related/Related';
export default function Product({ match, addItemToFav, formatNumb, cart }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={Style.Product}>
            <ScrollToTop />
            <QuickView match={match} addItemToFav={addItemToFav} formatNumb={formatNumb} cart={cart} />
            <CollectionsPage />
            {/* <Related match={match} /> */}
        </motion.div>
    );
}
