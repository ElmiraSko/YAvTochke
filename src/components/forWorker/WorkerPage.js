import React from 'react';
import {Button, Container} from "@material-ui/core";
import '../employeesForCompany/styles2/Emploees.css';
import Logo from "../../img/Logo.png";


export default function WorkerPage() {

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
                        Степан Степанов
                        <div style={{display: "flex", justifyContent: "space-start",
                            fontSize: "1.1rem",}}>
                            <div style={{textAlign: "left", marginRight: "15px"}}>
                                Пол: <br />
                                Дата рождения: <br />
                                Гражданство: <br />
                                Контакты <br />
                                Телефон:  <br />
                                Email:  <br />
                                Телеграм: <br />
                                VK:  <br />
                                Адрес:  <br />
                            </div>
                            <div style={{textAlign: "left"}}>
                                M <br />
                                02.11.1990 <br />
                                РФ <br />
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



        </div>
    )
}