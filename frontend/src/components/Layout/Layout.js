import './Layout.scss';
import useTheme from "../../hooks/useTheme";

export default function Layout({children}) {
    const {isDarkMode} = useTheme();
    return (
        <div className={`layout ${isDarkMode ? 'dark' : 'light'}`}>
            {children}
        </div>
    );
}