import React, {useContext, useState} from 'react';
import Context from "../Context";
import Container from "@material-ui/core/Container";
import Ad from '../employeesForCompany/VacanciesText'
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "@material-ui/core/Button";
import creon from "../../img/creon-logo-1.png";
import {NavLink} from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function VacancyDetails() {
    let vacancies = Ad
    const {selectedVacancyId} = useContext(Context)

    function getVacancyById() {
        let vacancy = vacancies.find(item => item.id === selectedVacancyId);
        console.log(vacancy)
        return  vacancy;
    }

    const[vac, setVac] = useState(getVacancyById())

    // переход на обратный урл
    let t = document.referrer // получили адрес с которого перешли
    console.log(t)
    let m = new URL(t, t) // создали новый url
    console.log(m.pathname)  //  вывод пути url-а
    let url =m.pathname+ '#'+selectedVacancyId // урл для перехода на предыдущую страницу с использование якоря вакансии


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
        full_description: `Работа рядом с домом - выбери супермаркет, ближе к твоему дому!
                    Оформление по ТК РФ, белая заработанная плата, выплата 2 раза в месяц.
                                Бесплатное корпоративное обучение, возможность профессионального роста.
                                Накопление повышенного процента баллов по карте лояльности "Вместе", 
                                скидка на кулинарию 30 процентов.`,
        duties: `Обслуживание покупателей на кассе и в торговом зале;
        Выкладка товара;
        Контроль сроков годности продуктов; Проверка наличия и соответствия ценников.`,
        requirements: `Уровень образования: не требуется;
        Опыт работы: не требуется;`,
        idea: `Мы объединяем амбициозных профессионалов своего дела. Мы строим дружеские 
        отношения в коллективе и считаем, что работа - наш второй дом.
        
        Благодарим Вас за проявленный интерес к нашей компании`,
    }
    // useEffect(() => {
    //     let vacancy = vacancies.find(item => item.id === selectedVacancyId);
    //     setVac(vacancy)
    //     console.log(vacancies)
    //     console.log(selectedVacancyId)
    //
    // }, [vac])
    // console.log("vac")
    // console.log(vac)

    return(
        <div>
            <Container maxWidth="md">
                <div  style={{textAlign: 'right', margin: '1em 0 0 0'}}>
                    <NavLink to={url} style={{color: '#505350'}}>
                        <HighlightOffIcon />
                    </NavLink>
                </div>
                {/*<h4>Детали вакансии - {selectedVacancyId}  </h4>*/}

                <div style={{display: "flex", justifyContent: "space-between",}}>
                    <div>
                        <div style={{color: "#f04d2d", fontWeight: "700",
                            fontSize: "1.6rem"}}>
                            {v1.title}
                        </div>
                        <div style={{fontWeight: "700", margin: '10px 0',
                            fontSize: "1.4rem"}}>
                            {v1.price} {v1.unit_of_time}
                        </div>
                        <div style={{fontWeight: "600", margin: '10px 0 15px 0',
                            fontSize: "1.1rem"}}>
                            <LocationOnIcon style={{width: '40px', height: '40px', color: '#f04d2d'}}/>
                            {v1.point}
                        </div>
                        <div style={{ margin: '10px 0',
                            fontSize: "1.1rem"}}>
                            {v1.address}
                        </div>
                        <div style={{margin: '10px 0', color: "#f04d2d", fontWeight: "600",
                            fontSize: "1.1rem"}}>
                            {v1.work_type}
                        </div>
                        <div style={{fontWeight: "400", margin: '10px 0',
                            fontSize: "1.2rem"}}>
                            <span style={{margin: '0 10px 0 0', fontWeight: "600"}}>График работы:</span>

                            {v1.work_schedule}
                        </div>

                    </div>
                    <div style={{textAlign: 'center'}}>
                        <NavLink to={'/vacancy-details/company'} style={{textDecoration: 'none'}}>
                            <div>
                                {/*<Brightness1Icon style={{width: '70px', height: '70px', color: '#848c8e', }}/>*/}
                                <img src={creon} alt="logo" style={{width: '4.0rem',
                                    padding: "10px 0 10px 0", }}/>
                            </div>

                            <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#505350'}}>
                                ООО "Рога и Копыта"
                                {/*{vacancy.companyName}*/}
                            </div>
                        </NavLink>

                        <Button style={{margin: '15px 15px 15px 10px',
                            background: '#f04d2d', color: 'white'}}
                                href='my-responses'
                        >Откликнуться</Button>
                    </div>
                </div>




                <div style={{fontWeight: "600", margin: '10px 0', color: "#f04d2d",
                    fontSize: "1.1rem"}}> Описание:
                </div>
                <div style={{fontWeight: "400", fontSize: "1.1rem", }}>
                    {v1.full_description}
                </div>

                <div style={{fontWeight: "600", margin: '10px 0', color: "#f04d2d",
                    fontSize: "1.1rem"}}> Обязанности:
                </div>
                <div style={{fontWeight: "400", fontSize: "1.1rem", }}>
                    {v1.duties}
                </div>

                <div style={{fontWeight: "600", margin: '10px 0', color: "#f04d2d",
                    fontSize: "1.1rem"}}> Требования:
                </div>
                <div style={{fontWeight: "400", fontSize: "1.1rem", }}>
                    {v1.requirements}
                </div>

                <div style={{fontWeight: "600", margin: '10px 0', color: "#f04d2d",
                    fontSize: "1.1rem"}}>
                </div>
                <div style={{fontWeight: "400", fontSize: "1.1rem", margin: '10px 0 60px 0' }}>
                    {v1.idea}
                </div>
                <div style={{marginRight: "auto", marginLeft: "auto", padding: "10px 0 80px 0",
                    width: '6.0rem', height: "auto", }}>
                    <Button style={{backgroundColor: "#f04d2d", borderRadius: '10px',
                    color: "#fff", padding: "7px 12px" }}
                    // onClick={() => respond(vacancy.id)}
                    > Откликнуться</Button>
                </div>

            </Container>

        </div>
    )

}