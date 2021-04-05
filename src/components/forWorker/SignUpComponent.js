import React from 'react';
import {Container} from "@material-ui/core";

export default function SignUpComponent(props) {

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
                    marginBottom: "30px", height: "180px", fontSize: "1.0rem", fontWeight: '600' }}>
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
                                       autoComplete="off"
                                       className={`input-field ${fieldError(props.firstNameValid)}`}
                                       value={props.firstName}
                                       onChange={firstNameHandler}
                                       onDoubleClick={props.cleanFirstName}
                                       onBlur={props.blurHandler}
                                />
                                {props.firstNameValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >Фамилия*</label>
                            </div>
                            <div>
                                <input type="text"
                                       name="lastName"
                                       autoComplete="off"
                                       className={`input-field ${fieldError(props.lastNameValid)}`}
                                       value={props.lastName}
                                       onChange={lastNameHandler}
                                       onDoubleClick={props.cleanLastName}
                                       onBlur={props.blurHandler}
                                />
                                {props.lastNameValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >Мобильный телефон*</label>
                            </div>
                            <div>
                                <input type="tel"
                                       name="phone"
                                       placeholder="+70000000000"
                                       autoComplete="off"
                                       className={`input-field ${fieldError(props.phoneValid)}`}
                                       value={props.phone}
                                       onChange={phoneHandler}
                                       onDoubleClick={props.cleanPhone}
                                       onBlur={props.blurHandler}
                                />
                                {props.phoneValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>

                    </div>
                    <div style={{
                        width: "30%", height: "auto",
                        borderRadius: '50%'}}>
                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label>E-mail*</label>
                            </div>
                            <div>
                                <input type="email"
                                       name="email"
                                       placeholder="user@mail.ru"
                                       autoComplete="off"
                                       className={`input-field ${fieldError(props.emailValid)}`}
                                       value={props.email}
                                       onChange={emailHandler}
                                       onDoubleClick={props.cleanEmail}
                                       onBlur={props.blurHandler}
                                />
                                {props.emailValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>

                        <div style={{marginBottom: "25px"}}>
                            <div>
                                <label >Пароль*</label>
                                {props.passwordValid ? '' : <span style={{color: 'red'}}> 8-16 символов. Вводим с буквы</span>}
                            </div>
                            <div>
                                <input type="password"
                                       name="password"
                                       placeholder="A-Z,a-z,0-9,_"
                                       autoComplete="off"
                                       className={`input-field ${fieldError(props.passwordValid)}`}
                                       value={props.password}
                                       onChange={passwordHandler}
                                       onInput={passwordHandler}
                                       onDoubleClick={props.cleanPassword}
                                       onBlur={props.blurHandler}
                                />
                                {props.passwordValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>
                        <div style={{marginBottom: "25px"}}>
                            <div>
                                <label >Подтвердить пароль*</label>
                            </div>
                            <div>
                                <input type="password"
                                       name="rpassword"
                                       placeholder="A-Z,a-z,0-9,_"
                                       className={`input-field ${fieldError(props.repeatPasswordValid)}`}
                                       value={props.repeatPassword}
                                       onChange={repeatPasswordHandler}
                                       onDoubleClick={props.cleanRepeatPassword}
                                       onBlur={props.blurHandler}
                                />
                                {props.repeatPasswordValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>

                    </div>
                </div>

                <div style={{textAlign: 'center', margin: 'auto', width: "40%", padding: '30px 0 0 0'}}>
                    <div style={{marginBottom: "30px", textAlign: 'center', fontSize: "1.0rem", }}>
                        <div style={{margin: "15px 0 15px 0", textTransform: 'uppercase',
                            color: '#f04d2d', fontWeight: 600}}>
                            <label  >
                                Найди работу в удобном месте
                            </label>
                        </div>
                        <div>
                            <input type="text"
                                   name="address"
                                   autoComplete="off"
                                   className={`input-field ${fieldError(props.addressValid)}`}
                                   value={props.address}
                                   placeholder="Город, улица, дом"
                                   onChange={addressHandler}
                                   onDoubleClick={props.cleanAddress}
                                   onBlur={props.blurHandler}
                            />
                            {props.addressValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}