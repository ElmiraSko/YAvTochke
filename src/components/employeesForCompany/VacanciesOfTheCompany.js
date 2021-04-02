import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import './styles2/Emploees.css';
import AdItem from "../AdItem";
import Ad from './VacanciesText'

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));


export default function VacanciesOfTheCompany() {
    const classes = useStyles();

    return(
        <div>
            <Container maxWidth="lg">
                <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                    fontWeight: "600", }}> Ваши объявления
                </div>

                <div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>
                    <div>
                        <div>
                            <AdItem vacancy = {Ad[1]}/>
                        </div>
                        <div>
                            <AdItem vacancy = {Ad[2]}/>
                        </div>

                    </div>
                </div>


            </Container>


        </div>
    )
}