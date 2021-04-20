import React, {useEffect, useState} from 'react';
import HorL from "../../img/logo_HL _1.png";
import {Container} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import AdItem from "../AdItem";
import Ad from "../employeesForCompany/VacanciesText";
import ClearIcon from '@material-ui/icons/Clear';
import {NavLink} from "react-router-dom";
import telegram2 from "../../img/telegram-grey.png";
import telegram3 from "../../img/telegram-red.png";
import vk2 from "../../img/vk-grey.png";
import vk3 from "../../img/vk-red.png"

export default function VacancyCompany(){

    //предпочтительный способ связи: mail или phone
    const [preferredCommunication, setPreferredCommunication] = useState('')
    // цвет иконки #f04d2d - красный, #0c1618 - темный, #848c8e - серый
    const [mailColor, setMailColor] = useState('#848c8e')
    const [phoneColor, setPhoneColor] = useState('#848c8e')
    // функция установки предпочтительного способа связи - email
    function setPreferredEmail() {
        setPreferredCommunication('email')
    }
    // функция установки предпочтительного способа связи - phone
    function setPreferredPhone() {
        setPreferredCommunication('phone')
    }
    // функция установки предпочтительного способа связи - vk
    function setPreferredVK() {
        setPreferredCommunication('vk')
    }
    // функция установки предпочтительного способа связи - telegram
    function setPreferredTelegram() {
        setPreferredCommunication('telegram')
    }
    // Проверку способа связи выполняем в useEffect, т. к. SetState является асинхронным,
    // то придется использовать локальную переменную или useEffect,
    // чтобы посмотреть, когда состояние уже обновлено
    useEffect(() => {
        isPreferredCommunication()
    }, [preferredCommunication])

    function isPreferredCommunication() {
        if (preferredCommunication === 'email')  {
            setMailColor('#f04d2d')
            setPhoneColor('#848c8e')
        } else
        if (preferredCommunication === 'phone') {
            setPhoneColor('#f04d2d')
            setMailColor('#848c8e')
        } else
        if (preferredCommunication === 'vk') {
            setPhoneColor('#848c8e')
            setMailColor('#848c8e')
        }
        else
        if (preferredCommunication === 'telegram') {
            setPhoneColor('#848c8e')
            setMailColor('#848c8e')
        }
    }

    return(
        <Container  maxWidth="lg" >
            <div  style={{textAlign: 'right', margin: '1em 0 0.5em 0'}}>
                <NavLink to='/vacancy-details' style={{color: '#505350'}}>
                    <ClearIcon />
                </NavLink>
            </div>

            <div style={{display: "flex", justifyContent: "space-between", margin: '0.5em 0 2em 0'}}>

                <div style={{boxShadow: '0 0 3px 3px rgba(80, 83, 80, 0.5)',
                    width: '30%', textAlign: 'center'}}>
                    <img src={HorL} alt="logo" style={{width: '7.0rem',
                        padding: "15px 0 10px 0", }}/>
                    <h2 style={{fontStyle: 'normal', fontWeight: 'bold',
                        fontSize: '16px',
                        lineHeight: '19px' }}>
                        {/*{vacancy.companyName}*/} ООО "Хорошие люди"
                    </h2>
                    <p>
                        Предпочтительный способ связи:
                    </p>

                    <div style={{margin: "10px 0 20px 0 ", display: 'flex', justifyContent: 'center'}} >
                        <IconButton onClick={setPreferredEmail}
                                    style={{ backgroundColor: 'transparent' }}
                                    disableRipple={true} >
                            <MailIcon style={{ fontSize: 30, color: mailColor, }} />
                        </IconButton>
                        <IconButton onClick={setPreferredPhone}
                                    style={{ backgroundColor: 'transparent' }}
                                    disableRipple={true}>
                            <PhoneIcon style={{ fontSize: 30, color: phoneColor,}} />
                        </IconButton>
                        <IconButton onClick={setPreferredVK}
                            style={{ backgroundColor: 'transparent' }}
                                    disableRipple={true}>
                            <img src={preferredCommunication==='vk' ? vk3 : vk2}
                                 alt="Иконка VK"
                                 style={{width: '27px', height: '27px', }} />
                        </IconButton>
                        <IconButton onClick={setPreferredTelegram}
                            style={{ backgroundColor: 'transparent' }}
                                    disableRipple={true}>
                            <img src={preferredCommunication==='telegram' ? telegram3 :telegram2}
                                 alt="Иконка Telegram"
                                 style={{width: '27px', height: '27px',}} />
                        </IconButton>
                    </div>

                    <div style={{fontStyle: 'normal', fontWeight: '500',
                        fontSize: '14px', lineHeight: '20px', textTransform: 'uppercase' }}>
                        Контакты
                    </div>

                    <div style={{display: "flex", justifyContent: "space-around", margin: '0 0  30px 0'}}>
                        <section style={{textAlign: 'left', width: "70px"}}>
                            <p>Телефон:</p>
                            <p>Email:</p>
                            <p>Адрес:</p>
                        </section>
                        <section style={{textAlign: 'left', width: "240px"}}>
                            <p>+79324566543</p>
                            <p>pochta@mail.com</p>
                            <p>Новокосинская, 14А, офис 3</p>
                        </section>
                    </div>

                </div>
                <div style={{border: '1px solid #848c8e', width: '65%', }}>
                    <div style={{textAlign: 'center' , paddingTop:'40px'}}>
                        <h1 style={{fontStyle: 'normal', fontWeight: 'bold',
                            fontSize: '16px',
                            lineHeight: '19px' }}>О компании</h1>
                    </div>
                    <div style={{padding: '15px 30px', fontWeight: 'normal',
                        fontStyle: 'normal', fontSize: '16px', color: '#0C1618', }}>
                        <p>
                            Рекламное БТЛ-агентство «Хорошие люди» специализируется на
                            комплексе маркетинговых мероприятий, направленных на прямой контакт
                            с целевой аудиторией в точках продаж. Развитая сеть филиалов
                            БТЛ-агентства обеспечивает оперативный запуск проектов национального масштаба.
                        </p>
                        <p>
                            Мы увеличиваем продажи наших клиентов!
                        </p>
                        <p>
                            БТЛ — система маркетинговых методов и
                            инструментов, которая в отличии от прямой рекламы воздействует на
                            каждого участника целевой аудитории лично и непосредственно в точке продаж.
                            Благодаря этому формируется индивидуальный способ взаимодействия с каждым клиентом.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{textAlign: 'center',  margin: '0 0  60px 0'}}>
                <h1 style={{fontWeight: 'bold', margin: '0 0  30px 0',
                    fontStyle: 'normal', fontSize: '16px', lineHeight: '19px' }}>
                    Объявления
                </h1>
                <AdItem vacancy = {Ad[0]}/>
            </div>
        </Container>
    )
}