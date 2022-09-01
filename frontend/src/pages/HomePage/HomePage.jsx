import DescriptionPage from "../DescriptionPage/DescriptionPage";
import InteriorPage from "../InteriorPage/InteriorPage";
import MenuPage from "../MenuPage/MenuPage";
import SchedulePage from "../SchedulePage/SchedulePage";
import FormPage from "../FormPage/FormPage";
import ExtraSliderPage from "../ExtraSliderPage/ExtraSliderPage";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";
import usePreloader from "../../hooks/usePreloader";
import {useEffect} from "react";
import Welcome from "../../components/Welcome/Welcome";
import useTheme from "../../hooks/useTheme";
import '../WelcomePage/WelcomePage.scss';
import './HomePage.scss';

export default function HomePage() {
    const {showPreloader, isVisible, setIsVisible} = usePreloader();
    const {isDarkMode} = useTheme();

    const show = async () => {
        await setTimeout(() => console.log('after 5 seconds'), 5000);
    }
    useEffect(() => {
        //setIsVisible(false);
        show().catch()
        return () => {
            showPreloader(1500);
        }
    }, [])

    return (<div className={`home-page ${isDarkMode ? 'dark' : 'light'}`}>
        <Welcome page={'home'}/>
        <DescriptionPage/>
        <InteriorPage/>
        <MenuPage/>
        <SchedulePage/>
        <FormPage page={'home'}/>
        <ExtraSliderPage/>
        <Map/>
        <Footer/>
    </div>);

}