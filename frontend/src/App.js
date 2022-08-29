import WelcomePage from "./pages/WelcomePage/WelcomePage";
import DescriptionPage from "./pages/DescriptionPage/DescriptionPage";
import InteriorPage from "./pages/InteriorPage/InteriorPage";
import {contentPrefix} from "./js/globals";
import Slider from "./components/Slider/Slider";
import MenuPage from "./pages/MenuPage/MenuPage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import FormPage from "./pages/FormPage/FormPage";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

import React from "react";
import ThemeProvider from "./providers/ThemeProvider";
import useTheme from "./hooks/useTheme";
import Layout from "./components/Layout/Layout";
import usePreloader from "./hooks/usePreloader";

const images1 = [`${contentPrefix}/images/slider/slider_1.jpg`, `${contentPrefix}/images/slider/slider_2.jpg`, `${contentPrefix}/images/slider/slider_2.jpg`,]

const images2 = [`${contentPrefix}/images/slider/slider_3.jpg`, `${contentPrefix}/images/slider/slider_3.jpg`, `${contentPrefix}/images/slider/slider_3.jpg`,]
export default function App() {
    // const [isLoading, setIsLoading] = React.useState(true);
    const {isDarkMode} = useTheme();
    const {isVisible, setIsVisible} = usePreloader();

    window.addEventListener('load', (event) => {
        //setIsVisible(false);
        // console.log("Page is ready");
        setTimeout(() => {
            setIsVisible(false);
        }, 1000);
        // return () => clearTimeout(timer);
       // setIsVisible(false);
    });
    //
    //
    //
    // useEffect(() => {
    //     console.log("changing")
    //     setIsLoading(true);
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000);
    // }, [isDarkMode]);


    const showPreloader = () => {

    }

    // function showPreloader() {
    //     setTimeout(() => {
    //         setIsLoading(true);
    //     }, 500)
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 1500)
    //     //clearTimeout(timer);
    // }

    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
    //
    //         setIsLoading(!isLoading);
    //     }, 1500)
    //     return () => clearTimeout(timer);
    // }, [])
    return (<ThemeProvider>
            <div className="App">
                <Preloader/>
                <Layout>

                    <div className="app-content">
                        {/*<ThemeToggle action={showPreloader}/>*/}
                        <WelcomePage/>
                        <DescriptionPage/>
                        <InteriorPage images={images1}/>
                        <MenuPage/>
                        <SchedulePage/>
                        <FormPage/>
                        <Slider images={images2} toggleStyle={'round'}/>
                        <Map/>
                        <Footer/>
                    </div>

                </Layout></div>
        </ThemeProvider>

    );
}
