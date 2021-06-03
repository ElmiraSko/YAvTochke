import React from 'react';
import {Container} from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SimpleButton from "../buttons/SimpleButton";
import ProgressBar from "../progressBar/ProgressBar";
import EmployeesItem from "./EmployeesItem";
import Photo1 from '../../img/worker1.jpg'
import WelcomeComponent from "./WelcomeComponent";

export default function WelcomeEmployer() {

    const workerInf = {
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

    const pageFor = <EmployeesItem emplInf={workerInf} photo={Photo1} contacts={workerContacts[0]} />
    const buttonHref = "/employer/personal-account"
    const text2 = 'Заполните профиль для больших возможностей по подбору персонала'
    const progressValue = '30'

    return(
        <div>
            <Container  maxWidth="lg" >
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