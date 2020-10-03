import React from 'react';
import Header from './Header/Header';
import Footer from '../../../Components/Footer/Footer';
import From from './Form/From';
const Contact = () => {
    document.title = 'Contact';
    return (
        <div className='Contact'>
            <Header />
            <From />
            <Footer />
        </div>
    );
};

export default Contact;
