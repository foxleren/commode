import Preloader from "./components/Preloader/Preloader";

import React from "react";
import ThemeProvider from "./providers/ThemeProvider";
import RentPage from "./pages/RentPage/RentPage";
import HomePage from "./pages/HomePage/HomePage";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import usePreloader from "./hooks/usePreloader";
import useTheme from "./hooks/useTheme";
import Layout from "./components/Layout/Layout";
import {useEffect} from "react";


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
            <div className="App"><Preloader/>
                <BrowserRouter basename={process.env.PUBLIC_URL} >
                {/*<BrowserRouter>*/}
                    <Layout>
                        <div className={`app-content`}>
                            <Routes>
                                <Route path={'/'} element={<HomePage/>}/>
                                <Route path={'/rent'} element={<RentPage/>}/> </Routes>
                        </div>
                    </Layout>
                </BrowserRouter>
            </div>
        </ThemeProvider>);
}
