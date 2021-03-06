import React, {useContext, useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Context from "../Context";
import Loader from "../Loader";
import './styles2/signInCompany.css'
import SignIn from "../SignIn";
import telegram2 from "../../img/telegram-grey.png";
import vk2 from "../../img/vk-grey.png";
import facebook2 from "../../img/facebook-3-2.png";
import {NavLink} from "react-router-dom";

export default function SignInCompany() {
    // Контекст
    const {signInCompany, setSignInCompany, signUpCompany, setSignUpCompany,
        company, setCompany
    } = useContext(Context)

    // Состояние компонента
    const [login, setLogin] = useState('')
    const [password, setPassword] = React.useState('')
    const [loginValid, setLoginValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)

    const [formValid, setFormValid] = useState(false)
    const [loading, setLoading] = React.useState(false)
    const [formHidden, setFormHidden] = React.useState(false)

    let url = ''

    // проверяет, все ли поля валидны
    useEffect(() => {
        if (password.length>0 && passwordValid && login.length >0 && loginValid) {
            setFormValid(true)
        } else setFormValid(false)
    }, [loginValid, passwordValid, password, login])

    // обработчик формы, отправка запроса и получение ответа
    function submitHandler(event) {
        event.preventDefault()
        setFormHidden(true) // скрыли форму
        setLoading(true)    // начало загрузки

        // if (email.trim() && password.trim()){
        //     console.log(email)
        //     console.log(password)
        //
        //     // Simple POST request with a JSON body using fetch
        //     const requestOptions = {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ email: email, password: password})
        //     };
        //     fetch(url, requestOptions)
        //         .then(response => response.json())
        //         .then(function (data){
        //             console.log(data)
        //             setUser(data.userId)
        //             console.log(user + " == user")
        //             setSignIn(!signIn)
        //             setSignUp(!signUp)
        //             setLoading(false) // конец загрузки
        //
        //             let stateObj = { foo: "auth" }
        //             window.history.replaceState(stateObj, null, "/employer/personal-account")
        //             window.location.href='/employer/personal-account'
        //         });

        setCompany("Company")
        console.log(company)
        setSignInCompany(!signInCompany)
        setSignUpCompany(!signUpCompany)
        setLoading(false) // конец загрузки
        window.location.href='/employer/personal-account'
        }
    // }

    // сработывает при потере полем фокуса
    function blurHandler(event) {
        switch (event.target.name) {
            case 'login':
                if (login.length === 0) {
                    setLoginValid(true) // что бы граница поля не была красного цвета
                }
                break
            case 'password':
                if (password.length === 0) {
                    setPasswordValid(true) // что бы граница поля не была красного цвета
                }
                break
        }
    }

    //======= Валидация полей формы =======
    function validateLogin(login){
        const pattern = /^\+?([0-9]{11})\)?|(.*)@(.*)\.[a-z]{2,5}$/
        let phoneValid = pattern.test(String(login).toLowerCase());
        if (phoneValid) {
            setLoginValid(true)
        } else {
            setLoginValid(false)
        }
    }
    // === Валидация Password ===
    function validatePassword(password){
        const ph = /^[A-Za-z0-9]\w{7,15}$/;
        let passValid = ph.test(String(password).toLowerCase());
        if (passValid) {
            setPasswordValid(true)
        } else {
            setPasswordValid(false)
        }
    }

    // обработчик поля email/phone/login
    function loginHandler(event){
        let editLogin = event.target.value
        setLogin(editLogin)
        validateLogin(editLogin)
    }
    // обработчик поля password
    function passwordHandler(event){
        let editPassword = event.target.value
        setPassword(editPassword)
        validatePassword(editPassword)
    }

    // очистка поля email/phone/login
    function cleanLogin(){
        setLogin('')
        setLoginValid(false)
    }
    // очистка поля password
    function cleanPassword() {
        setPassword('')
        setPasswordValid(false)
    }

    console.log('Форма авторизации company')

    return (
        <Container component="main" maxWidth="md">
            <div className="div-louder">
                {loading && <Loader />}
            </div>
            <div className="wr">
                <form noValidate autoComplete="off" hidden={formHidden}
                      style={{width: '360px', margin: 'auto'}}>
                    {/*<Typography component="h1" variant="h5" align={"center"}>*/}
                    {/*    Вход в личный кабинет*/}
                    {/*</Typography>*/}
                    <div className="font-20-bold align-c marg-b-15 pad-t-b-30 color-0C1618 text-up">
                        Вход в личный кабинет
                    </div>

                    <SignIn loginHandler={loginHandler}
                            passwordHandler={passwordHandler}
                            submitHandler={submitHandler}
                            cleanLogin={cleanLogin}
                            cleanPassword={cleanPassword}
                            login={login}
                            loginValid={loginValid}
                            password={password}
                            passwordValid={passwordValid}
                            blurHandler={blurHandler}
                            formValid={formValid}
                    />
                </form>
            </div>

            <div hidden={formHidden} style={{fontSize: '1.0rem',
                paddingBottom: "40px", height: 'auto', width: '600px', margin: 'auto',}}>
                <div style={{textAlign: 'center'}}>
                    Войти через соцсеть
                </div>
                <div style={{margin: "10px 0 20px 0 ", display: 'flex', justifyContent: 'center'}} >
                    <div >
                        <img src={telegram2} alt="Иконка Telegram"
                             style={{width: '40px', height: '40px', padding: '15px'}} />
                    </div>
                    <div >
                        <img src={vk2} alt="Иконка VK"
                             style={{width: '40px', height: '40px', padding: '15px'}} />
                    </div>
                    <div >
                        <img src={facebook2} alt="Иконка FaceBook"
                             style={{width: '40px', height: '40px', padding: '15px'}} />
                    </div>
                </div>
                <div style={{margin: "10px 0 20px 0 ", display: 'flex', fontWeight: '700',
                    fontSize: '1.0rem',  justifyContent: 'space-around', }} >
                    <div >
                        Зарегистрироваться
                    </div>
                    <NavLink to={'/reg/employees'} style={{color: '#f04d2d', textDecoration: 'none'}}>
                        как соискатель
                    </NavLink>
                    <NavLink to={'/reg/company'} style={{color: '#f04d2d', textDecoration: 'none'}}>
                        как работодатель
                    </NavLink>
                </div>
            </div>


        </Container>
    );
}
