import React from 'react';
import Container from "@material-ui/core/Container";
import './styles2/Emploees.css';
import EmplInfo from './EmployeesInfo'
import EmployeesItem from "./EmployeesItem";
import Photo1 from "../../img/worker1.jpg";
import Photo2 from "../../img/worker2.jpg";

export default function AllEmployeesPage() {

    return(
        <div>
            <Container maxWidth="lg">
                <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                    fontWeight: "600", }}> Анкеты сотрудников
                </div>

                <div style={{marginBottom: "50px"}}>
                        <div>
                            <EmployeesItem emplInf = {EmplInfo[0]} photo={Photo2} />
                        </div>
                        <div>
                            <EmployeesItem emplInf = {EmplInfo[1]} photo={Photo1} />
                        </div>
                </div>
            </Container>

        </div>
    )
}