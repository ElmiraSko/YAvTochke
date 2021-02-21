import React from 'react';
import {Button, Container} from "@material-ui/core";
import Logo from "../img/Logo.png";


export default function AdItem(props) {
    // записали в переменную vacancy объект из props - vacancy
    const vacancy = props.vacancy

    return(

            <div style={{backgroundColor: "#def2f3", color: "#110808", fontSize: "1.0rem",
                fontWeight: "400", width: "50rem", minHeight: '180px', marginBottom: "15px",
                borderRadius: "7px", border: "4px double black", padding: "5px 10px"  }}>
                <div style={{display: "flex", justifyContent: "space-between", margin: "0px 20px"}}>
                    <div>
                        <span style={{color: "#138499", fontWeight: "700", fontSize: "1.6rem"}}>
                            {vacancy.title}
                        </span>
                    </div>
                    <div>
                        <span
                            style={{color: "#04d407",
                                fontWeight: "700",
                                fontSize: "1.6rem"}}>{vacancy.price} руб/час
                        </span>
                    </div>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", margin: "0px 20px"}}>
                    <div style={{padding: "10px 10px 5px 10px"}}>
                        {vacancy.desc}
                    </div>
                    <div style={{width: "14rem", textAlign: "center"}}>
                        <div>
                            <img src={Logo} alt="logo" style={{width: '3.0rem', padding: "10px 0 10px 0"}}/>
                        </div>
                        <div>
                            {vacancy.companyName}
                        </div>
                    </div>
                </div>

                <div>
                    Адрес: {vacancy.address}
                </div>

                <div >
                    <Button style={{backgroundColor: "#3fc62c",
                        color: "#eee4e4", margin: "10px 10px 5px 5px", }}  > Изменить</Button>
                    <Button  style={{backgroundColor: "#f5253e",
                        color: "#faf5f5", margin: "10px 10px 5px 5px", }}  > В архив</Button>
                </div>




            </div>




    )
}