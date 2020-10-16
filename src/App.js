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
import CollectionsPage from './Components/Pages/Collections/Jewelries/CollectionsPage/CollectionsPage';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import QuickView from './Components/Pages/QuickView/QuickView';
import Cart from './Components/Cart/Cart';

function App() {
    const [Items, setItems] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false);

    useEffect(() => {
        async function getData() {
            const res = await fetch('https://h-style-data.herokuapp.com/products?sort=date&&order=desc');
            const data = await res.json();
            console.log(data);
            setItems(data);
            filterNewItem(data);
        }
        getData();
    }, []);

    const [cart, setCart] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await fetch('https://h-style-data.herokuapp.com/cart');
            const data = await res.json();
            console.log(data);
            setCart(data);
        }
        getData();
    }, []);
    //new Products
    const [newProduct, setNewProduct] = useState([]);
    const filterNewItem = Items => {
        let _newProduct = [];
        for (let i = 0; i < 5; i++) {
            _newProduct.push(Items[i]);
        }
        setNewProduct(_newProduct);
    };

    const showCart = () => {
        setCartVisible(value => !value);
    };

    //add Fav
    const addItemToFav = id => {
        const currIndex = Items.findIndex(item => item.id === id);
        let newItems = [...Items];
        newItems[currIndex].isFav = !newItems[currIndex].isFav;
        setItems(newItems);
        fetch(`https://h-style-data.herokuapp.com/products/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ isFav: newItems[currIndex].isFav }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => console.log(json));
        if (newItems[currIndex].isFav) {
            addItem(newItems[currIndex]);
        } else {
            removeItem(id);
        }
    };
    const addItem = item => {
        fetch(`https://h-style-data.herokuapp.com/cart`, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => console.log(json));
        let _cart = [...cart];
        _cart.push(item);
        setCart(_cart);
    };
    const removeItem = id => {
        fetch(`https://h-style-data.herokuapp.com/cart/${id}`, {
            method: 'Delete',
        })
            .then(response => response.json())
            .then(json => console.log(json));
        let _cart = [...cart];
        const deleteIndex = _cart.findIndex(item => item.id === id);
        for (let item of Items) {
            if (item.id === id) {
                item.isFav = false;
            }
        }
        _cart.splice(deleteIndex, 1);
        setCart(_cart);
    };

    return (
        <div className='App'>
            <Router>
                <ScrollToTop />
                <Navbar Items={Items} cart={cart} showCart={showCart} isCartVisible={isCartVisible} />
                {isCartVisible ? <Cart cart={cart} removeItem={removeItem} /> : null}
                <Switch>
                    <Route path='/shop'>
                        <Shop addItemToFav={addItemToFav} Items={Items} />
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
                    <Route path='/jestina'>
                        <CollectionsPage />
                    </Route>
                    <Route path='/' exact>
                        <Home addItemToFav={addItemToFav} newItems={newProduct} Items={Items} />
                    </Route>
                    <Route path='/v/:id' render={props => <QuickView {...props} addItemToFav={addItemToFav} />}></Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;
