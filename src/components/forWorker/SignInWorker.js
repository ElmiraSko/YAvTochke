import React, {useContext, useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Context from "../Context";
import Loader from "../Loader";
import './styles1/signInWorker.css'
import SignIn from "../SignIn";


export default function SignInWorker() {
    // Контекст
    const {user, setUser, signIn, setSignIn, signUp, setSignUp} = useContext(Context)

    // Состояние компонента
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginValid, setLoginValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)

    const [formValid, setFormValid] = useState(false)
    const [loading, setLoading] = React.useState(false)
    const [formHidden, setFormHidden] = React.useState(false)

    let url = 'https://cookstarter-restaurant-service.herokuapp.com/restaurant/get/'

    useEffect(() => {
        if (password.length>0 && passwordValid && login.length>0 && loginValid) {
            setFormValid(true)
        } else setFormValid(false)
    }, [loginValid, passwordValid ])

    // обработчик формы, отправка запроса и получение ответа
    function submitHandler(event) {

        event.preventDefault()
        setFormHidden(true) // скрыли форму
        // setLoading(true)    // начало загрузки

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
        //     fetch('https://yoshpa-registration-login.herokuapp.com/auth', requestOptions)
        //         .then(response => response.json())
        //         .then(function (data){
        //             console.log(data)
        //             localStorage.setItem('Authorization', 'Bearer ' + data.token);
        //             setUser(data.userId)
        //             console.log(user + " == user")
        //             setSignIn(!signIn)
        //             setSignUp(!signUp)
        //             setLoading(false) // конец загрузки
        //
        //             let stateObj = { foo: "auth" }
        //             window.history.replaceState(stateObj, null, "/user")
        //             window.location.href='/user'
        //         });

        setUser(56)
        console.log(user)
        setSignIn(!signIn)
        setSignUp(!signUp)
        // setLoading(false) // конец загрузки
        window.location.href='/personal-account/employees'
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
        if (login.length>5) {
            setLoginValid(true)
        } else {
            setLoginValid(false)
        }
    }
    // === Валидация Password ===
    function validatePassword(password){
        const ph = /^[A-Za-z]\w{7,15}$/;
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
    console.log('Форма авторизации user' )

    return (
        <Container component="main" maxWidth="xs">
            {loading && <Loader />}
            <div className="wr">
                <form noValidate autoComplete="off" hidden={formHidden} >
                    <Typography component="h1" variant="h5" align={"center"}>
                        Вход в профиль
                    </Typography>
                    <SignIn loginHandler={loginHandler}
                            passwordHandler={passwordHandler}
                            cleanLogin={cleanLogin}
                            cleanPassword={cleanPassword}
                            login={login}
                            loginValid={loginValid}
                            password={password}
                            passwordValid={passwordValid}
                            submitHandler={submitHandler}
                            blurHandler={blurHandler}
                            formValid={formValid}
                    />
                </form>
            </div>
        </Container>
    );
}
