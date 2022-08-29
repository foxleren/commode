import './Header.scss';
import React from 'react';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import useTheme from "../../hooks/useTheme";

export default function Header() {
   const {isDarkMode} = useTheme();

    return (<header className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div className="header-container">
            <div className="header-links-container">
                <div className="header-link">КОНЦЕПЦИЯ</div>
                <div className="header-link">МЕНЮ</div>
                <div className="header-link">ПОСАДКА</div>
                <div className="header-link">АРЕНДА ЗАЛА</div>
                <div className="header-link">КОНТАКТЫ</div>
            </div>
            <div className="header-buttons-container">
                <ThemeToggle/>
                <div className={`header-button-book ${isDarkMode ? 'dark' : 'light'}`}>Забронировать</div>
            </div>
        </div>
    </header>);
}