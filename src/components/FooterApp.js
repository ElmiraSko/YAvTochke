import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import './styles/FooterApp.css'
import vk from "../img/vk-1.png";
import telegram from '../img/telegram-1.png'
import facebook from '../img/facebook-3.png'
import Logo from "../img/Logo-1.png";

const useStyles = makeStyles((theme) => ({

    right: {
        display: "flex",
        paddingRight: "30px",
        paddingTop: "30px"
    },

}));

function FooterApp() {
    const classes = useStyles();

    return (
        <div className="main">

            <div className="left">
                <div className="group">
                    <div style={{padding: "0px 20px"}}>
                        <div className="flex-start ">
                            <img src={Logo} alt="logo" style={{width: '1.6rem', padding: "10px 10px 0 0"}}/>
                            <span className="tit padd-t" >Я в точке</span>
                        </div>
                        <div className="font-10-b color-0C1618 padding_T">
                                {'Я в точке '}
                                {new Date().getFullYear()}
                                {'. Все права защищены'}
                        </div>
                    </div>
                    <div style={{padding: "20px 20px 0 0"}} className="footer-text">
                        <p style={{margin: "8px"}}>О компании</p>
                        <p style={{margin: "8px"}}>Новости</p>
                    </div>
                    <div style={{padding: "20px 20px 0 0"}} className="footer-text">
                        <p style={{margin: "8px"}}>Вакансии</p>
                        <p style={{margin: "8px"}}>Реклама у нас</p>
                    </div>

                    <div style={{padding: "20px 20px 0 0"}} className="footer-text">
                        <p style={{margin: "8px"}}>
                            Политика конфиденциальности
                        </p>
                    </div>
                </div>
            </div>

            <div className="right">
                <div  style={{paddingLeft: "30px"}}>
                    <img src={telegram} alt="Photo-1"
                         className="footer-icon"/>
                </div>
                <div style={{margin: "10px, 20px 0px 20px"}}>
                    <img src={vk} alt="Photo-1"
                         className="footer-icon" />
                </div>
                <div style={{margin: "10px, 20px 0px 20px"}}>
                    <img src={facebook} alt="Photo-1"
                         className="footer-icon" />
                </div>

            </div>

        </div>
    )
}

export default FooterApp