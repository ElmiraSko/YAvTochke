import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Container} from "@material-ui/core";
import './styles2/Emploees.css';
import Logo from "../../img/Logo.png";
import CompanyDescription from './CompanyDescription'
import AdItem from "../AdItem";
import Ad from "./VacanciesText";


const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

const companyInfo ={
    companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

export default function CompanyPage() {
    const classes = useStyles();

    return(
        <div>
            <Container  maxWidth="md" >
                    <div style={{display: "flex", justifyContent: "flex-start",
                        fontSize: "1.2rem",
                        fontWeight: "600",}}>

                        <div style={{width: "14rem", textAlign: "center"}}>
                            <div>
                                <img src={Logo} alt="logo"
                                     style={{width: '3.0rem', padding: "30px 0 10px 0"}}/>
                            </div>
                            <div style={{margin: "auto"}}>
                                Профиль <br/> заполнен на 30%
                                <div  style={{ fontSize: "1.0rem",  paddingTop: "10px" }}>
                                    <a href=" " style={{textDecoration: "none", color: "blue",}}>
                                        Изменить пароль
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="title" style={{ width: "500px",textAlign: "left" }}>
                            OOO Рога и Копыта
                            <div style={{display: "flex", justifyContent: "space-start",
                                fontSize: "1.1rem",}}>
                                <div style={{textAlign: "left", marginRight: "15px"}}>
                                    Контакты <br />
                                    Телефон:  <br />
                                    Email:  <br />
                                    Телеграм: <br />
                                    VK:  <br />
                                    Адрес:  <br />
                                </div>
                                <div style={{textAlign: "left"}}>
                                    Изменить <br />
                                    8 989 999 99 99  <br />
                                    pochta@mail.ru  <br />
                                    @rogakopita <br />
                                    vk.com/id9999999  <br />
                                    Новокосинская, д. 14а, офис 3  <br />
                                </div>
                            </div>
                        </div>
                    </div>
                <hr />
            </Container>


            <Container maxWidth="md">

                <div style={{padding: "20px 0px 30px 0px", textAlign: "left", fontSize: "1.4rem",
                    fontWeight: "600", }}> Описание компании
                </div>
                <CompanyDescription data = {companyInfo} />

                <div style={{padding: "20px 0px 30px 0px", textAlign: "left", fontSize: "1.4rem",
                    fontWeight: "600", }}> Объявления
                </div>
                <div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>
                    <div>
                        <div>
                            <AdItem vacancy = {Ad[0]}/>
                        </div>
                        <div>
                            <AdItem vacancy = {Ad[1]}/>
                        </div>

                    </div>

                </div>




            </Container>


        </div>
    )
}