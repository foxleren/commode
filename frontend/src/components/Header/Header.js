import './Header.scss';
import React, {useState} from 'react';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import useTheme from "../../hooks/useTheme";
import {Link} from "react-scroll";
export default function Header() {
   const {isDarkMode} = useTheme();
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

    return (<header id={'header'} className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div className="header-container">
            <div className="header-links-container">
                <Link to={'dialog'} smooth spy duration={500} offset={-116}>
                    <div className="header-link">КОНЦЕПЦИЯ</div>
                </Link>
                <Link to={'menu'} smooth spy duration={500} offset={-116}>
                    <div className="header-link">МЕНЮ</div>
                </Link>
                <Link to={'interior'} smooth spy duration={500} offset={-116}>
                    <div className="header-link">ПОСАДКА</div>
                </Link>
                <Link to={'book'} smooth spy duration={500} offset={-115}>
                    <div className="header-link">АРЕНДА ЗАЛА</div>
                </Link>
                <Link to={'footer'} smooth spy duration={500}>
                    <div className="header-link">КОНТАКТЫ</div>
                </Link>





            </div>
            <div className="header-buttons-container">
                <ThemeToggle/>
                <Link to={'book'} smooth spy duration={500} offset={-115}>
                    <div className={`header-button-book ${isDarkMode ? 'dark' : 'light'}`}>Забронировать</div>
                </Link>

            </div>
        </div>
    </header>);
}