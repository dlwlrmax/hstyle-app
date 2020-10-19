import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3F3E3E', // This is an orange looking color
        },
    },
});
ReactDOM.render(
    <ThemeProvider theme={theme}>
        {' '}
        <React.StrictMode>
            <App />
        </React.StrictMode>
        ,
    </ThemeProvider>,

    document.getElementById('root')
);
