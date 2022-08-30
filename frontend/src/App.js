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
import Layout from "./components/Layout/Layout";
import usePreloader from "./hooks/usePreloader";
import ExtraSliderPage from "./pages/ExtraSliderPage/ExtraSliderPage";

const images1 = [`${contentPrefix}/images/slider/slider_1_lightMode.jpg`, `${contentPrefix}/images/slider/slider_2_lightMode.jpg`, `${contentPrefix}/images/slider/slider_3_lightMode.jpg`,
    `${contentPrefix}/images/slider/slider_4_lightMode.jpg`, `${contentPrefix}/images/slider/slider_5_lightMode.jpg`]

const images2 = [`${contentPrefix}/images/slider/slider_3.jpg`, `${contentPrefix}/images/slider/slider_3.jpg`, `${contentPrefix}/images/slider/slider_3.jpg`,]
export default function App() {
    const {setIsVisible} = usePreloader();

    const hidePreloader = (func) => {
        setTimeout(() => {
            setIsVisible(false);
        }, 1000);
    }

    // document.onload = () => {
    //
    //     hidePreloader();
    // }
    //
    // document.addEventListener('DOMContentLoaded', function(){
    //     console.log("doc is ready");
    //
    // })

   // window.addEventListener("load", function () {
        //alert("is loaded");
        //hidePreloader();
  //  });


    return (<ThemeProvider>
            <div className="App">
                <Preloader/>
                <Layout>
                    <div className="app-content">
                        <WelcomePage/>
                        <DescriptionPage/>
                        <InteriorPage/>
                        <MenuPage/>
                        <SchedulePage/>
                        <FormPage/>
                        <ExtraSliderPage/>
                        <Map/>
                        <Footer/>
                    </div>

                </Layout></div>
        </ThemeProvider>

    );
}
