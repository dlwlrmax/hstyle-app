import React from 'react';
import Header from './Header/Header';
import New from './New/New';
import Footer from '../../Footer/Footer';
import Hot from './Hot/Hot';
import Collections from './Collections/Collections';
const Home = () => {
    document.title = 'HStyle';
    return (
        <div className='Home'>
            <Header />
            <New />
            <Collections />
            <Hot />
            <Footer />
        </div>
    );
};

export default Home;
