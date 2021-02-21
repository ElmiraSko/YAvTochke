import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import '../employeesForCompany/styles2/Emploees.css';
import AdItem from "../AdItem";
import Ad from '../employeesForCompany/VacanciesText'

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));


export default function VacanciesForMe() {
    const classes = useStyles();

    return(
        <div>
            <Container maxWidth="lg">
                <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                    fontWeight: "600", }}> Объявления
                </div>

                <div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>
                    <div>
                        <div>
                            <AdItem vacancy = {Ad[0]}/>
                        </div>
                        <div>
                            <AdItem vacancy = {Ad[1]}/>
                        </div>

                    </div>
                </div>


            </Container>


        </div>
    )
}