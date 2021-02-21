import React from "react";
import Logo from "../../img/Logo.png";
import {Button} from "@material-ui/core";
import PinDropRoundedIcon from '@material-ui/icons/PinDropRounded';


export default function EmployeesItem(props){
    const info = props.emplInf
    return(
        <div style={{backgroundColor: "#def2f3", color: "#110808", fontSize: "1.0rem",
            fontWeight: "400", width: "50rem", minHeight: '100px', marginBottom: "15px",
            borderRadius: "7px", border: "4px double black", padding: "5px 10px"  }}>
            <div style={{display: "flex", justifyContent: "space-between", margin: "0px 20px"}}>
                <div>
                        <span style={{color: "#138499", fontWeight: "700", fontSize: "1.6rem"}}>
                            {info.firstName} {info.lastName}
                        </span>
                </div>
                <div>
                        <span
                            style={{color: "#04d407",
                                fontWeight: "700",
                                fontSize: "1.6rem"}}>{info.requiredPosition}
                        </span>
                </div>
            </div>

            <div style={{display: "flex", justifyContent: "space-between", margin: "0px 20px"}}>
                <div style={{padding: "10px 10px 5px 10px"}}>
                    Текущая должность: {info.currentPosition}
                </div>
                <div style={{width: "14rem", textAlign: "center"}}>
                    <div>
                        <img src={Logo} alt="logo" style={{width: '3.0rem', padding: "10px 0 10px 0"}}/>
                    </div>
                    {/*<div>*/}
                    {/*    {info.lastName}*/}
                    {/*</div>*/}
                </div>
            </div>

            <div style={{display: "flex"}}>
                <PinDropRoundedIcon />
                <div>{info.atPoint}</div>

                <Button style={{backgroundColor: "#3fc62c", color: "#eee4e4", margin: "10px 10px 5px 45px", }}  >
                Показать контакты
            </Button>
            </div>
        </div>
    )
}