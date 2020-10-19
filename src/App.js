import React, { useState, useEffect } from 'react';
//import Loading from './Components/Loading/Loading';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Collections from './Pages/Collections/Collections';
import CollectionsPage from './Pages/Collections/Jewelries/CollectionsPage/CollectionsPage';
import QuickView from './Pages/QuickView/QuickView';
import Cart from './Components/Cart/Cart';
import { motion, AnimatePresence } from 'framer-motion';
import Product from './Pages/Product/Product';
import Checkout from './Pages/Checkout/Checkout';
//import { useSpring, animated } from 'react-spring';
function App() {
    const [Items, setItems] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollUp, setScrollUp] = useState(false);
    const [query, setQuery] = useState('?');

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            if (scrollPosition >= position) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }
            setScrollPosition(position);
            //console.log(scrollPosition);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://h-style-data.herokuapp.com/products${query}&&sort=date&&order=desc`);
            const data = await res.json();
            console.log(query);
            setItems(data);
            filterNewItem(data);
        }
        getData();
    }, [query]);
    const getQuery = str => {
        setQuery(str);
    };
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

    const toggleCart = () => {
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
        setScrollUp(true);
        setCartVisible(true);
        setTimeout(() => {
            setScrollUp(false);
            //setCartVisible(false);
        }, 2000);
    };
    const addItem = item => {
        item.quantity = 1;
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
        fetch(`https://h-style-data.herokuapp.com/products/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ isFav: false }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        let _cart = [...cart];
        const deleteIndex = _cart.findIndex(item => item.id === id);
        let _Items = [...Items];
        for (let item of _Items) {
            if (item.id === id) {
                item.isFav = false;
            }
        }
        _cart.splice(deleteIndex, 1);
        setCart(_cart);
        setItems(_Items);
    };
    const formatNumb = numb => {
        return Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(numb);
    };

    //quantity
    const updateAPIQuantity = ({ id }, quantity) => {
        fetch(`https://h-style-data.herokuapp.com/cart/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ quantity: quantity }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    };

    const updatePrice = (e, item) => {
        let _cart = [...cart];
        for (let cartItem of _cart) {
            if (cartItem.id === item.id) {
                cartItem.quantity = Number(e.target.value);
            }
        }
        setCart(_cart);
        updateAPIQuantity(item, e.target.value);
    };
    const incCount = item => {
        let _quantity = item.quantity;
        _quantity++;
        let _cart = [...cart];
        for (let cartItem of _cart) {
            if (cartItem.id === item.id) {
                cartItem.quantity = _quantity;
            }
        }
        setCart(_cart);
        updateAPIQuantity(item, _quantity);
    };
    const decCount = item => {
        let _quantity = item.quantity;
        if (_quantity === 1) {
            return;
        }
        _quantity--;
        let _cart = [...cart];
        for (let cartItem of _cart) {
            if (cartItem.id === item.id) {
                cartItem.quantity = _quantity;
            }
        }
        setCart(_cart);
        updateAPIQuantity(item, _quantity);
    };
    const resetItems = data => {
        setItems(data);
    };

    return (
        <div className='App'>
            <Router>
                <Navbar Items={Items} cart={cart} showCart={toggleCart} isCartVisible={isCartVisible} isScrollUp={isScrollUp} />

                <AnimatePresence>
                    {isCartVisible && (
                        <motion.div
                            initial={{ opacity: 0, position: 'fixed', zIndex: 1000, width: '100%', x: '30%', top: 0, left: 0 }}
                            animate={{ opacity: 1, x: '0%' }}
                            exit={{ opacity: 0, x: '30%' }}>
                            <Cart
                                cart={cart}
                                removeItem={removeItem}
                                formatNumb={formatNumb}
                                toggleCart={toggleCart}
                                incCount={incCount}
                                decCount={decCount}
                                updatePrice={updatePrice}
                                setCartVisible={setCartVisible}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    <Switch>
                        <Route
                            path='/v/:id'
                            render={props => <QuickView {...props} addItemToFav={addItemToFav} formatNumb={formatNumb} cart={cart} />}></Route>
                        <Route
                            path='/product/:id'
                            render={props => <Product {...props} addItemToFav={addItemToFav} formatNumb={formatNumb} cart={cart} />}></Route>
                        <Route path='/checkout'>
                            <Checkout
                                cart={cart}
                                removeItem={removeItem}
                                formatNumb={formatNumb}
                                toggleCart={toggleCart}
                                incCount={incCount}
                                decCount={decCount}
                                updatePrice={updatePrice}
                            />
                        </Route>
                        <Route
                            path='/shop'
                            render={props => (
                                <Shop
                                    {...props}
                                    addItemToFav={addItemToFav}
                                    Items={Items}
                                    formatNumb={formatNumb}
                                    setCartVisible={setCartVisible}
                                    setScrollUp={setScrollUp}
                                    setShopItems={resetItems}
                                    getQuery={getQuery}
                                />
                            )}></Route>
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
                            <Home
                                addItemToFav={addItemToFav}
                                newItems={newProduct}
                                Items={Items}
                                formatNumb={formatNumb}
                                setHomeItems={resetItems}
                                setQuery={setQuery}
                                onClick={() => {
                                    setQuery('?');
                                }}
                            />
                        </Route>
                    </Switch>
                </AnimatePresence>
                <Footer />
            </Router>
        </div>
    );
}
export default App;
