import React from 'react';
import {Container} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";

export default function SignUpCompanyComponent(props) {
    const firstNameHandler = props.firstNH
    const lastNameHandler = props.lastNH
    const phoneHandler = props.phoneH
    const emailHandler = props.emailH
    const passwordHandler = props.passwordH
    const repeatPasswordHandler = props.repeatPassworH
    const innHandler = props.innH
    const cityHandler = props.cityH
    const companyNameHandler = props.companyNameH

    // === Добавляем стилевой класс - error
    function fieldError(fieldNameValid) {
        return (fieldNameValid ? " ": 'input-field-error');
    }
    // Радиобатн
    const RedRadio = withStyles({
        root: {
            color: '#848C8E',
            '&$checked': {
                color: '#f04d2d',
            },
        },
        checked: {},
    })((props) =>
        <Radio color="default" {...props} />);

    return(
        <Container maxWidth="lg">
            <div style={{ paddingBottom: "45px",}}>

                <div className="font-20-bold align-c marg-b-15 pad-t-b-30 color-0C1618 text-up">
                    регистрация работодателя
                </div>

                <div style={{marginBottom: "30px", height: "180px",}} className="color-0C1618 flex-space-around">

                    <div style={{width: "30%", height: "auto", borderRadius: '50%'}}>
                        <div className="marg-b-9 c_848C8E font-bold">
                            Данные контактного лица
                        </div>
                        <div className="marg-b-15">
                            <div className="marg-b-9">
                                <label className="font-14-500 color-0C1618">Фамилия
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
                                {props.lastNameValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>
                        <div className="marg-b-15" >
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
                                {props.firstNameValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
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
                                {props.phoneValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>

                    </div>

                    <div style={{width: "30%", height: "auto", borderRadius: '50%'}}>
                        <div className="marg-b-9 c_848C8E font-bold">Информация о компании</div>
                        <div className="marg-b-15" >
                            <div className="marg-b-9">
                                <label className="font-14-500">ИНН компании
                                    <span className="c_red">{' '}*</span>
                                </label>
                            </div>
                            <div>
                                <input type="text"
                                       name="inn"
                                       autoComplete="off"
                                       className={`input-field ${fieldError(props.firstNameValid)}`}
                                    value={props.inn}
                                    onChange={innHandler}
                                    onDoubleClick={props.cleanInn}
                                    onBlur={props.blurHandler}
                                />
                                {props.innValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>

                        <div className="marg-b-15">
                            <div className="marg-b-9">
                                <label className="font-14-500">Тип компании
                                    <span className="c_red">{' '}*</span>
                                </label>
                            </div>
                            <div>
                                <RedRadio style={{padding: '5px 0', backgroundColor: 'transparent'}}
                                          checked={props.companyType === 'Прямой работодатель'}
                                          onChange={props.setPreferredDirectEmployer}
                                          // value={props.companyType} // ?
                                          disableRipple={true}
                                    // name="radio-button-demo"
                                    // inputProps={{ 'aria-label': 'C' }}
                                />
                                <span className="font-bold"
                                    style={{color: `${props.companyType==='Прямой работодатель' ? '#f04d2d' : '#848C8E'}` , marginLeft: '10px'}}>
                                    Прямой работодатель
                                </span>
                            </div>
                            <div>
                                <RedRadio style={{padding: '5px 0', backgroundColor: 'transparent'}}
                                          checked={props.companyType === 'Кадровое агенство'}
                                          onChange={props.setPreferredAgency}
                                          // value={preferredCommunication}
                                          disableRipple={true}
                                    // name="radio-button-demo"
                                    // inputProps={{ 'aria-label': 'C' }}
                                />
                                <span className="font-bold"
                                    style={{color: `${props.companyType==='Кадровое агенство' ? '#f04d2d' : '#848C8E'}` , marginLeft: '10px'}}>
                                    Кадровое агенство
                                </span>
                            </div>
                            <div>
                                <RedRadio style={{padding: '5px 0', backgroundColor: 'transparent'}}
                                          checked={props.companyType === 'Рекрутер'}
                                          onChange={props.setPreferredRecruiter}
                                          // value={preferredCommunication}
                                          disableRipple={true}
                                    // name="radio-button-demo"
                                    // inputProps={{ 'aria-label': 'C' }}
                                />
                                <span className="font-bold"
                                    style={{color: `${props.companyType==='Рекрутер' ? '#f04d2d' : '#848C8E'}` , marginLeft: '10px'}}>
                                    Рекрутер
                                </span>
                            </div>
                        </div>

                        <div className="marg-b-15">
                            <div className="marg-b-9">
                                <label className="font-14-500">Название компании
                                    <span className="c_red">{' '}*</span>
                                </label>
                            </div>
                            <div>
                                <input type="text"
                                       name="companyName"
                                       autoComplete="off"
                                       className={`input-field ${fieldError(props.lastNameValid)}`}
                                    value={props.companyName}
                                    onChange={companyNameHandler}
                                    onDoubleClick={props.cleanCompanyName}
                                    onBlur={props.blurHandler}
                                />
                                {props.companyValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>

                        <div className="marg-b-15">
                            <div className="marg-b-9">
                                <label className="font-14-500">Город
                                    <span className="c_red">{' '}*</span>
                                </label>
                            </div>
                            <div>
                                <input type="text"
                                       name="city"
                                       placeholder=""
                                       autoComplete="off"
                                       className={`input-field ${fieldError(props.phoneValid)}`}
                                    value={props.city}
                                    onChange={cityHandler}
                                    onDoubleClick={props.cleanCity}
                                    onBlur={props.blurHandler}
                                />
                                {props.cityValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>

                        <div style={{margin: "30px auto", width: '100%',  textAlign: 'center'}} >
                            <button className="reg-button"
                                    onClick={props.submitHandler}
                                    disabled={!props.formValid}
                            >Зарегистрироваться</button>
                        </div>
                    </div>

                    <div style={{ width: "30%", height: "auto", borderRadius: '50%'}}>
                        <div className="marg-b-9 c_848C8E font-bold">Данные для регистрации</div>
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
                                {props.emailValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>

                        <div className="marg-b-15">
                            <div className="marg-b-9">
                                <label className="font-14-500">Пароль
                                    <span className="c_red">{' '}*</span>
                                </label>
                                {props.passwordValid ? '' : <span style={{color: 'red'}}>8-16 символов, латинские буквы и цифры</span>}
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
                                {props.repeatPasswordValid ? '' : <span style={{color: 'red'}}> Обязательное поле</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>


    )
}