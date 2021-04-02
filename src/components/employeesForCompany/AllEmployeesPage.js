import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import './styles2/Emploees.css';
import EmplInfo from './EmployeesInfo'
import EmployeesItem from "./EmployeesItem";
import Photo1 from "../../img/worker1.jpg";
import Photo2 from "../../img/worker2.jpg";

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));


export default function AllEmployeesPage() {
    const classes = useStyles();

    return(
        <div>
            <Container maxWidth="lg">
                <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                    fontWeight: "600", }}> Анкеты сотрудников
                </div>

                <div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>
                    <div>
                        <div>
                            <EmployeesItem emplInf = {EmplInfo[0]} photo={Photo2} />
                        </div>
                        <div>
                            <EmployeesItem emplInf = {EmplInfo[1]} photo={Photo1} />
                        </div>

                    </div>

                </div>
            </Container>

        </div>
    )
}