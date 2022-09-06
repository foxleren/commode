import './RentPage.scss';
import Welcome from "../../components/Welcome/Welcome";
import BanquetMenu from "../../components/BanquetMenu/BanquetMenu";
import BanquetHall from "../../components/BanquetHall/BanquetHall";
import Footer from "../../components/Footer/Footer";
import FormPage from "../FormPage/FormPage";
import {useEffect} from "react";
import usePreloader from "../../hooks/usePreloader";
import {useState} from "react";
import Header from "../../components/Header/Header";

export default function RentPage() {
    const {showPreloader} = usePreloader();

    useEffect(() => {
        //setIsVisible(false);
         document.body.scrollTop = 0;
        return () => {
            showPreloader(1500);
            window.scrollTo({top: 0});
        }
    }, [])
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    window.onscroll = () => {
        let secondSection = window.document.getElementById('banquet-menu').offsetTop - 200;
        let scrolled = window.pageYOffset;
        if (scrolled > secondSection) {
            setIsHeaderVisible(true);
        } else {
            setIsHeaderVisible(false);
        }
    }
    return (
        <div className="rent-page">
            <Header page={'rent'} position={'fixed'} isVisible={isHeaderVisible}/>
            <Welcome page={'rent'}/>
            <BanquetMenu/>
            <BanquetHall/>
            <FormPage/>
            <Footer/>
        </div>
    );
}