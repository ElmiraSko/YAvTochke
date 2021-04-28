import React from 'react';
import Container from "@material-ui/core/Container";
import './styles2/Emploees.css';
import Ad from './VacanciesText'
import AdItemForCompany from "../AdItemForCompany";
import {NavLink} from "react-router-dom";

export default function ArchiveCompany() {

    //флаг - показывать псевдо элемент вакансии(true) или нет(false)
    const showPsevdo = false

    return(
            <Container maxWidth="lg">
                <div className='company-page-title'> Архив объявлений
                </div>

                <div style={{ marginBottom: "50px"}}>
                    <AdItemForCompany vacancy = {Ad[2]} show={showPsevdo}/>
                    <AdItemForCompany vacancy = {Ad[3]} show={showPsevdo}/>
                </div>
                <div style={{textAlign: 'center', marginBottom: '50px' }}>
                    <NavLink to={"/employer/vacancies"} style={{textDecoration: 'none',
                        color: 'inherit', fontSize: '14px', fontWeight: 'bold', }}
                    > Вернуться к списку активных объявлений</NavLink>
                </div>
            </Container>
    )
}