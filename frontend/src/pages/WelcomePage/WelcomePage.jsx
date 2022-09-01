import './WelcomePage.scss';

import Header from "../../components/Header/Header";
import {contentPrefix} from "../../js/globals";
import useTheme from "../../hooks/useTheme";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
// import BackgroundVideo from '/videos/welcome_video.mp4';

export default function WelcomePage({page = 'main'}) {
    const {isDarkMode} = useTheme();

    const headerPosition = 'relative';
    return (
        <section className={`welcome-page-container ${page} ${isDarkMode ? 'dark' : 'light'}`}>
            <Header position={headerPosition}/>
            <div className="welcome-preview-container">
                <div className="welcome-preview">
                    <video autoPlay loop muted poster={`${contentPrefix}/images/video_poster.jpg`}>
                        <source src={`${contentPrefix}/videos/welcome_video.mp4`} type="video/mp4"/>
                    </video>
                </div>
                <div className="welcome-preview-text">
                    <ThemeToggle/>
                    <img src={`${contentPrefix}/images/welcome_logo.svg`} alt={''}/>
                    <div className="welcome-preview-subtext">меню по собестоимости</div>
                </div>
            </div>
            <div className="welcome-bottom-container">
                <div className="welcome-bottom-tag">ИСТОРИЯ & СОВРЕМЕННОСТЬ<br/>РОСКОШЬ & ДОСТУПНОСТЬ</div>
                <div className="welcome-bottom-address">НЕВСКИЙ ПРОСПЕКТ, 47</div>
            </div>
        </section>
    );
}