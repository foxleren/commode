import './ThemeToggle.scss';
import React from "react";
import useTheme from "../../hooks/useTheme";
import usePreloader from "../../hooks/usePreloader";

export default function ThemeToggle() {
    // const [isDarkMode, setIsDarkMode] = React.useState(false);
    const {isDarkMode, setIsDarkMode} = useTheme();
    const {isVisible, setIsVisible} = usePreloader();

    const changeTheme = () => {
        setIsVisible(true);
        // setTimeout(() => {
        //     setIsVisible(!isVisible);
        // }, 1000);
        setIsDarkMode(!isDarkMode);
        setTimeout(() => {
            setIsVisible(false);
        }, 1000);
    }

    return (
        <div className={`header-button-change-theme ${isDarkMode ? 'dark' : 'light'}`}
             onClick={changeTheme}>
            <div className={`header-button-change-theme-circle ${isDarkMode ? 'dark' : 'light'}`}/>
            <div className={`header-button-change-theme-text bar ${isDarkMode ? 'visible' : 'hidden'}`}>Бар</div>
            <div
                className={`header-button-change-theme-text restaurant ${isDarkMode ? 'hidden' : 'visible'}`}>Ресторан
            </div>
        </div>
    );
}