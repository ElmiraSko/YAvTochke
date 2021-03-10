import React from 'react';
import {Container} from "@material-ui/core";
import './styles1/signUpComponent.css'

export default function (props) {

    const firstNameHandler = props.firstNH
    const lastNameHandler = props.lastNH
    const phoneHandler = props.phoneH
    const emailHandler = props.emailH
    const addressHandler = props.addressH
    const passwordHandler = props.passwordH
    const repeatPasswordHandler = props.repeatPassworH

    // === Добавляем стилевой класс - error

    function fieldError(fieldNameValid) {
        return (fieldNameValid ? " ": 'input-field-error');
    }

    return(
        <Container maxWidth="lg">
            <div style={{ fontSize: "1.2rem", }}>

                <div style={{padding: "30px 0px 30px 0px", marginBottom: "15px",
                    fontSize: "1.6rem",  fontWeight: "700", textAlign: 'center'}}>
                    РЕГИСТРАЦИЯ СОИСКАТЕЛЯ
                </div>

                <div style={{display: "flex", justifyContent: "space-around",
                    marginBottom: "30px", height: "180px", fontSize: "1.0rem", }}>
                    <div style={{
                        width: "30%", height: "auto",
                        borderRadius: '50%'}}>
                        <div style={{marginBottom: "15px"}} >
                            <div>
                                <label >Имя*</label>
                            </div>
                            <div>
                                <input type="text"
                                       name="firstName"
                                       className={`input-field ${fieldError(props.firstNameValid)}`}
                                       value={props.firstName}
                                       onChange={firstNameHandler}
                                       onClick={props.cleanFirstName}
                                       onBlur={props.blurHandler}
                                />
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >Фамилия*</label>
                            </div>
                            <div>
                                <input type="text"
                                       name="lastName"
                                       className={`input-field ${fieldError(props.lastNameValid)}`}
                                       value={props.lastName}
                                       onChange={lastNameHandler}
                                       onClick={props.cleanLastName}
                                       onBlur={props.blurHandler}
                                />
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >Мобильный телефон*</label>
                            </div>
                            <div>
                                <input type="text"
                                       name="phone"
                                       placeholder="+70000000000"
                                       className={`input-field ${fieldError(props.phoneValid)}`}
                                       value={props.phone}
                                       onChange={phoneHandler}
                                       onClick={props.cleanPhone}
                                       onBlur={props.blurHandler}
                                />
                            </div>
                        </div>

                    </div>
                    <div style={{
                        width: "30%", height: "auto",
                        borderRadius: '50%'}}>
                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >E-mail*</label>
                            </div>
                            <div>
                                <input type="email"
                                       name="email"
                                       className={`input-field ${fieldError(props.emailValid)}`}
                                       value={props.email}
                                       onChange={emailHandler}
                                       onClick={props.cleanEmail}
                                       onBlur={props.blurHandler}
                                />
                            </div>
                        </div>

                        <div style={{marginBottom: "25px"}}>
                            <div>
                                <label >Пароль*</label>
                            </div>
                            <div>
                                <input type="password"
                                       name="password"
                                       className={`input-field ${fieldError(props.passwordValid)}`}
                                       value={props.password}
                                       onChange={passwordHandler}
                                       onClick={props.cleanPassword}
                                       onBlur={props.blurHandler}
                                />
                            </div>
                        </div>
                        <div style={{marginBottom: "25px"}}>
                            <div>
                                <label >Подтвердить пароль*</label>
                            </div>
                            <div>
                                <input type="password" className={`input-field ${fieldError(props.repeatPasswordValid)}`}
                                       value={props.repeatPassword}
                                       onChange={repeatPasswordHandler}
                                       onClick={props.cleanRepeatPassword}
                                       onBlur={props.blurHandler}
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div style={{textAlign: 'center', margin: 'auto', width: "40%"}}>
                    <div style={{marginBottom: "30px", textAlign: 'left', fontSize: "1.0rem", }}>
                        <div>
                            <label>Адрес поиска работы*</label>
                        </div>
                        <div>
                            <input type="text"
                                   name="address"
                                   className={`input-field ${fieldError(props.addressValid)}`}
                                   value={props.address}
                                   // placeholder="Адрес где хотите работать"
                                   onChange={addressHandler}
                                   onClick={props.cleanAddress}
                                   onBlur={props.blurHandler}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </Container>


    )
}