import './Header.scss';
import React from 'react';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import useTheme from "../../hooks/useTheme";
import {Link} from "react-scroll";
import {Link as RouterLink} from "react-router-dom";
import Button from "../Button/Button";
import { HashLink } from 'react-router-hash-link';

export default function Header({page = 'home', position = 'fixed', isVisible}) {
    const {isDarkMode} = useTheme();

    return (<header id={'header'}
                    className={`header ${position} ${page} ${isDarkMode ? 'dark' : 'light'} ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="header-container">
            {page === 'home' && <div className="header-links-container">
                <Link to={'dialog'} smooth spy duration={500}>
                    <div className="header-link">КОНЦЕПЦИЯ</div>
                </Link>
                <Link to={'menu'} smooth spy duration={500} offset={-115}>
                    <div className="header-link">МЕНЮ</div>
                </Link>
                <Link to={'interior'} smooth spy duration={500} offset={-115}>
                    <div className="header-link">ПОСАДКА</div>
                </Link>
                <RouterLink to="/rent">
                    <div className="header-link">АРЕНДА ЗАЛА</div>
                </RouterLink>
                <Link to={'footer'} smooth spy duration={1000} offset={-115}>
                    <div className="header-link">КОНТАКТЫ</div>
                </Link>
            </div>}
            {page === 'rent' && <div className="header-links-container">
                <RouterLink to="/">
                    <div className="header-link">Главная</div>
                </RouterLink>
            </div>}
            {page === 'home' && <div className="header-buttons-container">
                {position === 'fixed' && <ThemeToggle/>}
                <Link to={'book'} smooth spy duration={500} offset={-115}>
                    <Button content={'Забронировать'} type={'book'} color={'white'}
                            mode={isDarkMode ? 'dark' : 'light'}/>
                    {/*<div className={`header-button-book ${isDarkMode ? 'dark' : 'light'}`}>Забронировать</div>*/}
                </Link></div>}

            {page === 'rent' && <div className="header-buttons-container">
                <Link to={'book'} smooth spy duration={500} offset={-115}>
                    <Button content={'Забронировать'} type={'book'} color={'white'} mode={'light'}/>
                </Link>
            </div>}
        </div>
    </header>);
}