import './Header.scss';
import React from 'react';
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
    // const [isDarkMode, setIsDarkMode] = React.useState(false)
    //
    // React.useEffect(() => {
    //     console.log("theme changed");
    // }, [theme, isDarkMode])

    return (<header>
        <div className="header-links-container">
            <div className="header-link">КОНЦЕПЦИЯ</div>
            <div className="header-link">МЕНЮ</div>
            <div className="header-link">ПОСАДКА</div>
            <div className="header-link">АРЕНДА ЗАЛА</div>
            <div className="header-link">КОНТАКТЫ</div>
        </div>
        <div className="header-buttons-container">
            <ThemeToggle/>
            <div className="header-button-book">Забронировать</div>
        </div>
    </header>);
}