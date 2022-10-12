import Preloader from "./components/Preloader/Preloader";

import React, {useEffect} from "react";
import ThemeProvider from "./providers/ThemeProvider";
import RentPage from "./pages/RentPage/RentPage";
import HomePage from "./pages/HomePage/HomePage";
import {HashRouter, Route, Routes,} from "react-router-dom";
import usePreloader from "./hooks/usePreloader";
import useTheme from "./hooks/useTheme";
import Layout from "./components/Layout/Layout";
import NotificationProvider from "./providers/NotificationProvider";


export default function App() {
    // const {isVisible, setIsVisible} = usePreloader();

    const {isDarkMode} = useTheme();
    const {showPreloader, isVisible, setIsVisible} = usePreloader();
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => {

        }
    }, [])
    return (
        <ThemeProvider>
            <NotificationProvider>
                <div className="App">
                    <Preloader/>
                    {/*<HashRouter basename={process.env.PUBLIC_URL} >*/}
                    <HashRouter>
                        <Layout>
                            <div className={`app-content`}>
                                <Routes>
                                    <Route path={'/'} element={<HomePage/>}/>
                                    <Route path={'/rent'} element={<RentPage/>}/> </Routes>
                            </div>
                        </Layout>
                    </HashRouter>
                </div>
            </NotificationProvider>
        </ThemeProvider>);
}
