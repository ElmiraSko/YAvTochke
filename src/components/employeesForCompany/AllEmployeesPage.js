import React from 'react';
import Container from "@material-ui/core/Container";
import './styles2/Emploees.css';
import EmplInfo from './EmployeesInfo'
import EmployeesItem from "./EmployeesItem";
import Photo1 from "../../img/worker1.jpg";
import Photo2 from "../../img/worker2.jpg";

export default function AllEmployeesPage() {

    // Временное решение для отображения контактов, нужно подумать
    const workerContacts = [
        {
            showContact: false,
            phone: "8 (960) 415-12-12",
            email: 'Stepan@mail.ru',
            telegram: '@Stepan100500',
            vk: 'vk.com/Stepan',
        },
        {
            showContact: false,
            phone: "8 (960) 415-12-12",
            email: 'Ivan@mail.ru',
            telegram: '@Ivan100500',
            vk: 'vk.com/ivanich',
        },
    ]
    return(
        <div>
            <Container maxWidth="lg">
                <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                    fontWeight: "600", }}> Анкеты сотрудников
                </div>

                <div style={{marginBottom: "50px"}}>
                        <div>
                            <EmployeesItem emplInf = {EmplInfo[0]} photo={Photo2} contacts={workerContacts[0]}/>
                        </div>
                        <div>
                            <EmployeesItem emplInf = {EmplInfo[1]} photo={Photo1} contacts={workerContacts[1]}/>
                        </div>
                </div>
            </Container>

        </div>
    )
}