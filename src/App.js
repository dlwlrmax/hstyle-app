import React, { useEffect, useState } from 'react';
import Loading from './Components/Loading/Loading';
import './App.css';

import Home from './Components/Home/Home';

function App() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return <div className='App'>{isLoading ? <Loading /> : <Home />}</div>;
}
export default App;
