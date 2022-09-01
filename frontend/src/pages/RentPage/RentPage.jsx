import './RentPage.scss';
import Welcome from "../../components/Welcome/Welcome";
import BanquetMenu from "../../components/BanquetMenu/BanquetMenu";
import BanquetHall from "../../components/BanquetHall/BanquetHall";
import Footer from "../../components/Footer/Footer";
import FormPage from "../FormPage/FormPage";
import {useEffect} from "react";
import usePreloader from "../../hooks/usePreloader";

export default function RentPage() {
    const {showPreloader, isVisible, setIsVisible} = usePreloader();

    // useEffect(() => {
    //     window.addEventListener('unhandledRejection', async () => {
    //         await showPreloader(1000);
    //     });
    //     // return () => {
    //     //     window.removeEventListener('unhandledRejection', showPreloader(1000));
    //     // }
    // }, [])
    // useEffect(() => {
    //   //  window.addEventListener('mousemove', () => {});
    //
    //     // returned function will be called on component unmount
    //     return () => {
    //        showPreloader(2000)
    //     }
    // }, [])
    useEffect(() => {
        //setIsVisible(false);
        return () => {
            showPreloader(1500);
        }
    }, [])
    return (
        <div className="rent-page">
            <Welcome page={'rent'}/>
            <BanquetMenu/>
            <BanquetHall/>
            <FormPage/>
            <Footer/>
        </div>
    );
}