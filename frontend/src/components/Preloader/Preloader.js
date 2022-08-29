import './Preloader.scss';
import {contentPrefix} from "../../js/globals";
import React, {useEffect, useMemo, useState} from "react";
import usePreloader from "../../hooks/usePreloader";
import useTheme from "../../hooks/useTheme";

export default function Preloader() {
    // const {use}
    const {isVisible} = usePreloader();
    const {isDarkMode} = useTheme();
    //const [isVisible, setIsVisible] = React.useState(true);

   // const [isV, setIsV] = useState(true);

    // useEffect(() => {
    //     setIsV(!isV);
    // }, [isVisible]);
    // useMemo(() => {
    //     setIsV(!isV);
    // }, [isVisible])
    // console.log(isV)

    return (
        <div className={`preloader-background ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="preloader-content">
                <img src={`${contentPrefix}/images/welcome_logo.svg`} alt={''}/>
                <div className="logo-subtext">{isDarkMode ? 'бар' : 'ресторан'}</div>
            </div>
        </div>
    );
}