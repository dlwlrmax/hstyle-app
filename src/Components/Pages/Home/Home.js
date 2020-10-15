import React from 'react';
import Header from './Header/Header';
import New from './New/New';
import Footer from '../../Footer/Footer';
import Hot from './Hot/Hot';
import Collections from './Collections/Collections';
const Home = ({ addItemToFav }) => {
    document.title = 'HStyle';
    const formatNumb = numb => {
        return Intl.NumberFormat().format(numb);
    };

    return (
        <div className='Home'>
            <Header />
            <New formatNumb={formatNumb} addItemToFav={addItemToFav} />
            <Collections />
            <Hot formatNumb={formatNumb} />
            <Footer />
        </div>
    );
};

export default Home;
