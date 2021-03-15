import React from 'react';
import Button from "@material-ui/core/Button";
import '../components/styles/SignIn.css'
import telegram2 from "../img/telegram-grey.png";
import vk2 from "../img/vk-grey.png";
import facebook2 from "../img/facebook-3-2.png";

export default function SignIn(props) {
// общий простой компонет для авторизации
    const submitH = props.submitHandler

    function loginError(log) {
        return (log ? " ": 'input-field-error');
    }

    return(
            <div className="main-div">
                    <div style={{marginBottom: "15px"}} >
                        <div style={{marginBottom: "7px"}}>
                            <label>E-mail или мобильный телефон
                                <span style={{color: '#f04d2d'}}>*</span>
                            </label>
                        </div>
                        <div>
                            <input type="text"
                                   name="login"
                                   placeholder="+70000000000 или user@mail.ru"
                                   className={`input-field ${loginError(props.loginValid)}`}
                                   value={props.login}
                                   onChange={props.loginHandler}
                                   onDoubleClick={props.cleanLogin}
                                   onBlur={props.blurHandler}
                            />
                            {props.loginValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                        </div>
                    </div>

                    <div style={{marginBottom: "15px"}}>
                        <div style={{marginBottom: "7px"}}>
                            <label >Пароль
                                <span style={{color: '#f04d2d'}}>*</span>
                            </label>
                        </div>
                        <div>
                            <input type="password"
                                   name="password"
                                   placeholder="A-Z,a-z,0-9,_"
                                   className={`input-field ${loginError(props.passwordValid)}`}
                                   value={props.password}
                                   onChange={props.passwordHandler}
                                   onDoubleClick={props.cleanPassword}
                                   onBlur={props.blurHandler}
                            />
                            {props.passwordValid ? '' : <span style={{color: 'red'}}> 8-16 символов. Вводим с буквы</span>}
                        </div>
                    </div>

                    <div style={{marginBottom: "30px", display: 'flex', justifyContent: 'space-between'}} >
                        <Button style={{backgroundColor: "#f04d2d", width: "110px",
                            color: "#faf5f5", margin: "15px 0px 15px 0px", }}
                                disabled={!props.formValid}
                                onClick={submitH}
                        >Войти</Button>

                        <button className="forgot-password-button">Забыли пароль?</button>
                    </div>
            </div>
    )
}