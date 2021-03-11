import React from 'react';
import {Button, Container} from "@material-ui/core";
import Logo from "../img/Logo.png";
import './styles/AdItem.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Brightness1Icon from '@material-ui/icons/Brightness1';


export default function AdItem(props) {
    // записали в переменную vacancy объект из props - vacancy - данные по вакансии из json
    const vacancy = props.vacancy

    return(
            <div className="adItem-main">
                <div style={{display: "flex", justifyContent: "space-between", margin: "0px 20px"}}>
                    <div>
                        <div style={{color: "#f04d2d", fontWeight: "700", fontSize: "1.4rem"}}>
                            {vacancy.title}
                        </div>
                        <div
                            style={{color: "#505350",
                                fontWeight: "700",
                                fontSize: "1.4rem"}}>{vacancy.price} р/час
                        </div>
                        <div style={{padding: "10px 10px 5px 5px"}}>
                            {vacancy.desc}
                        </div>
                        <div style={{display: "flex",}}>
                            <LocationOnIcon style={{width: '40px', height: '40px', color: '#f04d2d'}}/>
                            <div style={{ paddingTop: '10px'}}> Точка рядом </div>
                        </div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <div>
                           <Brightness1Icon style={{width: '70px', height: '70px', color: '#848c8e', }}/>
                            {/*<img src={Logo} alt="logo" style={{width: '3.0rem', padding: "10px 0 10px 0"}}/>*/}
                        </div>
                        <div>
                            {vacancy.companyName}
                        </div>
                        <Button style={{backgroundColor: "#f04d2d", borderRadius: '10px',
                            color: "#fff", margin: "10px 10px 5px 5px", }}  > Откликнуться</Button>
                    </div>
                </div>
            </div>
    )
}