import DialogSection from "../../sections/DialogSection/DialogSection";
import InteriorSection from "../../sections/InteriorSection/InteriorSection";
import MenuSection from "../../sections/MenuSection/MenuSection";
import SchedulePage from "../SchedulePage/SchedulePage";
import FormPage from "../FormPage/FormPage";
import ExtraSlider from "../../components/ExtraSlider/ExtraSlider";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";
import usePreloader from "../../hooks/usePreloader";
import React, {useEffect, useState} from "react";
import Welcome from "../../components/Welcome/Welcome";
import useTheme from "../../hooks/useTheme";
//import '../WelcomePage/WelcomePage.scss';
import './HomePage.scss';
import Header from "../../components/Header/Header";
import Notification from "../../components/Notification/Notification";
import useNotification from "../../hooks/useNotification";

export default function HomePage() {
    const {showPreloader} = usePreloader();
    const {isDarkMode} = useTheme();
    //const [isNotificationVisible, setIsNotificationVisible] = React.useState(false);
   // const {isNotificationClosed, setIsNotificationClosed] = React.useState(false);
    const {isNotificationVisible, setIsNotificationVisible, isNotificationClosed, setIsNotificationClosed} = useNotification();
    //setIsNotificationVisible(!isNotificationVisible);
    // const show = async () => {
    //     await setTimeout(() => console.log('after 5 seconds'), 5000);
    // }
    useEffect(() => {
        //setIsVisible(false);
        //show().catch()
        return () => {
            showPreloader(1500);
            window.scrollTo({top: 0});
            //setIsNotificationVisible();
        }
    }, [])

    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isDialogReady, setIsDialogReady] = useState(false);
    const [isScheduleReady, setIsScheduleReady] = useState(false);

    const tryToShowNotification = (scrolled) => {
        let interiorSectionPos = window.document.getElementById('interior').offsetTop - 100;
        if (scrolled > interiorSectionPos && !isNotificationClosed) {
            setIsNotificationVisible(true);
            setIsNotificationClosed(true);
        }
    }

    const tryToShowDialog = (scrolled) => {
        if (!isDialogReady) {
            let message1 = window.document.getElementById('dialog-message-1');
            let message2 = window.document.getElementById('dialog-message-2');
            let message3 = window.document.getElementById('dialog-message-3');
            let message4 = window.document.getElementById('dialog-message-4');
            let message1Pos = message1.offsetTop + 350;
            let message2Pos = message2.offsetTop + 350;
            let message3Pos = message3.offsetTop + 350;
            let message4Pos = message4.offsetTop + 350;
            // console.log(message1.offsetTop)
            //let scrolled = window.pageYOffset;
            if (scrolled > message1Pos) {
                message1.classList.remove('hidden');
                message1.classList.add('visible');
                //    console.log('dialog begin')
            }
            if (scrolled > message2Pos) {
                message2.classList.remove('hidden');
                message2.classList.add('visible');
                //console.log('2')
            }
            if (scrolled > message3Pos) {
                message3.classList.remove('hidden');
                message3.classList.add('visible');
                //  console.log('3')
            }
            if (scrolled > message4Pos) {
                message4.classList.remove('hidden');
                message4.classList.add('visible');
                setIsDialogReady(true);
                //   console.log('dialog end')
                //  console.log('4')
            }
        }
    }

    const tryToShowFixedHeader = (scrolled) => {
        let dialogSection = window.document.getElementById('dialog').offsetTop - 200;
        if (scrolled > dialogSection) {
            setIsHeaderVisible(true);
        } else {
            setIsHeaderVisible(false);
        }
    }

    const tryToShowSchedule = (scrolled) => {
        let scheduleMessages = window.document.getElementById('schedule-messages');
        //  let scheduleMessage2 = window.document.getElementById('schedule-message-2');
        let scheduleMessagesPos = window.pageYOffset + scheduleMessages.getBoundingClientRect().top - 700;
        //let scheduleMessage2Pos = window.pageYOffset + scheduleMessage2.getBoundingClientRect().top;
        // console.log('block pos: ', scheduleMessagesPos);
        // console.log('scroll pos: ', scrolled);
        if (!isScheduleReady) {

            //let scrolled = window.pageYOffset;
            if (scrolled > scheduleMessagesPos) {
                scheduleMessages.classList.remove('hidden');
                scheduleMessages.classList.add('visible');
                //    console.log('schedule begin')
                setIsScheduleReady(true);
            }
            // if (scrolled > scheduleMessage2Pos) {
            //     scheduleMessage2.classList.remove('hidden');
            //     scheduleMessage2.classList.add('visible');
            //
            //     console.log('schedule end')
            //     //console.log('2')
            // }
        }
    }

    window.onscroll = () => {
        // console.log('home');

        // let dialogSection = window.document.getElementById('dialog').offsetTop - 200;
        let scrolled = window.pageYOffset;
        tryToShowDialog(scrolled);
        tryToShowFixedHeader(scrolled);
        tryToShowSchedule(scrolled);
        tryToShowNotification(scrolled);
        //
        // // window.onscroll = () => {

    }

    return (<div className={`home-page ${isDarkMode ? 'dark' : 'light'}`}>
        <Header page={'home'} position={'fixed'} isVisible={isHeaderVisible}/>
        <Welcome page={'home'}/>
        <DialogSection/>
        <InteriorSection/>
        <MenuSection/>
        <SchedulePage/>
        <FormPage page={'home'}/>
        <ExtraSlider/>
        <Map/>
        <Footer/>
        <Notification type={'toBook'} content={isDarkMode ? '???????? ???????????????? ?? ??????????' : '???????????? ???? ??????????????????????????'}
                      buttonContent={'??????????????'} isVisible={isNotificationVisible}
                      action={() => setIsNotificationVisible(false)}/>
    </div>);

}