import './WelcomePage.scss';

import Header from "../../components/Header/Header";
import {contentPrefix} from "../../js/globals";
import useTheme from "../../hooks/useTheme";
// import BackgroundVideo from '/videos/welcome_video.mp4';

export default function WelcomePage() {
    const {isDarkMode} = useTheme();

    return (
        <section className={`welcome-page-container ${isDarkMode ? 'dark' : 'light'}`}>
            <Header/>
            <div className="welcome-preview-container">
                <div className="welcome-preview">
                    <video autoPlay loop muted>
                        <source src={`${contentPrefix}/videos/welcome_video.mp4`} type="video/mp4"/>
                    </video>
                </div>
                <div className="welcome-preview-text">
                    <img src={`${contentPrefix}/images/welcome_logo.svg`} alt={''}/>
                    <div>меню по собестоимости</div>
                </div>
            </div>
            <div className="welcome-bottom-container">
                <div className="welcome-bottom-tag">ИСТОРИЯ & СОВРЕМЕННОСТЬ<br/>РОСКОШЬ & ДОСТУПНОСТЬ</div>
                <div className="welcome-bottom-address">НЕВСКИЙ ПРОСПЕКТ, 47</div>
            </div>
        </section>
    );
}