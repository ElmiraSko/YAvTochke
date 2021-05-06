import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import './styles2/VacanciesOfTheCompany.css';
import Ad from './VacanciesText'
import AdItemForCompany from "../AdItemForCompany";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArchiveIcon from '@material-ui/icons/Archive';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {

    },
}));


export default function VacanciesOfTheCompany() {
    const classes = useStyles();

    //флаг - показывать псевдо элемент у блока вакансии(true) или нет(false)
    const showPsevdo = true

    return(
        <div>
            <Container maxWidth="lg">
                <div className="company-page-title">
                    Ваши объявления
                </div>

                <div  className="add_and_archive">
                    <NavLink to={"/new-vacancy"} style={{textDecoration: 'none', color: 'inherit'}}>
                        <div className="add_flex">
                            <AddCircleOutlineIcon style={{color: '#f04d2d'}} />
                            <span className="add_span">
                            Добавить объявление </span>
                        </div>
                    </NavLink>
                        <NavLink to={"/employer/archive-c"} style={{textDecoration: 'none', color: 'inherit'}}>
                            <div className="add_flex">
                                <ArchiveIcon />
                                <span className="add_span">
                            Архив объявлений </span>
                            </div>
                        </NavLink>
                </div>

                <div style={{ marginBottom: "50px"}}>
                        <AdItemForCompany vacancy = {Ad[0]} show={showPsevdo}/>
                        <AdItemForCompany vacancy = {Ad[1]} show={showPsevdo}/>
                </div>
            </Container>


        </div>
    )
}