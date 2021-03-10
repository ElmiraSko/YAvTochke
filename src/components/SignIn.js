import React, {useEffect} from 'react';
import Button from "@material-ui/core/Button";
import '../components/styles/SignIn.css'

export default function SignIn(props) {
// общий простой компонет для авторизации
    const submitH = props.submitHandler

    function loginError(log) {
        return (log ? " ": 'input-field-error');
    }
    // useEffect(() => {
    //     if (props.password.length>0 && props.passwordValid && props.login.length>0 && props.loginValid) {
    //         setFormValid(true)
    //     } else setFormValid(false)
    // }, [props.loginValid, props.passwordValid ])

    return(
            <div className="main-div">
                    <div style={{marginBottom: "15px"}} >
                        <div>
                            <label >Логин/email/телефон*</label>
                        </div>
                        <div>
                            <input type="text"
                                   name="login"
                                   className={`input-field ${loginError(props.loginValid)}`}
                                   value={props.login}
                                   onChange={props.loginHandler}
                                   onClick={props.cleanLogin}
                                   onBlur={props.blurHandler}
                            />
                        </div>
                    </div>

                    <div style={{marginBottom: "15px"}}>
                        <div>
                            <label >Пароль*</label>
                        </div>
                        <div>
                            <input type="text"
                                   name="password"
                                   className={`input-field ${loginError(props.passwordValid)}`}
                                   value={props.password}
                                   onChange={props.passwordHandler}
                                   onClick={props.cleanPassword}
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