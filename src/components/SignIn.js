import React, {useEffect} from 'react';
import Button from "@material-ui/core/Button";
import '../components/styles/SignIn.css'

export default function SignIn(props) {
// общий простой компонет для авторизации
    const submitH = props.submitHandler

    function loginError(log) {
        return (log ? " ": 'input-field-error');
    }

    return(
            <div className="main-div">
                    <div style={{marginBottom: "15px"}} >
                        <div>
                            <label >Логин/email/телефон*</label>
                        </div>
                        <div>
                            <input type="text"
                                   name="login"
                                   // autoComplete="off"
                                   placeholder="+70000000000 или user@mail.ru"
                                   className={`input-field ${loginError(props.loginValid)}`}
                                   value={props.login}
                                   onChange={props.loginHandler}
                                   onDoubleClick={props.cleanLogin}
                                   onBlur={props.blurHandler}
                            />
                        </div>
                    </div>

                    <div style={{marginBottom: "15px"}}>
                        <div>
                            <label >Пароль*</label>
                        </div>
                        <div>
                            <input type="password"
                                   name="password"
                                   placeholder="A-Z,a-z,0-9,_"
                                   // autoComplete="off"
                                   className={`input-field ${loginError(props.passwordValid)}`}
                                   value={props.password}
                                   onChange={props.passwordHandler}
                                   onDoubleClick={props.cleanPassword}
                                   onBlur={props.blurHandler}
                            />
                        </div>
                    </div>

                    <div style={{marginBottom: "30px"}} >
                        <Button style={{backgroundColor: "#f04d2d", width: "310px",
                            color: "#faf5f5", margin: "15px 0px 15px 0px", }}
                                disabled={!props.formValid}
                                onClick={submitH}
                        >Войти</Button>
                    </div>
            </div>
    )
}