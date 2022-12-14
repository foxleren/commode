import './Layout.scss';
import useTheme from "../../hooks/useTheme";
import React from "react";
import {useLocation} from "react-router-dom";

export default function Layout({children}) {
    const {isDarkMode} = useTheme();

    const location = useLocation();
    const isRent = () => {
        return location.pathname.toString().indexOf('rent') !== -1;
    }
    return (<div className={`layout ${isDarkMode ? 'dark' : 'light'} ${isRent() ? 'rent' : 'home'}`}>
        {children}
    </div>);
}