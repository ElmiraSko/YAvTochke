import React from 'react';
import {Button, Container} from "@material-ui/core";
import AdItem from "../AdItem";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function WelcomeWorker() {

    const vacancy = {
        title: "Промоутер",
        desc: "Проведение дегустации в точке продаж, на выходных. Обязательно наличие медицинской книжки и знание правил проведения дегустации.",
        address: "Новокосинская, д. 14а",
        price: "400",
        companyName: "Рога и копыта",
        unit_of_time: "руб/час",
        point: "Точка рядом",
        imgUrl: `/images/creon-logo-1.png`,
    }

    return(
        <div>
            <Container  maxWidth="md" >
                <div style={{ fontSize: "1.2rem",
                    fontWeight: "600", textAlign: "center", margin: "20px 0px"}}>
                    <CheckCircleOutlineIcon style={{width: '36px', height: '36px', color: '#f04d2d' }}/>
                    <div style={{margin: '15px 0', textTransform: 'uppercase'}}>
                        Регистрация прошла успешно
                    </div>
                    <div style={{marginBottom: '40px', textTransform: 'uppercase', fontSize: "1.0rem",}}>
                        Рекомендуем
                    </div>
                    <div style={{display: "flex", justifyContent: "space-around", marginBottom: "20px"}}>
                        <AdItem vacancy={vacancy} />
                    </div>
                    <div style={{ fontSize: "1.1rem", padding: '15px 0', }} >
                        Профиль заполнен на 30%
                    </div>

                    <div style={{ margin: "15px 0px", }}>

                        <Button style={{backgroundColor: "#f04d2d", width: '150px',
                            color: "white", margin: "10px 10px 50px 5px", }}
                                href="/personal-account/employees"
                        > Дополнить</Button>
                        <br />
                        <div style={{ fontSize: "1.0rem", width: '400px', marginBottom: '60px',
                            margin: "auto", textTransform: 'uppercase'}} >
                            Дополните свой профиль, чтобы находить
                            наиболее подходящие вакансии
                        </div>
                    </div>
                </div>

            </Container>

        </div>
    )
}