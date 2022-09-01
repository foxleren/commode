import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom";
import './index.scss';
import App from './App';
import PreloaderProvider from "./providers/PreloaderProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));


// const hidePreloader = () => {
//     setTimeout(() => {
//         setIsVisible(false);
//     }, 1000);
// }

root.render(<React.StrictMode>
    <PreloaderProvider>
        <App/>
    </PreloaderProvider>
</React.StrictMode>);
