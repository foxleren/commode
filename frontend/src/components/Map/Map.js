import Script from "../Script/Script";
import './Map.scss';
import {Link} from "react-scroll";
import Button from "../Button/Button";
import React from "react";
const link = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4c85148e7c2c826b456287b64fea0701b13dc6d3720c9d3493ae32f8bb7223d4&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true';

export default function Map() {

    let mapHeight = 720;
    // if (window.innerWidth <= 650) {
    //    mapHeight = 400;
    // }
    return (

        <div className="map-container">
            <div className="map-card-container">
                <div className="map-card-title">
                    КАК НАС НАЙТИ?
                </div>
                <div className="map-card-text">
                    Невский проспект, 47
                </div>
                <div className="map-card-text">
                    ВС-ЧТ 12:00-05:00<br/> ПТ-СБ 12:00-07:00
                </div>
                <div className="map-card-text">
                    16-48-48
                </div>
                <Link to={'book'} smooth spy duration={500} offset={-115}>
                    <Button content={'Забронировать'} type={'book'} color={'black'} mode={'light'}/>
                    {/*<div className="map-card-button">ЗАБРОНИРОВАТЬ</div>*/}
                </Link>

            </div>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <div className="map">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A4c85148e7c2c826b456287b64fea0701b13dc6d3720c9d3493ae32f8bb7223d4&amp;source=constructor"
                    width="100%" height={mapHeight} frameBorder="0"/>
            </div>

            {/*<Script src={link}/>*/}
            {/*<script type="text/javascript" charSet="utf-8" async*/}
            {/*        src=></script>*/}
        </div>);
}