import './MenuSection.scss';
import useTheme from "../../hooks/useTheme";
import {contentPrefix} from "../../js/globals";
import {Link as RouterLink} from "react-router-dom";

const menus = {
    restaurant: [{
        name: 'МЕНЮ КУХНИ', file: '/pdf/menu_commode.pdf',
    }, {
        name: 'МЕНЮ БАРА', file: '/pdf/bar_commode.pdf',
    }, {
        name: 'БАНКЕТЫ', file: '/pdf/pdf_example.pdf',
    }], bar: [{
        name: 'МЕНЮ КУХНИ', file: '/pdf/menu_commode.pdf',
    }, {
        name: 'МЕНЮ БАРА', file: '/pdf/bar_commode.pdf',
    }, {
        name: `ТВОЯ ВЕЧЕРИНКА В COMMODE`, file: '/pdf/pdf_example.pdf',
    }]
}

export default function MenuSection() {
    const {isDarkMode} = useTheme();
    const menu = isDarkMode ? menus.bar : menus.restaurant;

    //let title = '';
    // if (window.innerWidth <= 650) {
    //     title = 'МЕНЮ ПО СЕБЕ СТОИМОСТИ';
    // }else{
    //     title = 'МЕНЮ ПО СЕБЕСТОИМОСТИ';
    // }

    return (<section id='menu' className={`menu-container ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="menu-title"></div>
        <div className={'menu-container-outer'}>
            <div className="menu-option-container">
                {menu.map((menuItem, index) => {
                    return (index !== menu.length - 1 ?
                        <a href={`${contentPrefix}${menuItem.file}`} download={`${menuItem.name}.pdf`}
                           className="menu-option" key={index}>{menuItem.name}
                            <svg width="18" height="32" viewBox="0 0 18 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 31L16.5 16L1.5 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </a> : <RouterLink key={index} to="/rent">{isDarkMode ?
                            <div className="menu-option dark" key={index}>ТВОЯ ВЕЧЕРИНКА <br/> В COMMODE
                                <svg width="18" height="32" viewBox="0 0 18 32" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 31L16.5 16L1.5 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </div> : <div className="menu-option" key={index}>{menuItem.name}
                                <svg width="18" height="32" viewBox="0 0 18 32" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 31L16.5 16L1.5 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </div>}
                        </RouterLink>);
                })}
            </div>
        </div>
    </section>);
}