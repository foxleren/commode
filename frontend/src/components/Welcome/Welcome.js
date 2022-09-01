import './Welcome.scss';
import Header from "../Header/Header";
import {contentPrefix} from "../../js/globals";
import AddressSpan from "../AddressSpan/AddressSpan";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import useTheme from "../../hooks/useTheme";

export default function Welcome({page = 'home'}) {
    const {isDarkMode} = useTheme();
    const headerPosition = 'relative';
    if (page === 'home') {
        return (
            <div className={`welcome-container ${page} ${isDarkMode ? 'dark' : 'light'}`}>


                <Header position={headerPosition} page={page}/>
                {/*<div className="intro">*/}
                {/*    <div className="video">*/}
                {/*        <video className={'video_media'} autoPlay loop muted*/}
                {/*               poster={`${contentPrefix}/images/video_poster.jpg`}>*/}
                {/*            <source src={`${contentPrefix}/videos/welcome_video.mps4`} type="video/mp4"/>*/}
                {/*        </video>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="welcome-preview-container">
                    <div className="welcome-preview">
                        <video autoPlay loop muted poster={`${contentPrefix}/images/video_preview.jpg`}>
                            <source src={`${contentPrefix}/videos/welcome_video.mp4`} type="video/mp4"/>
                        </video>
                    </div>
                    <div className="welcome-preview-text">
                        <ThemeToggle/>
                        <div className="welcome-logo"/>
                        <div className="welcome-preview-subtext">меню по собестоимости</div>
                    </div>
                </div>
                <div className="welcome-bottom-container">
                    <div className="welcome-bottom-tag">ИСТОРИЯ & СОВРЕМЕННОСТЬ<br/>РОСКОШЬ & ДОСТУПНОСТЬ</div>
                    <div className="welcome-bottom-address">НЕВСКИЙ ПРОСПЕКТ, 47</div>
                </div>
            </div>
        );
    } else {
        return (<div className={`welcome-container ${page}`}>
            <Header position={headerPosition} page={page}/>
            <div className={'welcome-content-container'}>
                <div className={'welcome-content'}>
                    <div className={'welcome-logo-text upper'}>Доверьте важный день</div>
                    <img className={'welcome-logo'} src={`${contentPrefix}/images/welcome_logo.svg`} alt={''}/>
                    <AddressSpan/>
                </div>
            </div>
        </div>);
    }

}