import './FormPage.scss';
import React from 'react';
import axios from "axios";
import useTheme from "../../hooks/useTheme";
import {contentPrefix} from "../../js/globals";


export default function FormPage() {
    // const [isTelValid, setIsTelValid] = React.useState(false);
    // const [nameInput, setNameInput] = React.useState('');
    // const [telInput, setTelInput] = React.useState('');

    const {isDarkMode} = useTheme();


    const [toSend, setToSend] = React.useState({
        from_name: '', from_number: ''
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        //console.log(toSend)
        const clearPhoneNumber = `8${toSend.from_number.replace(/[^+\d]/g, '')}`;
        // send(
        //     'service_ieaqz9h',
        //     'template_drju7my',
        //     {from_name: toSend.from_name, from_number: clearPhoneNumber},
        //     'O_qgr_rXZ3yVvEHkI'
        // ).then(
        //     (response) => {
        //         console.log('Успешное бронирование', response.status, response.text);
        //     }
        // ).catch((err) => {
        //     console.log('Failed...', err);
        // })
        try {
            const request = await axios.post('http://localhost:8080/emails', {
                name: toSend.from_name,
                phoneNumber: clearPhoneNumber
            });
        } catch (err) {
            alert('Не удалось отправить форму');
            console.error(err);
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
                <form className="book-form-container" onSubmit={onSubmit}>
                    <div className="fieldset">
                        <input name={'from_name'} placeholder={'Имя (не обязательно)'} value={toSend.from_name}
                               onChange={handleNameChange}/>
                    </div>
                    <div className="fieldset">
                        <label>+7</label>
                        <input id={'phoneNumberInput'} required name={'from_number'}
                               value={toSend.from_number}
                               onChange={handlePhoneChange}
                               placeholder={'(999) 999-99-99'}
                               type="tel"/>
                    </div>
                    <div className="book-policy-checkbox">
                        <input id="policy-checkbox" className={'custom-checkbox'} required type="checkbox"/>
                        <label className="fake-checkbox" htmlFor="policy-checkbox"/>
                        Я ознакомлен(а) с &nbsp;<a href={`${contentPrefix}/pdf/pdf_example.pdf`} download={'Политика конфиденциальности.pdf'}>политикой конфиденциальности</a>
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


    </section>);
}