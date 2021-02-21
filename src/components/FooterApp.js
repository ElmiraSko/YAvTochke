import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import './FooterApp.css'

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
{/* теги <p>  заменить на ссылки*/}
            <div className="left">
                <span className="tit">ЯвТочке</span>
                <div className="group">
                    <div style={{padding: "0px 20px"}}>
                        <p style={{margin: "7px"}}>О компании</p>
                        <p style={{margin: "7px"}}>Новости</p>
                    </div>
                    <div style={{padding: "0px 20px"}}>
                        <p style={{margin: "7px"}}>Вакансии</p>
                        <p style={{margin: "7px"}}>Реклама у нас</p>
                    </div>

                    <div style={{padding: "0px 20px"}}>
                        <p style={{margin: "7px"}}>
                            Политика <br/> конфиденциальности
                        </p>
                    </div>
                </div>
                <span>
                    <Typography variant="body2">
                        {'© '}
                        {new Date().getFullYear()}
                        {' YAvTochke.ru'}
                    </Typography>
                </span>

            </div>

            <div className="right">
                <div style={{margin: "10px, 20px 0px 20px"}}>
                    <FacebookIcon style={{ fontSize: 70 }} />
                </div>

                <div style={{paddingLeft: "30px"}}>
                    <TelegramIcon style={{ fontSize: 70,}} />
                </div>

            </div>

        </div>
    )
}

export default FooterApp