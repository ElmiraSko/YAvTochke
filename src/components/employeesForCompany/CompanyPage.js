import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import './styles2/Emploees.css';
import Logo from "../../img/Logo.png";
import CompanyDescription from './CompanyDescription'
import Ad from "./VacanciesText";
import AdItemForCompany from "../AdItemForCompany";
import addPhoto from "../../img/Add-a-photo.png";
import Button from "@material-ui/core/Button";
import SmallProgressBar from "../progressBar/SmallProgressBar";
import vk2 from "../../img/vk-grey.png";
import telegram3 from "../../img/telegram-red.png";
import telegram2 from "../../img/telegram-grey.png";


const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

const companyInfo ={
    companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

export default function CompanyPage() {
    const classes = useStyles();
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
                                        <p id="contT" style={{fontWeight: '500'}}>
                                            Телефон:
                                        </p>
                                        <p id="contT" style={{fontWeight: '500'}}>
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

                                    <div>
                                        <div style={{marginBottom: '10px'}}>
                                            <p id="cont" >
                                                +79056785432
                                            </p>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <p id="cont">
                                                petr@mail.ru
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute-button">
                                <Button style={{background: '#f04d2d', color: 'white',}}
                                        href='/personal-account/employees'
                                >Изменить</Button>
                            </div>
                        </div>
                    </div>

                    <div className="right-side-wrapper-comp">
                        <div className="details-title">
                            ОПИСАНИЕ КОМПАНИИ
                        </div>

                        <div className="details-wrapper2">
                            <div style={{margin: '5px 0 20px 15px'}}>
                                <CompanyDescription data = {companyInfo} />
                            </div>
                            <div style={{margin: '5px 0 20px 15px', textAlign: 'right'}}>
                                Изменить
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