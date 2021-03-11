import React from 'react';
import {Button, Container} from "@material-ui/core";
import AdItem from "../AdItem";

export default function WelcomeWorker() {

    const vacancy = {
        title: "Промоутер",
        desc: "Проведение дегустации в точке продаж, на выходных. Обязательно наличие медицинской книжки и знание правил проведения дегустации.",
        address: "Новокосинская, д. 14а",
        price: "400",
        companyName: "Рога и копыта"
    }

    return(
        <div>
            <Container  maxWidth="md" >
                <div style={{ fontSize: "1.2rem",
                    fontWeight: "600", textAlign: "center", margin: "15px 0px"}}>
                    <div style={{marginBottom: '40px'}}>
                        Вы успешно зарегистрировались на сайте! <br />
                        Рекомендуем вам
                    </div>
                    <div style={{display: "flex", justifyContent: "space-around", marginBottom: "20px"}}>
                        <AdItem vacancy={vacancy} />
                    </div>
                    <div style={{ fontSize: "1.1rem",  }} >
                        Профиль заполнен на 30%
                    </div>

                    <div style={{ fontSize: "1.1rem", margin: "15px 0px", }} >
                        Заполните профиль для больших возможностей
                    </div>

                    <div style={{ margin: "15px 0px", }}>
                        <Button style={{backgroundColor: "#f04d2d",
                            color: "white", margin: "10px 10px 5px 5px", }}
                                href="/personal-account/employees"
                        >
                            Заполнить профиль</Button>
                        <br />
                        <Button  style={{backgroundColor: "#ffb43c",
                            color: "#f5f5f5", margin: "10px 10px 5px 5px", }}  >
                            Опубликовать вакансию</Button>
                    </div>

                </div>

            </Container>

        </div>
    )
}