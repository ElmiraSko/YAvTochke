import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import './styles2/Emploees.css';
import AdItem from "../AdItem";
import EmplInfo from './EmployeesInfo'
import EmployeesItem from "./EmployeesItem";

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));


export default function AllEmployeesPage() {
    const classes = useStyles();

    return(
        <div>
            <Container maxWidth="lg">
                <div style={{padding: "20px 0px 30px 0px", textAlign: "left", fontSize: "1.4rem",
                    fontWeight: "600", }}> Анкеты сотрудников
                </div>

                <div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>
                    <div>
                        <div>
                            <EmployeesItem emplInf = {EmplInfo[0]}  />
                        </div>
                        <div>
                            <EmployeesItem emplInf = {EmplInfo[1]}  />
                        </div>

                    </div>

                </div>
            </Container>

        </div>
    )
}