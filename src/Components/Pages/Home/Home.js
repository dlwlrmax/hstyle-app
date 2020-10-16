import React from 'react';
import Header from './Header/Header';
import New from './New/New';
import Footer from '../../Footer/Footer';
import Hot from './Hot/Hot';
import Collections from './Collections/Collections';
const Home = ({ Items, addItemToFav, newItems, formatNumb }) => {
    document.title = 'HStyle';

    return (
        <div className='Home'>
            <Header />
            <New formatNumb={formatNumb} addItemToFav={addItemToFav} Items={newItems} />
            <Collections />
            <Hot formatNumb={formatNumb} Items={Items} addItemToFav={addItemToFav} />
            <Footer />
        </div>
    );
};

export default Home;
