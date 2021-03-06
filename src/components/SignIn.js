import React from 'react';
import Button from "@material-ui/core/Button";
import '../components/styles/SignIn.css'

export default function SignIn(props) {
// общий простой компонет для авторизации
    const submitH = props.submitHandler

    return(
            <div className="main-div">
                    <div style={{marginBottom: "15px"}} >
                        <div>
                            <label >Логин/email/телефон*</label>
                        </div>
                        <div>
                            <input type="text"  style={{width: "100%",}}
                                   value={props.login}
                                   onChange={props.loginHandler}
                                   onClick={props.cleanLogin} />
                        </div>
                    </div>

                    <div style={{marginBottom: "15px"}}>
                        <div>
                            <label >Пароль*</label>
                        </div>
                        <div>
                            <input type="text" style={{width: "100%",}}
                                   value={props.password}
                                   onChange={props.passwordHandler}
                                   onClick={props.cleanPassword} />
                        </div>
                    </div>

                    <div style={{marginBottom: "30px"}} >
                        <Button style={{backgroundColor: "#278c21", }}
                                onClick={submitH}
                        >Войти</Button>
                    </div>
            </div>
    )
}