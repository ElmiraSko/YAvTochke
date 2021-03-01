import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Context from "../Context";
import Loader from "../Loader";
import './styles1/signInWorker.css'
import SignIn from "../SignIn";

export default function SignInWorker() {
    // Контекст
    const {user, setUser, signIn, setSignIn, signUp, setSignUp} = useContext(Context)

    // Состояние компонента
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [formHidden, setFormHidden] = React.useState(false)

    let url = 'https://cookstarter-restaurant-service.herokuapp.com/restaurant/get/'

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

        setUser("User")
        console.log(user)
        setSignIn(!signIn)
        setSignUp(!signUp)
        // setLoading(false) // конец загрузки
        window.location.href='/personal-account/employees'
    }
    // }

    // обработчик поля email
    function loginHandler(event){
        setEmail(event.target.value)
        console.log(email)
    }
    // обработчик поля password
    function passwordHandler(event){
        setPassword(event.target.value)
    }
    console.log('Форма авторизации user')

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
                            submitHandler={submitHandler} />
                </form>
            </div>
        </Container>
    );
}
