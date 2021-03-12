import React, {useContext, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Context from "../Context";
import Loader from "../Loader";
import './styles2/signInCompany.css'
import SignIn from "../SignIn";

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
        //             window.history.replaceState(stateObj, null, "/user")
        //             window.location.href='/user'
        //         });

        setCompany("Company")
        console.log(company)
        setSignInCompany(!signInCompany)
        setSignUpCompany(!signUpCompany)
        setLoading(false) // конец загрузки
        window.location.href='/personal-account/company'
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

    console.log('Форма авторизации company')

    return (
        <Container component="main" maxWidth="xs">
            {loading && <Loader />}
            <div className="wr">
                <form noValidate autoComplete="off" hidden={formHidden} >
                    <Typography component="h1" variant="h5" align={"center"}>
                        Вход в личный кабинет
                    </Typography>

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
        </Container>
    );
}
