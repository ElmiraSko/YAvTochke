import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import './styles2/Emploees.css';
import CompanyDescription from './CompanyDescription'
import Ad from "./VacanciesText";
import AdItemForCompany from "../AdItemForCompany";
import addPhoto from "../../img/Add-a-photo.png";
import Button from "@material-ui/core/Button";
import SmallProgressBar from "../progressBar/SmallProgressBar";
import vk2 from "../../img/vk-grey.png";
import telegram2 from "../../img/telegram-grey.png";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
    },
}));


export default function CompanyPage() {
    const classes = useStyles();
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

    return(
        <div>
            <Container  maxWidth="lg" >
                <div style={{display: "flex", justifyContent: "space-around",
                    margin: "30px 0px", height: "auto",  fontSize: "1.0rem", }}>

                    <div style={{boxShadow: '0 0 3px 2px rgba(132, 140, 142, 0.5)',
                        width: '30%',  position: 'relative', paddingBottom:'52px' }}>

                        <div style={{ textAlign: "center",}}>
                            <div style={{display: "flex",}}>
                                <div style={{marginTop: '15px', backgroundColor: 'grey',
                                    width: '6.0rem', height: '6.0rem', borderRadius: '50%',
                                    marginLeft: '15px',  }}>
                                    <img src={addPhoto} alt="logo"
                                         style={{width: '2.0rem', marginTop: '30px'}}/>
                                </div>
                                <div style={{marginTop: '15px',
                                    width: '14.0rem', height: '6.0rem',
                                    marginLeft: '15px', }}>
                                    <div style={{fontSize: '1.3rem', fontWeight: '500',
                                        marginBottom: '10px',  marginTop: '5px'}}>
                                        OOO "Хорошие люди"
                                    </div>
                                    <div style={{fontSize: '1.1rem', margin: '0'}}>
                                        Профиль заполнен на
                                    </div>
                                    <div >
                                        <SmallProgressBar value={progressValue}/>
                                    </div>
                                </div>
                            </div>

                            <div className="contacts-wrapper">
                                <div className="contact-title">
                                    КОНТАКТЫ
                                </div>
                                <div className="contact-content-wr">
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
                                    <div hidden={contactsFormHidden}>
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
                                <Button style={{background: '#f04d2d', color: 'white',}}
                                        onClick={changeContacts}
                                >{contactsButtonTitle}</Button>
                            </div>

                            <div style={{marginTop: '20px',
                                width: '20.0rem', height: '12.0rem', marginLeft: 'auto', marginRight: 'auto',
                            border: '1px solid #505350', fontSize: '1.1rem',}}>
                                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px',}}>
                                    <span className="material-icons">
                                    account_balance_wallet
                                </span>
                                    <span style={{marginLeft: '10px', color: '#505350', fontWeight: '500',}}>
                                        Баланс компании
                                    </span>
                                </div>
                                <div style={{textAlign: 'left', marginLeft: '30px',}}>
                                    <p>
                                        Остаток пакета на текущее время:
                                    </p>
                                    <p>
                                        Объявления: 15 Анкеты: 6
                                    </p>
                                    <p>
                                        Администратор аккаунта: Иванова Л.П.
                                    </p>
                                    <div style={{textAlign: 'center', }}>
                                        <NavLink to={"/employer/personal-account/balance"}
                                                 style={{color: '#f04d2d',
                                            textDecoration: 'none', fontWeight: '500',}}>
                                            Подробнее
                                        </NavLink>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div style={{marginTop: '25px',}}>
                                    <NavLink to={"/employer/personal-account/documents"}
                                             style={{color: '#505350',
                                                 textDecoration: 'none', fontWeight: '500', marginTop: '20px',}}>
                                        Бухгалтерские документы
                                    </NavLink>
                                </div>
                                <div style={{marginTop: '15px',}}>
                                    <NavLink to={"/employer/personal-account/settings"}
                                             style={{color: '#505350',
                                                 textDecoration: 'none', fontWeight: '500', marginTop: '20px',}}>
                                        Пользовательские настройки
                                    </NavLink>
                                </div>
                                <div style={{marginTop: '15px',}}>
                                    <NavLink to={"/employer/personal-account/statistics"}
                                             style={{color: '#505350',
                                                 textDecoration: 'none',
                                                 fontWeight: '500',
                                                 }}>
                                        Посмотреть статистику
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="right-side-wrapper-comp">
                        <div className="company">
                            <div className="details-title">
                                ОПИСАНИЕ КОМПАНИИ
                            </div>

                            <div className="details-wrapper2">
                                <div style={{margin: '5px 0 20px 15px'}} >
                                    <CompanyDescription
                                        data = {companyInfo}
                                    />
                                </div>
                                <div style={{margin: '5px 0 10px 15px', textAlign: 'right',
                                cursor: 'pointer', }}>
                                    Изменить
                                </div>
                            </div>
                        </div>

                        <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                                fontWeight: "600", }}> Объявления
                            </div>
                            <div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>
                                <div>
                                    <div>
                                        <AdItemForCompany vacancy = {Ad[0]}/>
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