import React from 'react';
import {Container} from "@material-ui/core";
import AdItem from "../AdItem";
import WelcomeComponent from "../employeesForCompany/WelcomeComponent";

export default function WelcomeWorker() {

    const vacancy = {
        id: 23,
        title: "Промоутер",
        desc: "Проведение дегустации в точке продаж, на выходных. Обязательно наличие медицинской книжки и знание правил проведения дегустации.",
        address: "Новокосинская, д. 14а",
        price: "400",
        companyName: "Рога и копыта",
        unit_of_time: "руб/час",
        point: "Точка рядом",
        imgUrl: `/images/creon-logo-1.png`,
    }

    const pageFor = <AdItem vacancy={vacancy} />
    const buttonHref = "/personal-account/employees"
    const progressValue = '30'
    const text2 = 'Дополните свой профиль, чтобы находить наиболее подходящие вакансии'

    return(
        <div>
            <Container  maxWidth="md" >
                <WelcomeComponent
                    buttonHref={buttonHref}
                    progressValue={progressValue}
                    pageFor={pageFor}
                    text2={text2}
                />
            </Container>

        </div>
    )
}