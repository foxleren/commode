import './Preloader.scss';
import {contentPrefix} from "../../js/globals";
import React from "react";

export default function Preloader({isVisible}) {
    //const [isVisible, setIsVisible] = React.useState(true);

    return (
        <div className={`preloader-background ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="preloader-content">
                <img src={`${contentPrefix}/images/welcome_logo.svg`} alt={''}/>
                <div className="logo-subtext">меню по собестоимости</div>
            </div>
        </div>
    );
}