import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import './styles2/Emploees.css';
import './styles2/CompanyPage.css'
import CompanyDescription from './CompanyDescription'
import Ad from "./VacanciesText";
import AdItemForCompany from "../AdItemForCompany";
import vk2 from "../../img/vk-grey.png";
import telegram2 from "../../img/telegram-grey.png";
import CompanyPagePhotoPlace from "../companyPagePhotoPlace/CompanyPagePhotoPlace";
import CompanyBalanceComponent from "../companyBalanceComponent/CompanyBalanceComponent";


const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

export default function CompanyPage() {
    const classes = useStyles();

    const[companyName, setCompanyName] = useState('OOO "Хорошие люди"')

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

    //Можно получить всю инфу сразу одним большим json-ном,
    // но иметь возможность делать запрос в базу на обновление отделько контактов, отдельно описание компании и т.д.
    const [contactsButtonTitle, setContactsButtonTitle] = useState("Изменить")
    const [contactsFormHidden, setContactsFormHidden] = useState(true)
    const [contactsInfoHidden, setContactsInfoHidden] = useState(false)

    // для обновления телефона
    const [editPhone, setEditPhone] = useState("")
    function editPhoneChange(event) {
        setEditPhone(event.target.value)
    }
    // для обновления почты
    const [editEmail, setEditEmail] = useState("")
    function editEmailChange(event) {
        setEditEmail(event.target.value)
    }
    // для обновления почты
    const [editTelegram, setEditTelegram] = useState("")
    function editTelegramChange(event) {
        setEditTelegram(event.target.value)
    }
    // для обновления почты
    const [editVk, setEditVk] = useState("")
    function editVkChange(event) {
        setEditVk(event.target.value)
    }

    function changeContacts() {
        if(contactsButtonTitle === "Изменить") {
            setContactsButtonTitle("Сохранить")
            setContactsFormHidden(false)
            setContactsInfoHidden(true)
            setEditPhone(companyInfo.contacts.phone)
            setEditEmail(companyInfo.contacts.email)
            setEditTelegram(companyInfo.contacts.telegram)
            setEditVk(companyInfo.contacts.vk)
        }else {
            setContactsButtonTitle("Изменить")
            setContactsFormHidden(true)
            setContactsInfoHidden(false)
            setCompanyInfo(prevState => {
                return {
                    ...prevState,
                    contacts: {
                        email: editEmail,
                        phone: editPhone,
                        telegram: editTelegram,
                        vk: editVk,
                    }
                }
            })
        }
    }

    const progressValue = '65'
    const ads = '5'
    const profiles = '6'
    //флаг - показывать псевдо элемент вакансии(true) или нет(false)
    const showPsevdo = false

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

                                    <div hidden={contactsInfoHidden}>
                                        <p className="cont">
                                            {companyInfo.contacts.phone}
                                        </p>
                                        <p className="cont">
                                            {companyInfo.contacts.email}
                                        </p>
                                        <p className="cont">
                                            {companyInfo.contacts.telegram}
                                        </p>
                                        <p className="cont">
                                            {companyInfo.contacts.vk}
                                        </p>
                                    </div>
                                    <div hidden={contactsFormHidden} className="c-page-mTop">
                                        <div className="cont">
                                            <input  type="tel"
                                                    value={editPhone}
                                                    onChange={editPhoneChange}
                                                    style={{width: '96%'}}
                                            />
                                        </div>
                                        <div className="cont">
                                            <input type="email"
                                                   value={editEmail}
                                                   onChange={editEmailChange}
                                                   style={{width: '96%'}}
                                            />
                                        </div>
                                        <div className="cont">
                                            <input type="text"
                                                   value={editTelegram}
                                                   onChange={editTelegramChange}
                                                   style={{width: '96%'}}
                                            />
                                        </div>
                                        <div className="cont">
                                            <input type="text"
                                                   value={editVk}
                                                   onChange={editVkChange}
                                                   style={{width: '96%'}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div >
                                <button className="red-button_ c-p-save-button"
                                        onClick={changeContacts}
                                >{contactsButtonTitle}</button>
                            </div>
                            <CompanyBalanceComponent ads={ads} profiles={profiles}/>
                        </div>
                    </div>

                    <div className="right-wrapper-personal-account-comp">
                        <div className="company">
                            <div className="details-title">
                                ОПИСАНИЕ КОМПАНИИ
                            </div>
                            <div className="details-wrapper2">
                                <div style={{margin: '5px 0'}} >
                                    <CompanyDescription
                                        data = {companyInfo}
                                    />
                                </div>
                                <div style={{margin: '5px 0 10px 15px', textAlign: 'right',
                                cursor: 'pointer', fontSize: '12px', color: '#848C8E', }}>
                                    Изменить
                                </div>
                            </div>
                        </div>

                        <div  className="details-title"> Объявления
                            </div>
                            <div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>
                                <div>
                                    <div>
                                        <AdItemForCompany vacancy = {Ad[0]} show={showPsevdo}/>
                                    </div>
                                    <div>
                                        <AdItemForCompany vacancy = {Ad[1]}/>
                                    </div>

                                </div>

                            </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}