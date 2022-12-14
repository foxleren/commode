import './ThemeToggle.scss';
import React from "react";
import useTheme from "../../hooks/useTheme";
import usePreloader from "../../hooks/usePreloader";

export default function ThemeToggle({action = () => {}}) {
    // const [isDarkMode, setIsDarkMode] = React.useState(false);
    const {isDarkMode, setIsDarkMode} = useTheme();
    const {setIsVisible} = usePreloader();



    const changeTheme = () => {
        //setIsVisible(true);
        // setTimeout(() => {
        //     setIsVisible(!isVisible);
        // }, 1000);
        //action();
        window.scrollTo({top: 0});
        setIsDarkMode(!isDarkMode);
        setTimeout(() => {
            setIsVisible(false);
        }, 1000);
        action();
    }

    return (
        <div className={`header-button-change-theme ${isDarkMode ? 'dark' : 'light'}`}
             onClick={changeTheme}>
            <div className={`header-button-change-theme-circle ${isDarkMode ? 'dark' : 'light'}`}/>
            <div className={`header-button-change-theme-text bar ${isDarkMode ? 'visible' : 'hidden'}`}>Клуб</div>
            <div
                className={`header-button-change-theme-text restaurant ${isDarkMode ? 'hidden' : 'visible'}`}>Ресторан
            </div>
        </div>
    );
}