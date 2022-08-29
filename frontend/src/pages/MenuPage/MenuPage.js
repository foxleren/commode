import './MenuPage.scss';
import useTheme from "../../hooks/useTheme";

const menus = {
    restaurant: [{
        name: 'СЕЗОННОЕ МЕНЮ', file: 'file',
    }, {
        name: 'МЕНЮ КУХНИ', file: 'file',
    }, {
        name: 'МЕНЮ БАРА', file: 'file',
    }, {
        name: 'БАНКЕТЫ', file: 'file',
    }],
    bar: [{
        name: 'SPECIAL-МЕНЮ', file: 'file',
    }, {
        name: 'МЕНЮ КУХНИ', file: 'file',
    }, {
        name: 'МЕНЮ БАРА', file: 'file',
    }, {
        name: 'ТВОЯ ВЕЧЕРИНКА В COMMODE', file: 'file',
    }]
}

export default function MenuPage() {
    const {isDarkMode} = useTheme();
    const menu = isDarkMode ? menus.bar : menus.restaurant;

    return (<section id='menu' className={`menu-container ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="menu-title">{isDarkMode ? 'МЕНЮ' : 'МЕНЮ ПО СЕБЕСТОИМОСТИ'}</div>
        <div className="menu-option-container">
            {menu.map((menuItem, index) => {
                return (<div className="menu-option" key={index}>{menuItem.name}
                    <svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 31L16.5 16L1.5 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>);
            })}
        </div>
    </section>);
}