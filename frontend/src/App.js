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
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

const images1 = [
    `${contentPrefix}/images/slider/slider_1.jpg`,
    `${contentPrefix}/images/slider/slider_2.jpg`,
    `${contentPrefix}/images/slider/slider_2.jpg`,
]

const images2 = [
    `${contentPrefix}/images/slider/slider_3.jpg`,
    `${contentPrefix}/images/slider/slider_3.jpg`,
    `${contentPrefix}/images/slider/slider_3.jpg`,
]
export default function App() {
    const [isLoading, setIsLoading] = React.useState(true);

    function showPreloader() {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750)
        return () => clearTimeout(timer);
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {

            setIsLoading(!isLoading);
        }, 2000)
        return () => clearTimeout(timer);
    }, [])
    return (
        <div className="App">
            <Preloader isVisible={isLoading}/>
            <div className="app-content">
                <ThemeToggle action={showPreloader}/>
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

        </div>
    );
}
