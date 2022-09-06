import './Header.scss';
import React from 'react';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import useTheme from "../../hooks/useTheme";
import {Link} from "react-scroll";
import {Link as RouterLink} from "react-router-dom";
import Button from "../Button/Button";
import {setHeader} from "../../js/globals";

export default function Header({page = 'home', position = 'fixed', isVisible}) {
    const {isDarkMode} = useTheme();


    let offset = 0;
    if (window.innerWidth <= 1250) {
        offset = -70;
    }

    return (<header id={position === 'fixed' ? 'header-fixed' : 'header-absolute'}
                    className={`header ${position} ${page} ${isDarkMode ? 'dark' : 'light'} ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="header-container">
            {page === 'home' && <div className="header-menu-trigger" onClick={() => setHeader(position)}>
                <span></span>
                <span></span>
                <span></span>
            </div>}
            <div className={`header-container-inside`}>
                {page === 'home' && <div className="header-links-container">
                    <Link to={'dialog'} smooth spy duration={500} offset={offset}>
                        <div className="header-link" onClick={() => setHeader(position)}>КОНЦЕПЦИЯ</div>
                    </Link>
                    <Link to={'menu'} smooth spy duration={500} offset={offset}>
                        <div className="header-link" onClick={() => setHeader(position)}>МЕНЮ</div>
                    </Link>
                    <Link to={'interior'} smooth spy duration={500} offset={offset}>
                        <div className="header-link" onClick={() => setHeader(position)}>ПОСАДКА</div>
                    </Link>
                    <RouterLink to="/rent">
                        <div className="header-link" onClick={() => setHeader(position)}>АРЕНДА ЗАЛА</div>
                    </RouterLink>
                    <Link to={'footer'} smooth spy duration={1000} offset={offset}>
                        <div className="header-link" onClick={() => setHeader(position)}>КОНТАКТЫ</div>
                    </Link>
                </div>}
                {page === 'rent' && <div className="header-links-container">
                    <RouterLink to="/">
                        <div className="header-link">Главная</div>
                    </RouterLink>
                </div>}
                {page === 'home' && <div className="header-buttons-container">
                    {position === 'fixed' && <ThemeToggle action={() => setHeader(position)}/>}
                    <Link to={'book'} smooth spy duration={500} offset={offset}>
                        <Button content={'Забронировать'} type={'book'} color={'white'}
                                mode={isDarkMode ? 'dark' : 'light'} action={() => setHeader(position)}/>
                        {/*<div className={`header-button-book ${isDarkMode ? 'dark' : 'light'}`}>Забронировать</div>*/}
                    </Link>
                </div>}

                {page === 'rent' && <div className="header-buttons-container">
                    <Link to={'book'} smooth spy duration={500} offset={offset}>
                        <Button content={'Забронировать'} type={'book'} color={'white'} mode={'light'}/>
                    </Link>
                </div>}
            </div>

        </div>
    </header>);
}