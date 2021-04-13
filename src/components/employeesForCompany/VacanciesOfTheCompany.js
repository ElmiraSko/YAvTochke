import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import './styles2/Emploees.css';
import Ad from './VacanciesText'
import AdItemForCompany from "../AdItemForCompany";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArchiveIcon from '@material-ui/icons/Archive';
import IconButton from "@material-ui/core/IconButton";
import {NavLink} from "react-router-dom";


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

                <div style={{display: "flex", justifyContent: "space-between",
                    margin: "20px auto", width: '800px', marginBottom: "50px"}}>
                    <NavLink to={"/new-vacancy"} style={{textDecoration: 'none', color: 'inherit'}}>
                        <div style={{display: "flex", cursor: 'pointer'}}>
                            <AddCircleOutlineIcon style={{color: '#f04d2d'}} />
                            <span style={{marginLeft: '10px',fontSize: "1.0rem", fontWeight: "600",}}>
                            Добавить объявление </span>
                        </div>
                    </NavLink>
                        <NavLink to={"/employer/archive-c"} style={{textDecoration: 'none', color: 'inherit'}}>
                            <div style={{display: "flex", cursor: 'pointer'}}>
                                <ArchiveIcon />
                                <span style={{marginLeft: '10px',fontSize: "1.0rem", fontWeight: "600",}}>
                            Архив объявлений </span>
                            </div>
                        </NavLink>



                </div>

                <div style={{ marginBottom: "50px"}}>
                        <AdItemForCompany vacancy = {Ad[0]}/>
                        <AdItemForCompany vacancy = {Ad[1]}/>
                </div>


            </Container>


        </div>
    )
}