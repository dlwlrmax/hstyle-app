import React, { useEffect, useState } from 'react';
import Loading from './Components/Loading/Loading';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Pages/Home/Home';
import Shop from './Components/Pages/Shop/Shop';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';

function App() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    console.log(isLoading);
    return (
        <div className='App'>
            <Router>
                {isLoading ? <Loading /> : null}
                <Navbar />
                <Switch>
                    <Route path='/shop'>
                        <Shop />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
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
