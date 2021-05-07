import React from 'react';
import {Container} from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SimpleButton from "../buttons/SimpleButton";
import ProgressBar from "../progressBar/ProgressBar";
import EmployeesItem from "./EmployeesItem";
import Photo1 from '../../img/worker1.jpg'

export default function WelcomeEmployer() {

    const worker = {
        firstName: "Степан",
        lastName: "Степанов",
        currentPosition: "Мерчендайзер",
        requiredPosition: "Мерчендайзер",
        address: "Новокосинская, д. 14а",
        atPoint: "В точке",
        work_type: "Подработка"
    }
    // Временное решение для отображения контактов, нужно подумать
    const workerContacts = [
        {
            showContact: false,
            phone: "8 (960) 415-12-12",
            email: 'Stepan@mail.ru',
            telegram: '@Stepan100500',
            vk: 'vk.com/Stepan',
        },
    ]

    const buttonText = "Дополнить"
    const buttonHref = "/employer/personal-account"
    const progressValue = '30'

    return(
        <div>
            <Container  maxWidth="lg" >
                <div style={{ fontSize: "1.2rem",
                    fontWeight: "600", textAlign: "center", margin: "20px 0px"}}>
                    <CheckCircleOutlineIcon style={{width: '36px', height: '36px', color: '#f04d2d' }}/>
                    <div style={{margin: '15px 0', textTransform: 'uppercase'}}>
                        Регистрация прошла успешно
                    </div>
                    <div style={{marginBottom: '40px', textTransform: 'uppercase', fontSize: "1.0rem",}} >
                        Рекомендуем
                    </div>

                    <div>
                        <EmployeesItem emplInf={worker} photo={Photo1} contacts={workerContacts[0]} />
                    </div>

                    <div style={{ margin: "40px 0px 0px 0px", }}>
                        <div style={{ fontSize: "1.0rem", width: '400px', marginBottom: '60px',
                            margin: "auto", textTransform: 'uppercase'}} >
                            Дополните свой профиль, чтобы находить
                            наиболее подходящие вакансии
                        </div>
                        <SimpleButton url={buttonHref} buttonText={buttonText}/>
                    </div>
                    <div style={{ textTransform: 'uppercase',
                        fontSize: "1.0rem", padding: '15px 0', }} >
                        Профиль
                        <ProgressBar value={progressValue}/>
                    </div>


                </div>

            </Container>

        </div>
    )
}