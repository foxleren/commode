import './ThemeToggle.scss';
import React from "react";

export default function ThemeToggle({action}) {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    return (
        <div className={`header-button-change-theme ${isDarkMode ? 'dark' : 'light'}`}
             onClick={() => setIsDarkMode(!isDarkMode)}>
            <div className={`header-button-change-theme-circle ${isDarkMode ? 'dark' : 'light'}`} onClick={action}/>
            {/*<motion.div*/}
            {/*    animate={isDarkMode ? "visible" : "hidden"}*/}
            {/*    variants={{visible: {opacity: 1}, hidden: {opacity: 0}}}*/}
            {/*    initial={{opacity: 0}}*/}
            {/*    transition={{duration: 0.2}}>*/}
            {/*   */}
            {/*</motion.div>*/}
            {/*<motion.div*/}
            {/*    animate={isDarkMode ? "hidden" : "visible"}*/}
            {/*    variants={{visible: {opacity: 1}, hidden: {opacity: 0}}}*/}
            {/*    transition={{duration: 0.2}}>*/}
            {/*    */}
            {/*</motion.div> */}
            <div className={`header-button-change-theme-text bar ${isDarkMode ? 'visible' : 'hidden'}`}>Бар</div>
            <div
                className={`header-button-change-theme-text restaurant ${isDarkMode ? 'hidden' : 'visible'}`}>Ресторан
            </div>
            {/*<div*/}
            {/*    className={`header-button-change-theme-text restaurant ${isDarkMode ? 'hidden' : 'visible'}`}>Ресторан*/}
            {/*</div>*/}
        </div>
    );
}