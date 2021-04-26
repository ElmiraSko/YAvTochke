import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import CompanyPagePhotoPlace from "../companyPagePhotoPlace/CompanyPagePhotoPlace";
import CompanyPageContactsPlace from "../companyPageContacts/CompanyPageContactsPlace";
import CompanyBalanceComponent from "../companyBalanceComponent/CompanyBalanceComponent";
import {NavLink} from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import './styles2/CompanyPage.css'
import telegram3 from "../../img/telegram-2.png";
import telegram2 from "../../img/telegram-grey.png";
import vk2 from "../../img/vk-grey.png";
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MessageIcon from '@material-ui/icons/Message';
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";

export default function CompanyEmployerEdit() {

    // С другой страницы переходтим по ссылке http://localhost:3000/employer/personal-account/edit/?id=1
    let urlVar = window.location.href;
    console.log("Переход") // получаем
    console.log(urlVar) // http://localhost:3000/employer/personal-account/edit/?id=1
    let item = urlVar.split('='); // разделили на две части по разделителю =, получили массив
    // console.log(item)       // ["http://localhost:3000/employer/personal-account/edit/?id", "1"]
    // console.log(item[0])   // первый элемент массива: http://localhost:3000/employer/personal-account/edit/?id
    // console.log(item[1])  //  второй: 1 - id пользователя, тип - строка

    let numId = Number(item[1]);
    // подготавливаем запрос на редактирование пользователя
    // получили процент заполненности профиля
    const progressValue = '65'
    //Количество объявлений и анкет, остаток
    const ads = '5'
    const profiles = '6'
    // Сведения о компании
    const companyName = "ООО «Хорошие люди»"
    const [companyInfo, setCompanyInfo] = useState({
        companyDescription: `«RATOS GROUP» предоставит Вам весь спектр мерчендайзинговых услуг,
     а главное, уверенность в том, что Вашей продукцией будет заниматься команда
      специалистов, действительно способных качественно осуществить поддержку торговой марки
    
        Мы не берёмся за заказы, если хотя бы на 1% сомневаемся в своих силах!
         Наша философия состоит в том, что сотрудничество должно быть качественным, 
         а не количественным.`,
        contacts: {
            email: "pochta@mail.ru",
            phone: "+79056785432",
            telegram: "",
            vk: "",
        }
    })

    const persons = [
        {
            id: 1,
            name: 'Иван Рекрутеров',
            role: 'Пользователь',
            email: 'Ivan@mail.ru',
            phone: '+79034532199',
            telegram: '@Ivan',
            vk: '',
            access: 'Ограничен',
        },
        {
            id: 2,
            name: 'Оксана Петрова',
            role: 'Пользователь',
            email: 'Petrova@mail.ru',
            phone: '+79234532100',
            telegram: '',
            vk: 'id3452139',
            access: 'Ограничен',
        },
        {
            id: 3,
            name: 'Людмила Петрова',
            role: 'Администратор',
            email: 'LudmilaP@mail.ru',
            phone: '+79674535555',
            telegram: '@LyudaPetrova',
            vk: 'id876500255',
            access: 'Разрешен',
        }
    ]
    const [personName, setPersonName] = useState('')
    const [personRole, setPersonRole] = useState('')
    const [personEmail, setPersonEmail] = useState('')
    const [personPhone, setPersonPhone] = useState('')
    const [personTelegram, setPersonTelegram] = useState('')
    const [personVk, setPersonVk] = useState('')

    function findPersonById(personId) {
        persons.map(p => {
            if (p.id === personId) {
                setPersonName(p.name)
                setPersonRole(p.role)
                setPersonEmail(p.email)
                setPersonPhone(p.phone)
                setPersonTelegram(p.telegram)
                setPersonVk(p.vk)
            }
            else
                console.log("Прошли по всем элементам")
        })
    }
    useEffect(() => {
        findPersonById(numId)
    }, [])


    const RedCheckbox = withStyles({
        root: {
            color: '#505350',
            '&$checked': {
                color: '#f04d2d',
            },
        },
        checked: {},
    })((props) =>
        <Checkbox color="default" {...props} />);

    return(
        <div>
            <Container  maxWidth="lg" >
                <div className="wrapper-personal-account">
                    <div className="left-wrapper-personal-account">

                        <div style={{ textAlign: "center",}}>
                            <CompanyPagePhotoPlace progressValue={progressValue} compName={companyName}/>

                            <div className="contacts-wrapper">
                                <div className="contact-title">
                                    Контакты
                                </div>
                                <CompanyPageContactsPlace
                                    contPhone={companyInfo.contacts.phone}
                                    contEmail={companyInfo.contacts.email}
                                    contTelegram={companyInfo.contacts.telegram}
                                    contVk={companyInfo.contacts.vk}
                                />
                            </div>
                            <CompanyBalanceComponent ads={ads} profiles={profiles}/>
                        </div>
                    </div>

                    <div className="right-side-wrapper-company-balance">
                        <div className="flex-between margin_B">
                            <div className="hidden_">
                                text
                            </div>

                            <div>
                                <div className="grey-title margin_T_B ">
                                    Настройка пользователя
                                </div>
                            </div>
                            <div className="margin_L_R">
                                <NavLink to='/employer/personal-account/settings' style={{color: '#505350'}}>
                                    <ClearIcon className="margin_T_B"/>
                                </NavLink>
                            </div>
                        </div>


                        <div className="margin_L_R f-16">
                            <div className="margin_B_2 flex-start">
                                <div className="comp-empl-edit-p _red">
                                    {personRole}:
                                </div>
                                <div className="comp-empl-edit-p m_left_38">
                                    {personName}
                                </div>
                            </div>
                                <div className="contacts-wrapper2 pad_b_28 ">
                                    <div className="contact-title ce-color">
                                        Контакты
                                    </div>
                                    <div className="flex-space-around ce-color2">
                                        <div style={{marginRight: '5px', }}>
                                            <p className="contT">
                                                Телефон:
                                            </p>
                                            <p className="contT">
                                                E-mail:
                                            </p>
                                            <p id="telegram">
                                                <img src={telegram2}
                                                     alt="Иконка Telegram"
                                                     style={{width: '25px', height: '25px',}} />
                                            </p>
                                            <p id="vk">
                                                <img src={vk2}
                                                     alt="Иконка VK"
                                                     style={{width: '25px', height: '25px', }} />
                                            </p>
                                        </div>

                                        <div
                                            // hidden={contactsInfoHidden}
                                        >
                                            <p className="cont">
                                                {personPhone}
                                            </p>
                                            <p className="cont">
                                                {personEmail}
                                            </p>
                                            <p className="cont" style={{paddingTop: '5px'}}>
                                                {personTelegram ? personTelegram : 'Не указан'}
                                            </p>
                                            <p className="cont" style={{paddingTop: '10px'}}>
                                                {personVk ? personVk : 'Не указан'}
                                            </p>
                                        </div>
                                        <div
                                            // hidden={contactsFormHidden}
                                            className="c-page-mTop">
                                            {/*<div className="cont">*/}
                                            {/*    <input  type="tel"*/}
                                            {/*            value={editPhone}*/}
                                            {/*            onChange={editPhoneChange}*/}
                                            {/*            style={{width: '96%'}}*/}
                                            {/*    />*/}
                                            </div>
                                            {/*<div className="cont">*/}
                                            {/*    <input type="email"*/}
                                            {/*           value={editEmail}*/}
                                            {/*           onChange={editEmailChange}*/}
                                            {/*           style={{width: '96%'}}*/}
                                            {/*    />*/}
                                            {/*</div>*/}
                                            {/*<div className="cont">*/}
                                            {/*    <input type="text"*/}
                                            {/*           value={editTelegram}*/}
                                            {/*           onChange={editTelegramChange}*/}
                                            {/*           style={{width: '96%'}}*/}
                                            {/*    />*/}
                                            {/*</div>*/}
                                            {/*<div className="cont">*/}
                                            {/*    <input type="text"*/}
                                            {/*           value={editVk}*/}
                                            {/*           onChange={editVkChange}*/}
                                            {/*           style={{width: '96%'}}*/}
                                            {/*    />*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>

                            <div className="comp-empl-edit-p _red pad_b_10">
                                Настройка уведомлений
                            </div>
                            <div className="ce-color2 c-p-save-button margin_B">
                                Выберите сервис, который будет использоваться для получения уведомлений
                            </div>
                            <div className="flex-start ce-color2">
                                <div>
                                    <div className="flex-only m_r_20">
                                        <MessageIcon style={{color: '#505350',}}/>
                                        <span className="margin_L_R_7 this_link">
                                            СМС-оповещения
                                        </span>
                                    </div>
                                    <div className="align-c">
                                        <RedCheckbox
                                            // checked={adPackage}
                                            // onChange={adPackageHandler}
                                            value=""
                                            disableRipple={true}
                                            style={{ backgroundColor: 'transparent' }}
                                        />
                                    </div>
                                </div>
                                <div className="flex-only">
                                    <div>
                                        <div className="flex-only m_r_20">
                                            <MailIcon style={{color: '#505350',}}/>
                                            <span className="margin_L_R_7 this_link">
                                                Электронная почта
                                            </span>
                                        </div>
                                        <div className="align-c">
                                            <RedCheckbox
                                                // checked={adPackage}
                                                // onChange={adPackageHandler}
                                                value=""
                                                disableRipple={true}
                                                style={{ backgroundColor: 'transparent' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-only m_r_20">
                                    <div>
                                        <div className="flex-only ">
                                            <WhatsAppIcon style={{color: '#505350',}}/>
                                            <span className="margin_L_R_7 this_link">
                                                WhatsApp
                                            </span>
                                        </div>
                                        <div className="align-c">
                                            <RedCheckbox
                                                // checked={adPackage}
                                                // onChange={adPackageHandler}
                                                value=""
                                                disableRipple={true}
                                                style={{ backgroundColor: 'transparent' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-only m_r_20">
                                    <div>
                                        <div className="flex-only ">
                                            <img src={telegram3}
                                                 alt="Иконка Telegram"
                                                 style={{width: '23px', height: '23px',}} />
                                            <span className="margin_L_R_7 this_link">
                                                Telegram
                                            </span>
                                        </div>
                                        <div className="align-c">
                                            <RedCheckbox
                                                // checked={adPackage}
                                                // onChange={adPackageHandler}
                                                value=""
                                                disableRipple={true}
                                                style={{ backgroundColor: 'transparent' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                                {/*<div >*/}
                                {/*    <button className="red-button_ c-p-save-button"*/}
                                {/*            onClick={changeContacts}*/}
                                {/*    >{contactsButtonTitle}</button>*/}
                                {/*</div>*/}


                    </div>
                </div>
            </Container>
        </div>
    )
}