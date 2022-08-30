import './Layout.scss';
import useTheme from "../../hooks/useTheme";
import React from "react";

export default function Layout({children}) {
    const {isDarkMode} = useTheme();

    // React.useEffect(() => {
    //     console.log('layout is ready');
    // }, []);

    return (
        <div className={`layout ${isDarkMode ? 'dark' : 'light'}`}>
            {children}
        </div>
    );
}