import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import Logo from '../img/Logo.png'
import './styles/HeaderApp.css'
import Container from "@material-ui/core/Container";
import Context from "./Context";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: '1rem',
        textDecoration: 'none',
        color: '#0c1618',
    },
}));


export default function HeaderApp2() {
    const classes = useStyles();

    const {user, setUser, signIn, setSignIn, signUp, setSignUp,
        searchWork, setSearchWork, signUpCompany, setSignUpCompany,
        signInCompany, setSignInCompany, company, setCompany
    } = useContext(Context)

    // получаем id компании из локального хранилища
    const idComp = JSON.parse(localStorage.getItem('company'))

    function logout() {
        setUser(null)
        localStorage.setItem("Authorization", '')
        setSignIn(!signIn)
        setSignUp(!signUp)
    }
    function companyLogout() {
        setCompany(null)
        localStorage.setItem("company", null)
        setSignInCompany(false)
        setSignUpCompany(false)
    }
    const handleHome = () => {
        window.location.href='/'
    }

    return (
        <div style={{backgroundColor: "#fff", boxShadow: '0 0 3px 2px rgba(132, 140, 142, 0.5)'}}>
            <Container maxWidth="lg">
                <header className="appbar">
                    <div className="link-logo">
                        <div>
                            <img src={Logo} alt="logo" style={{width: '3.0rem', padding: "10px 0 10px 0"}}/>
                        </div>
                        <div style={{padding: '18px 0'}}>
                            &nbsp;&nbsp;Я в точке
                        </div>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <div className="link-padding">
                            <NavLink className={classes.link} onClick={() => setSearchWork(true)}
                                     exact to={"/"}  activeStyle={{color: "#F04D2D", fontWeight: "bold"}} >
                                Ищу подработку
                            </NavLink>
                        </div>
                        <div className="link-padding">
                            | &nbsp;
                        </div>
                        <div className="link-padding">
                            <NavLink className={classes.link} onClick={() => setSearchWork(false)}
                                     exact to={"/employees"} activeStyle={{color: "#F04D2D", fontWeight: "bold"}} >
                                Ищу сотрудника
                            </NavLink>
                        </div>
                    </div>

                    <div className="link-padding" >
                        {
                            searchWork ?
                                (
                                    <div >
                                        <NavLink className={classes.link}
                                            // hidden={signUp}
                                            // onClick={() => setSignIn(!signIn)}
                                                 to={"/vacancy-employees"}
                                        > Объявления
                                        </NavLink>
                                        <NavLink className={classes.link}
                                                 hidden={!user}
                                            // onClick={() => setSignIn(!signIn)}
                                                 to={"/personal-account/employees"}
                                        > Профиль
                                        </NavLink>
                                        <NavLink className={classes.link}
                                                 hidden={signUp}

                                            // onClick={() => setSignIn(!signIn)}
                                                 to={"/reg/employees"}
                                        > Регистрация
                                        </NavLink>
                                        <NavLink className={classes.link}
                                                 hidden={signIn}
                                                 to={"/auth/employees"}
                                            // onClick={() => setSignUp(!signUp)}
                                        > Войти
                                        </NavLink>
                                        <NavLink className={classes.link}
                                                 hidden={!user}  // или id магазина
                                                 onClick={() => {logout()}}
                                                 to={"/"}
                                        > Выйти
                                        </NavLink>
                                    </div>
                                ) : (
                                    <div>
                                        <NavLink className={classes.link}
                                            // hidden={signUpCompany}
                                            // onClick={() => setSignIn(!signIn)}
                                                 to={"/profiles"}
                                        > Анкеты
                                        </NavLink>
                                        <NavLink className={classes.link}
                                                 hidden={!company}
                                            // onClick={() => setSignIn(!signIn)}
                                                 to={"/vacancies"}
                                        > Ваши объявления
                                        </NavLink>
                                        <NavLink className={classes.link}
                                                 hidden={!company}
                                            // onClick={() => setSignIn(!signIn)}
                                                 to={"/personal-account/company"}
                                        > Личный  кабинет
                                        </NavLink>
                                        <NavLink className={classes.link}
                                                 hidden={signUpCompany}
                                            // onClick={() => setSignInCompany(!signInCompany)}
                                                 to={"/reg/company"}
                                        > Регистрация
                                        </NavLink>
                                        <NavLink className={classes.link}
                                                 hidden={signInCompany}
                                                 to={"/auth/company"}
                                            // onClick={() => setSignUpCompany(!signUpCompany)}
                                        > Войти
                                        </NavLink>
                                        <NavLink className={classes.link}
                                                 hidden={!company}  // id компании
                                                 onClick={() => {companyLogout()}}
                                                 to={"/employees"}
                                        > Выйти
                                        </NavLink>
                                    </div>
                                )
                        }


                    </div>
                </header>
            </Container>
        </div>
    );
}