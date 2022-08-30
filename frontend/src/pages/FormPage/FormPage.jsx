import './FormPage.scss';
import React from 'react';
import axios from "axios";
import useTheme from "../../hooks/useTheme";
import {contentPrefix} from "../../js/globals";
import Notification from "../../components/Notification/Notification";


export default function FormPage() {
    // const [isTelValid, setIsTelValid] = React.useState(false);
    // const [nameInput, setNameInput] = React.useState('');
    // const [telInput, setTelInput] = React.useState('');

    const {isDarkMode} = useTheme();

    const [isFormCompleted, setIsFormCompleted] = React.useState(false);
    const [isInputCorrect, setIsInputCorrect] = React.useState(true);

    const [toSend, setToSend] = React.useState({
        from_name: '', from_number: ''
    });

    const isPhoneCorrect = (phoneNumber) => {
        if (phoneNumber.length !== 11) {
           // alert('Please change number');
            setIsInputCorrect(false);
            return false;
        }
        setIsInputCorrect(true);
        return true;
    }

    const completeForm = async (e) => {
        e.preventDefault();
        const phoneNumber = `8${toSend.from_number.replace(/[^+\d]/g, '')}`;
        if (isPhoneCorrect(phoneNumber)) {
            axios.post('http://localhost:8080/emails', {
                name: toSend.from_name,
                phoneNumber: phoneNumber
            }).then(() => {
                //console.log('successful request');
                setIsFormCompleted(true);
            }).catch((err) => console.log(err));
        }
    }

    const handleNameChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    }

    const handlePhoneChange = (e) => {
        //console.log(e.target.value)
        const input = e.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
        const areaCode = input.substring(0, 3);
        const middle = input.substring(3, 6);
        const number6_8 = input.substring(6, 8);
        const number8_10 = input.substring(8, 10);
        let number = ''
        if (input.length > 8) {
            number = `(${areaCode}) ${middle} - ${number6_8} - ${number8_10}`;
        } else if (input.length > 6) {
            number = `(${areaCode}) ${middle} - ${number6_8}`;
        } else if (input.length >= 3) {
            number = `(${areaCode}) ${middle}`;
        } else if (input.length > 0) {
            number = `(${areaCode}`;
        }
        setToSend({...toSend, [e.target.name]: number});
    }

    return (<section id="book">
        <div className={`book-container ${isDarkMode ? 'dark' : 'light'}`}>
            <img className="book-hand-top" src={`${contentPrefix}/images/form/form_hand_top.svg`} alt={''}/>
            <img className="book-hand-bottom" src={`${contentPrefix}/images/form/form_hand_bottom.svg`} alt={''}/>
            <div className="book-left">
                <div className="book-title">ЗАБРОНИРОВАТЬ СТОЛИК</div>
                <form className="book-form-container" onSubmit={completeForm}>
                    <div className="fieldset">
                        <input name={'from_name'} type={'text'} placeholder={'Имя (не обязательно)'}
                               value={toSend.from_name}
                               onChange={handleNameChange}/>
                    </div>
                    <div className="fieldset">
                        <label>+7</label>
                        <input id={'phoneNumberInput'} required name={'from_number'}
                               value={toSend.from_number}
                               onChange={handlePhoneChange}
                               placeholder={'(999) 999-99-99'}
                               minLength={5}
                               type="tel"/>

                    </div>
                    <span
                        className={`incorrect-phone ${isInputCorrect ? 'hidden' : 'visible'}`}>Введите номер полностью</span>
                    <div className="book-policy-checkbox">
                        <input id="policy-checkbox" className={'custom-checkbox'} required type="checkbox"/>
                        <label className="fake-checkbox" htmlFor="policy-checkbox"/>
                        Я ознакомлен(а) с &nbsp;<a href={`${contentPrefix}/pdf/pdf_example.pdf`}
                                                   download={'Политика конфиденциальности.pdf'}>политикой
                        конфиденциальности</a>
                    </div>
                    <button type='submit'>ЗАБРОНИРОВАТЬ</button>
                </form>
            </div>
            <div className="book-right">
                <div className="book-right-text">
                    Летняя терасса работает <br/>
                </div>
                <div className="book-right-text">
                    с 12:00 до 00:00 <br/>
                </div>
                <div className="book-right-text">
                    по стандартному прайсу, <br/>без платы за время
                </div>
            </div>
        </div>
        <Notification content={'Скоро мы с Вами свяжемся'} buttonContent={'Понятно'} isVisible={isFormCompleted}
                      action={() => setIsFormCompleted(false)}/>}
    </section>);
}