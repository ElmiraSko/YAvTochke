import React, {useContext, useEffect, useState} from 'react';
import Context from "../Context";
import Container from "@material-ui/core/Container";
import Ad from '../employeesForCompany/VacanciesText'

export default function VacancyDetails() {

    let vacancies = Ad
    const {selectedVacancyId} = useContext(Context)
    const[vac, setVac] = useState('')
    const v1 = {
        id: 12,
        title: "Промоутер",
        desc: "Проведение дегустации в точке продаж, на выходных. Обязательно наличие медицинской книжки и знание правил проведения дегустации.",
        address: "Новокосинская, д. 14а",
        price: "400",
        unit_of_time: "руб/час",
        companyName: "ООО Рога и копыта",
        point: "В точке",
        work_type: "Подработка",
        work_schedule: "5/2 или 2/2",
        full_description: "Работа рядом с домом - выбери супермаркет, ближе к твоему дому! " +
            "Оформление по ТК РФ, белая заработанная плата, выплата 2 раза в месяц. Бесплатное корпоративное обучение, возможность профессионального роста.",

    }


    // useEffect(() => {
    //     let vacancy = vacancies.find(item => item.id === selectedVacancyId);
    //     setVac(vacancy)
    //     console.log(vacancies)
    //     console.log(selectedVacancyId)
    //
    // }, [])



    return(
        <div>
            <Container maxWidth="md">
                <h1>Детали вакансии - {selectedVacancyId}</h1>
                <div style={{color: "#f04d2d",
                    fontWeight: "700",
                    fontSize: "1.4rem"}}>{v1.title}
                </div>
                <div style={{fontWeight: "500", margin: '10px 0',
                    fontSize: "1.3rem"}}>
                    {v1.price} {v1.unit_of_time}
                </div>
                <div style={{fontWeight: "400", margin: '10px 0',
                    fontSize: "1.3rem"}}>
                    {v1.work_schedule}
                </div>
                <div style={{fontWeight: "400", margin: '10px 0',
                    fontSize: "1.2rem"}}>
                    {v1.work_type}
                </div>
                <div style={{fontWeight: "400", margin: '10px 0',
                    fontSize: "1.2rem"}}> Описание:
                    <p>
                        {v1.full_description}
                    </p>

                </div>

            </Container>

        </div>
    )

}