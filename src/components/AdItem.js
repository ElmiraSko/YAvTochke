import React, {useContext, useState} from 'react';
import creon from "../img/creon-logo-1.png";
import './styles/AdItem.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from "@material-ui/core/Button";
import Context from "./Context";
import {NavLink} from "react-router-dom";

export default function AdItem(props) {
    const {user} = useContext(Context)
    const [jobsButton, setJobsButton] = useState('Откликнуться')
    const [sent, setSent] = useState(false)
    // записали в переменную vacancy объект из props - vacancy - данные по вакансии из json
    const vacancy = props.vacancy

    // Контекст
    const { setSelectedVacancyId} = useContext(Context)

    // меняем стили
    function responseSent(sent) {
        return (sent ? 'sent-ok' : " ");
    }
    function respond() {
        console.log("Ehf")
        if (user===null) {
            window.location.href="/auth/employees"
        } else {
            setSent(true)
            setJobsButton("Отклик отправлен")
        }
    }
    function showDetails(item) {
        setSelectedVacancyId(item)
        window.location.href="/vacancy-details"
    }

    return(
            <div className="adItem-main">
                <div style={{display: "flex", justifyContent: "space-between", margin: "0px 20px"}}>
                    <div onClick={() => showDetails(vacancy.id)} className="description-area" >
                        <div style={{color: "#505350", fontWeight: "700", fontSize: "1.4rem"}}>
                            {vacancy.title}
                        </div>
                        <div className="vacancy-price">
                            {vacancy.price} {vacancy.unit_of_time}
                        </div>
                        <div  className="desc">
                            {vacancy.desc}
                        </div>
                        <div style={{display: "flex",}}>
                            <LocationOnIcon style={{width: '40px', height: '40px', color: '#f04d2d'}}/>
                            <div style={{ paddingTop: '10px'}}> {vacancy.point} </div>
                        </div>
                    </div>

                    <div style={{width: '7px', height: '10px'}}>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <div>
                           {/*<Brightness1Icon style={{width: '70px', height: '70px', color: '#848c8e', }}/>*/}
                            <img src={creon} alt="logo" style={{width: '4.0rem',
                                padding: "10px 0 10px 0", }}/>
                        </div>
                        <div>
                            {vacancy.companyName}
                        </div>
                        <button className={`sent-button ${responseSent(sent)} `}
                                onClick={respond}
                        > {jobsButton}</button>
                    </div>
                </div>
            </div>
    )
}