import React, { useEffect, useState } from 'react';
import Loading from './Components/Loading/Loading';
import './App.css';

import Home from './Components/Home/Home';

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
            {isLoading ? <Loading /> : null}
            <Home />
        </div>
    );
}
export default App;
