import React, { useState, useEffect } from 'react';
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

    const [Items, setItems] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch('https://h-style-data.herokuapp.com/products?sort=date&&order=desc');
            const data = await res.json();
            console.log(data);
            setItems(data);
        }
        getData();
    }, []);

    const addItemToFav = id => {
        const currIndex = Items.findIndex(item => item.id === id);
        let newItems = [...Items];
        newItems[currIndex].isFav = !newItems[currIndex].isFav;
        setItems(newItems);
        fetch(`https://h-style-data.herokuapp.com/products/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                isFav: newItems[currIndex].isFav,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => console.log(json));
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
                        <Home addItemToFav={addItemToFav} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;
