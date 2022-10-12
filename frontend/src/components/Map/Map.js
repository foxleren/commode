import './Map.scss';
import {Link} from "react-scroll";
import Button from "../Button/Button";
import React from "react";

export default function Map() {

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
                    ВС-ЧТ 18:00-05:00<br/> ПТ-СБ 18:00-6:00
                </div>
                <div className="map-card-text">
                    416-48-48
                </div>
                <Link to={'book'} smooth spy duration={500} offset={-115}>
                    <Button content={'Забронировать'} type={'book'} color={'black'} mode={'light'}/>
                    {/*<div className="map-card-button">ЗАБРОНИРОВАТЬ</div>*/}
                </Link>
            </div>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <div className="map">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Af7819755bc70d96ab431acef020a8eb10fd7e1719d36a7c3e44bf1250a7e07a2&amp;source=constructor"
                    width="100%" height={700} frameBorder="0"/>
            </div>
        </div>);
}