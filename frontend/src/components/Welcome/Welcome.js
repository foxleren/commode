import './Welcome.scss';
import Header from "../Header/Header";
import {contentPrefix} from "../../js/globals";
import AddressSpan from "../AddressSpan/AddressSpan";
import useTheme from "../../hooks/useTheme";
import {Link} from "react-scroll";
import Button from "../Button/Button";
import React from "react";

export default function Welcome({page = 'home'}) {
    const {isDarkMode} = useTheme();
    const headerPosition = 'relative';
    if (page === 'home') {
        return (<div className={`welcome-container ${page} ${isDarkMode ? 'dark' : 'light'}`}>
            <Header position={'absolute'} page={page}/>
            {/*<div className="intro">*/}
            {/*    <div className="video">*/}
            {/*        <video className={'video_media'} autoPlay loop muted*/}
            {/*               poster={`${contentPrefix}/images/video_poster.jpg`}>*/}
            {/*            <source src={`${contentPrefix}/videos/welcome_video.mps4`} type="video/mp4"/>*/}
            {/*        </video>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={'welcome-top-container'}>
                <video autoPlay loop muted poster={`${contentPrefix}/images/video_preview.jpg`}>
                    <source src={`${contentPrefix}/videos/welcome_video.mp4`} type="video/mp4"/>

                </video>
                <div className={'welcome-content-container'}>
                    {/*<div className="welcome-preview">*/}

                    {/*</div>*/}
                    {/*<div className="welcome-preview-text">*/}
                    {/*    /!*<ThemeToggle/>*!/*/}
                    {/*    <div className="welcome-logo"/>*/}
                    {/*    <div className="welcome-preview-subtext">меню по собестоимости</div>*/}
                    {/*</div>*/}
                    <div className={'welcome-content'}>
                        <img className={'welcome-logo'} src={`${contentPrefix}/images/welcome_logo.svg`} alt={''}/>
                        <div className={'welcome-logo-text lower'}>меню по себестоимости</div>
                        <AddressSpan/>
                        <Link to={'book'} smooth spy duration={500} offset={-115}>
                            <Button content={'Забронировать'} type={'book'} color={'white'} mode={'light'}/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="welcome-bottom-container">
                <div className="welcome-bottom-tag">ИСТОРИЯ & СОВРЕМЕННОСТЬ<br/>РОСКОШЬ & ДОСТУПНОСТЬ</div>
                <AddressSpan/>
            </div>

        </div>);
    } else {
        return (<div className={`welcome-container ${page}`}>
            <Header position={headerPosition} page={page}/>
            <div className={'welcome-content-container'}>
                <div className={'welcome-content'}>
                    <div className={'welcome-logo-text upper'}>доверьте важный день</div>
                    <img className={'welcome-logo'} src={`${contentPrefix}/images/welcome_logo.svg`} alt={''}/>
                    <div className={'welcome-logo-text lower'}>доверьте важный день</div>
                    <AddressSpan/>
                    <Link to={'book'} smooth spy duration={500} offset={-115}>
                        <Button content={'Забронировать'} type={'book'} color={'white'} mode={'light'}/>
                    </Link>
                </div>
            </div>
        </div>);
    }

}