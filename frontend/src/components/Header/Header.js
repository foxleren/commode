import './Header.scss';
import React from 'react';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import useTheme from "../../hooks/useTheme";
import {Link} from "react-scroll";
import {Link as RouterLink} from "react-router-dom";
import Button from "../Button/Button";
import usePreloader from "../../hooks/usePreloader";

export default function Header({page = 'home', position = 'fixed'}) {
    const {isDarkMode} = useTheme();
    const {showPreloader} = usePreloader();
    // const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    //
    //  window.onscroll = () => {
    //      console.log("scroll scrolling")
    //      let secondSection = window.document.getElementById('dialog').offsetTop;
    //
    //      let scrolled = window.pageYOffset;
    //
    //
    //      if (scrolled > secondSection) {
    //          setIsHeaderVisible(true);
    //      }
    //  }
    // const history = useHistory();
    //
    // const delayRedirect = (e, path) => {
    //     e.preventDefault();
    //     showPreloader();
    //     setTimeout(() => history.push(path), 300);
    // }

    return (<header id={'header'} className={`header ${position} ${page} ${isDarkMode ? 'dark' : 'light'} `}>
        <div className="header-container">
            {page === 'home' && <div className="header-links-container">
                <Link to={'dialog'} smooth spy duration={500}>
                    <div className="header-link">КОНЦЕПЦИЯ</div>
                </Link>
                <Link to={'menu'} smooth spy duration={500}>
                    <div className="header-link">МЕНЮ</div>
                </Link>
                <Link to={'interior'} smooth spy duration={500}>
                    <div className="header-link">ПОСАДКА</div>
                </Link>
                <RouterLink to="/rent">
                    <div className="header-link">АРЕНДА ЗАЛА</div>
                </RouterLink>
                <Link to={'footer'} smooth spy duration={1000}>
                    <div className="header-link">КОНТАКТЫ</div>
                </Link>
            </div>}
            {page === 'rent' && <div className="header-links-container">
                <RouterLink to="/">
                    <div className="header-link">Главная</div>
                </RouterLink>
            </div>}
            {page === 'home' && <div className="header-buttons-container">
                <ThemeToggle/>
                <Link to={'book'} smooth spy duration={500}>
                    <Button content={'Забронировать'} type={'book'} color={'black'}
                            mode={isDarkMode ? 'dark' : 'light'}/>
                    {/*<div className={`header-button-book ${isDarkMode ? 'dark' : 'light'}`}>Забронировать</div>*/}
                </Link></div>}

            {page === 'rent' && <div className="header-buttons-container">
                <Link to={'book'} smooth spy duration={500}>
                    <Button content={'Забронировать'} type={'book'} color={'white'} mode={'light'}/>
                </Link>
            </div>}
        </div>
    </header>);
}