import React from 'react';
import Button from "@material-ui/core/Button";

export default function SignIn(props) {

    const submitH = props.submitHandler

    return(
            <div style={{width: "300px", margin: "auto", fontSize: "1.2rem", paddingTop: "15px", }}>
                    <div style={{marginBottom: "15px"}} >
                        <div>
                            <label >Логин/email/телефон*</label>
                        </div>
                        <div>
                            <input type="text"  style={{width: "100%",}}
                                   onChange={props.loginHandler} />
                        </div>
                    </div>

                    <div style={{marginBottom: "15px"}}>
                        <div>
                            <label >Пароль*</label>
                        </div>
                        <div>
                            <input type="text" style={{width: "100%",}}
                                   onChange={props.passwordHandler} />
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