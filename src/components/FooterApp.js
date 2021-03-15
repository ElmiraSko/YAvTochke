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
                        <img src={Logo} alt="logo" style={{width: '1.8rem', padding: "10px 10px 0 0"}}/>
                        <span className="tit" >Я в точке</span>
                        <div>
                                {'Я в точке '}
                                {new Date().getFullYear()}
                                {'. Все права защищены'}
                        </div>
                    </div>
                    <div style={{padding: "20px 20px 0 0"}}>
                        <p style={{margin: "7px"}}>О компании</p>
                        <p style={{margin: "7px"}}>Новости</p>
                    </div>
                    <div style={{padding: "20px 20px 0 0"}}>
                        <p style={{margin: "7px"}}>Вакансии</p>
                        <p style={{margin: "7px"}}>Реклама у нас</p>
                    </div>

                    <div style={{padding: "20px 20px 0 0"}}>
                        <p style={{margin: "7px"}}>
                            Политика конфиденциальности
                        </p>
                    </div>
                </div>
            </div>

            <div className="right">
                <div  style={{paddingLeft: "30px"}}>
                    <img src={telegram} alt="Photo-1"
                         style={{width: '30px', height: '30px', padding: '10px'}} />
                </div>
                <div style={{margin: "10px, 20px 0px 20px"}}>
                    <img src={vk} alt="Photo-1"
                         style={{width: '30px', height: '30px', padding: '10px'}} />
                </div>
                <div style={{margin: "10px, 20px 0px 20px"}}>
                    <img src={facebook} alt="Photo-1"
                         style={{width: '30px', height: '30px', padding: '10px'}} />
                </div>

            </div>

        </div>
    )
}

export default FooterApp