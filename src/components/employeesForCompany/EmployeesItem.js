import React, {useState} from "react";
import Logo from "../../img/Logo.png";
import {Button} from "@material-ui/core";
import PinDropRoundedIcon from '@material-ui/icons/PinDropRounded';
import './styles2/EmployeesItem.css'
import LocationOnIcon from "@material-ui/icons/LocationOn";


export default function EmployeesItem(props){
    const info = props.emplInf
    // надпись на кнопке, откликнулся соискатель или нет
    const [jobsButton, setJobsButton] = useState('Показать контакты')
    const [sent, setSent] = useState(false)

    // меняем стили
    function responseSent(sent) {
        return (sent ? 'sent-ok' : " ");
    }

    return(
        <div className="employeesItem-main"
             // id = {vacancy.id}
        >
            <div style={{display: "flex", justifyContent: "space-between", margin: "0px 20px"}} >

                <div
                    // onClick={() => showDetails(vacancy.id)}
                    className="description-area" >
                    <h3 className="vacancy-title">
                        {info.requiredPosition}
                    </h3>
                    <strong className="vacancy-price">
                        {/*Текущая должность: {info.currentPosition}*/}
                    </strong>
                    <p  className="desc">
                        Текущая должность: {info.currentPosition}
                    </p>
                    <div style={{display: "flex",}}>
                        <LocationOnIcon style={{width: '40px', height: '40px', color: '#f04d2d'}}/>
                        <div style={{ paddingTop: '10px'}}> {info.atPoint} </div>
                    </div>
                </div>

                <div style={{textAlign: 'center', }}>
                    {/*<div>*/}
                    {/*<Brightness1Icon style={{width: '70px', height: '70px', color: '#848c8e', }}/>*/}
                    <img src={Logo}
                         alt="logo" style={{width: '4.0rem',
                        padding: "10px 0 10px 0", }}/>
                    {/*</div>*/}
                    <h4 id="cn">
                        {info.firstName} {info.lastName}
                    </h4>
                    <button className={`show-cont-button ${responseSent(sent)} `}
                            // onClick={respond}
                    > {jobsButton}</button>
                </div>

            </div>
        </div>
    )
}