import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../img/Logo-1.png'
import './styles/HeaderApp.css'
import Container from "@material-ui/core/Container";
import Context from "./Context";

export default function HeaderApp2() {

    const {user, setUser, signIn, setSignIn, signUp, setSignUp,
        searchWork, setSearchWork, signUpCompany, setSignUpCompany,
        signInCompany, setSignInCompany, company, setCompany
    } = useContext(Context)

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
    // === Добавляем стилевой класс - active2
    // если выбрана страница соискателя
    function activeLink(searchWork) {
        return (searchWork ? 'active2': '');
    }

    return (
        <div style={{backgroundColor: "#fff", boxShadow: '0 0 3px 2px rgba(132, 140, 142, 0.5)'}}>
            <Container maxWidth="lg">
                <header className="appbar">
                    <div className="link-logo">
                        <NavLink className="logo" to={'/'} onClick={() => setSearchWork(true)} >
                            <img src={Logo} alt="logo" style={{width: '2.2rem', padding: "10px 0 10px 0"}}/>
                        </NavLink>
                        <NavLink className="logo-title" to={'/'} onClick={() => setSearchWork(true)} >
                           Я в точке
                        </NavLink>
                        {/*<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>*/}
                        <div className={`link-padding-tab ${activeLink(searchWork)}`}>
                            <NavLink className="links" onClick={() => setSearchWork(true)}
                                     exact to={"/"}
                                     // activeStyle={{color: "#F04D2D", fontWeight: "bold"}}
                            >
                                Ищу подработку
                            </NavLink>
                        </div>
                        <div className={`link-padding-tab ${activeLink(!searchWork)}`}>
                            <NavLink className="links" onClick={() => setSearchWork(false)}
                                     exact to={"/employees"}
                                     // activeStyle={{color: "#F04D2D", fontWeight: "bold"}}
                            >
                                Ищу сотрудника
                            </NavLink>
                        </div>
                    </div>

                    <div className="link-padding" >
                        {
                            searchWork ?
                                (
                                    <div >
                                        <NavLink className="links f-s"
                                                 to={"/vacancy-employees"}
                                        > Объявления
                                        </NavLink>
                                        <NavLink className="links f-s"
                                                 hidden={!user}
                                                 to={"/profile"}
                                        > Профиль
                                        </NavLink>
                                        <NavLink className="links f-s"
                                                 hidden={!user}
                                                 to={"/my-responses"}
                                        > Отклики
                                        </NavLink>
                                        {/*<NavLink className="links"*/}
                                        {/*         hidden={signUp}*/}
                                        {/*    // onClick={() => setSignIn(!signIn)}*/}
                                        {/*         to={"/reg/employees"}*/}
                                        {/*> Регистрация*/}
                                        {/*</NavLink>*/}
                                        <NavLink className="links f-s"
                                                 hidden={signIn}
                                                 to={"/auth/employees"}
                                            // onClick={() => setSignUp(!signUp)}
                                        > Войти
                                        </NavLink>
                                        <NavLink className="links f-s"
                                                 hidden={!user}  // или id магазина
                                                 onClick={() => {logout()}}
                                                 to={"/"}
                                        > Выйти
                                        </NavLink>
                                    </div>
                                ) : (
                                    <div>
                                        <NavLink className="links f-s"
                                            // hidden={signUpCompany}
                                            // onClick={() => setSignIn(!signIn)}
                                                 to={"/profiles"}
                                        > Анкеты
                                        </NavLink>
                                        <NavLink className="links f-s"
                                                 hidden={!company}
                                            // onClick={() => setSignIn(!signIn)}
                                                 to={"/vacancies"}
                                        > Объявления
                                        </NavLink>
                                        <NavLink className="links f-s"
                                                 hidden={!company}
                                            // onClick={() => setSignIn(!signIn)}
                                                 to={"/personal-account/company"}
                                        > Кабинет
                                        </NavLink>
                                        {/*<NavLink className="links f-s"*/}
                                        {/*         hidden={signUpCompany}*/}
                                        {/*    // onClick={() => setSignInCompany(!signInCompany)}*/}
                                        {/*         to={"/reg/company"}*/}
                                        {/*> Регистрация*/}
                                        {/*</NavLink>*/}
                                        <NavLink className="links f-s"
                                                 hidden={signInCompany}
                                                 to={"/auth/company"}
                                            // onClick={() => setSignUpCompany(!signUpCompany)}
                                        > Войти
                                        </NavLink>
                                        <NavLink className="links f-s"
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