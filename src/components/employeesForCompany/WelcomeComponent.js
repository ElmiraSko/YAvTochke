import React from 'react';
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import SimpleButton from "../buttons/SimpleButton";
import ProgressBar from "../progressBar/ProgressBar";

export default function WelcomeComponent(props) {
    const buttonText = "Дополнить"

    return(
        <div style={{textAlign: "center", margin: "46px 0px 156px 0px", fontWeight: "bold",}}>
            <CheckCircleOutlineIcon style={{width: '60px', height: '60px', color: '#f04d2d' }}/>
            <div style={{margin: '10px 0 34px 0', fontSize: "20px",
                textTransform: 'uppercase', color: '#0C1618' }}>
                Регистрация прошла успешно
            </div>
            <div style={{marginBottom: '40px', letterSpacing: '0.8px',
                textTransform: 'uppercase', fontSize: "16px", }} >
                Рекомендуем
            </div>
            <div>
                {props.pageFor}
            </div>

            <div style={{ margin: "90px 0px 15px 0px", }}>
                <div style={{ fontSize: "1.0rem", width: '400px',
                    margin: '0px auto 28px auto', color: '#848C8E',
                     textTransform: 'uppercase', lineHeight: '19px'}} >
                    {props.text2}
                </div>
                <SimpleButton url={props.buttonHref} buttonText={buttonText}/>
            </div>
            <div style={{ textTransform: 'uppercase',
                fontSize: "1.0rem", padding: '15px 0',letterSpacing: '0.8px', }} >
                Профиль
                <ProgressBar value={props.progressValue}/>
            </div>
        </div>
    )
}
