import React, { useEffect, useState } from 'react';
import Loading from './Components/Loading/Loading';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Pages/Home/Home';
import Shop from './Components/Pages/Shop/Shop';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Collections from './Components/Pages/Collections/Collections';

function App() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

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
                    <Route path='/collections'>
                        <Collections />
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
