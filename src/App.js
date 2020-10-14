import React, { useState } from 'react';
//import Loading from './Components/Loading/Loading';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Pages/Home/Home';
import Shop from './Components/Pages/Shop/Shop';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Collections from './Components/Pages/Collections/Collections';
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail';
import CollectionsPage from './Components/Pages/Collections/Jewelries/CollectionsPage/CollectionsPage';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
    const [cartId, setCartId] = useState('');
    const getCartId = id => {
        setCartId(id);
        console.log(id);
    };
    return (
        <div className='App'>
            <Router>
                <ScrollToTop />
                <Navbar cartId={cartId} />
                <Switch>
                    <Route path='/shop'>
                        <Shop getCartId={getCartId} />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Route path='/collections'>
                        <Collections />
                    </Route>
                    <Route path='/product'>
                        <ProductDetail />
                    </Route>
                    <Route path='/jestina'>
                        <CollectionsPage />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;
