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
            <div>
                <div className="font-20-bold align-c marg-b-15 pad-t-b-30 color-0C1618 text-up">
                    Регистрация соискателя
                </div>

                <div style={{marginBottom: "30px", height: "180px",  }} className="color-0C1618 flex-space-around">
                    <div style={{ width: "30%", height: "auto", borderRadius: '50%'}}>
                        <div className="marg-b-15">
                            <div className="marg-b-9">
                                <label className="font-14-500">Фамилия
                                    <span className="c_red">{' '}*</span>
                                </label>
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
                                {props.lastNameValid ? '' : <span className="font-12-500 c_red"> Обязательное поле</span>}
                            </div>
                        </div>

                        <div className="marg-b-15">
                            <div className="marg-b-9">
                                <label className="font-14-500">Имя
                                    <span className="c_red">{' '}*</span>
                                </label>
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
                                {props.firstNameValid ? '' : <span className="font-12-500 c_red"> Обязательное поле</span>}
                            </div>
                        </div>

                        <div className="marg-b-15">
                            <div className="marg-b-9">
                                <label className="font-14-500">Мобильный телефон
                                    <span className="c_red">{' '}*</span>
                                </label>
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
                                {props.phoneValid ? '' : <span className="font-12-500 c_red"> Обязательное поле</span>}
                            </div>
                        </div>

                    </div>
                    <div style={{ width: "30%", height: "auto", borderRadius: '50%'}}>
                        <div className="marg-b-15">
                            <div className="marg-b-9">
                                <label className="font-14-500">E-mail
                                    <span className="c_red">{' '}*</span>
                                </label>
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
                                {props.emailValid ? '' : <span className="font-12-500 c_red"> Обязательное поле</span>}
                            </div>
                        </div>

                        <div className="marg-b-15">
                            <div className="marg-b-9">
                                <label className="font-14-500">Пароль
                                    <span className="c_red">{' '}*</span>
                                </label>
                                {props.passwordValid ? '' : <span style={{color: 'red'}}> 8-16 символов, латинские буквы и цифры</span>}
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
                                {props.passwordValid ? '' : <span className="font-12-500 c_red"> Обязательное поле</span>}
                            </div>
                        </div>
                        <div className="marg-b-15">
                            <div className="marg-b-9">
                                <label className="font-14-500">Подтвердить пароль
                                    <span className="c_red">{' '}*</span>
                                </label>
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
                                {props.repeatPasswordValid ? '' :
                                    <span className="font-12-500 c_red"> Обязательное поле</span>}
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
                            {props.addressValid ? '' : <span className="font-12-500 c_red"> Обязательное поле</span>}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}