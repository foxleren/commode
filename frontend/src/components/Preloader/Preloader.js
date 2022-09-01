import './Preloader.scss';
import {contentPrefix} from "../../js/globals";
import React from "react";
import usePreloader from "../../hooks/usePreloader";
import useTheme from "../../hooks/useTheme";

export default function Preloader() {
    // const {use}
    const {isVisible} = usePreloader();
    const {isDarkMode} = useTheme();

    return (
        <div id="preloader" className={`preloader-background ${isVisible ? 'visible' : 'hidden'} ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="preloader-content">
                <img src={`${contentPrefix}/images/welcome_logo.svg`} alt={''}/>
                {/*{isDarkMode && <img src={`${contentPrefix}/images/welcome_logo.svg`} alt={''}/>}*/}
                {/*{!isDarkMode && <img src={`${contentPrefix}/images/commode_logo_black.svg`} alt={''}/>}*/}
                {/*<div className="logo-subtext">{isDarkMode ? 'бар' : 'ресторан'}</div>*/}
            </div>
        </div>
    );
}