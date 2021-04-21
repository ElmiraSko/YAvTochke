import React, {useContext, useState} from 'react';
import Context from "../Context";
import Container from "@material-ui/core/Container";
import Ad from '../employeesForCompany/VacanciesText'
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "@material-ui/core/Button";
import creon from "../../img/creon-logo-1.png";
import {NavLink} from "react-router-dom";
import ClearIcon from '@material-ui/icons/Clear';
import './styles1/VacancyDetails.css'

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
    let t = document.referrer // получили адрес с которого перешли, полный путь
    console.log(t)            // http://localhost:3000/vacancies
    let m = new URL(t, t) // создали новый url
    let path = m.pathname
    console.log(path)  //  вывод пути url-а,  /vacancies
    console.log(path.startsWith('/vacancies')) // в зависимости откуда пришли, отображать кнопку Откликнуться или нет
    let url = path + '#'+selectedVacancyId // урл для перехода на предыдущую страницу с использование якоря вакансии


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
        full_description: `Работа рядом с домом – выбери супермаркет, ближайший к твоему дому! 
        График работы: 5/2, 2/2, также возможны частичная занятость и работа по совместительству; 
        Оформление по ТК РФ с 1-го рабочего дня; Белая заработная плата, выплата 2 раза в месяц; 
        Ежемесячные премии-надбавки; Премии и призы по результатам профессиональных и творческих конкурсов; 
        Подарки детям на Новый год! Бесплатное профессиональное обучение; 
        Накопление повышенного процента баллов по карте лояльности «Вместе», скидка на кулинарию 30%.`,
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
            <Container maxWidth="lg">
                <div  style={{textAlign: 'right', margin: '15px 10px 0 0'}}>
                    <NavLink to={url} style={{color: '#505350'}}>
                        <ClearIcon />
                    </NavLink>
                </div>
            </Container>

            <Container maxWidth="md">
                {/*<h4>Детали вакансии - {selectedVacancyId}  </h4>*/}
                <div className="flex-between">
                    <div>
                        <div className="v-d-title">
                            {v1.title}
                        </div>
                        <div className="v-d-price">
                            {v1.price} {v1.unit_of_time}
                        </div>
                        <div className="v-d-icon flex-only">
                            <LocationOnIcon style={{width: '40px', height: '40px', color: '#f04d2d'}}/>
                            <div className="point-t">
                                {v1.point}
                            </div>
                        </div>
                        <div className="v-d-address ">
                            {v1.address}
                        </div>
                        <div className="v-d-work_type">
                            {v1.work_type}
                        </div>
                        <div className="v-d-work_sch">
                            <span style={{marginRight: '10px',}}>
                                График работы:
                            </span>
                            {v1.work_schedule}
                        </div>
                    </div>

                    <div style={{textAlign: 'center', }}>
                        <NavLink
                            to={`${path.startsWith('/employer') ? '/employer/personal-account':'/vacancy-details/company'}`}
                            style={{textDecoration: 'none'}}>
                            <div>
                                <img src={creon} alt="logo" style={{width: '120px',
                                    }}/>
                            </div>
                            {/*<div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#505350'}}>*/}
                            {/*    ООО "Рога и Копыта"*/}
                            {/*    /!*{vacancy.companyName}*!/*/}
                            {/*</div>*/}
                        </NavLink>
                        {path.startsWith('/employer') ? '' :
                            <Button style={{margin: '15px 15px 15px 10px',
                            background: '#f04d2d', color: 'white'}}
                                    href='my-responses'
                        >Откликнуться</Button>
                        }
                    </div>
                </div>




                <div className="v-d-desc-t"> Описание:
                </div>
                <div className="v-d-desc">
                    {v1.full_description}
                </div>
                <div className="v-d-desc-t"> Обязанности:
                </div>
                <div className='v-d-desc'>
                    {v1.duties}
                </div>
                <div className="v-d-desc-t"> Требования:
                </div>
                <div className="v-d-desc">
                    {v1.requirements}
                </div>
                <div className="v-d-desc">
                    {v1.idea}
                </div>

                {path.startsWith('/employer') ? '' :
                <div className="v-d-button">
                    <button className="v-d-b red-button_"
                        // onClick={() => respond(vacancy.id)}
                    > Откликнуться</button>
                </div>  }

            </Container>

        </div>
    )

}