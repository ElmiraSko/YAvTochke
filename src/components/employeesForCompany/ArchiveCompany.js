import React from 'react';
import Container from "@material-ui/core/Container";
import './styles2/Emploees.css';
import Ad from './VacanciesText'
import AdItemForCompany from "../AdItemForCompany";
import {NavLink} from "react-router-dom";

export default function ArchiveCompany() {

    return(
            <Container maxWidth="lg">
                <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                    fontWeight: "600", }}> Архив объявлений
                </div>

                <div style={{ marginBottom: "50px"}}>
                    <AdItemForCompany vacancy = {Ad[2]}/>
                    <AdItemForCompany vacancy = {Ad[3]}/>
                </div>
                <div style={{textAlign: 'center', marginBottom: '50px' }}>
                    <NavLink to={"/employer/vacancies"} style={{textDecoration: 'none',
                        color: 'inherit', fontSize: '1.2rem', fontWeight: 'bold', }}
                    > Вернуться к списку активных объявлений</NavLink>
                </div>
            </Container>
    )
}