import React, {useContext} from 'react';
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Context from "../Context";

export default function SignUpCompany() {

    // Контекст
    const {signInCompany, setSignInCompany, signUpCompany, setSignUpCompany,
        company, setCompany
    } = useContext(Context)

    function submitHandler(event) {
        event.preventDefault()

        setCompany("Company")
        console.log(company)
        setSignInCompany(!signInCompany)
        setSignUpCompany(!signUpCompany)
        // setLoading(false) // конец загрузки
        window.location.href='/confirm-745-phone'
    }

    // обработчик поля firstName
    function firstNameHandler(event){
        console.log(event.target.value)
    }
    // обработчик поля lastName
    function lastNameHandler(event){
        console.log(event.target.value)
    }
    // обработчик поля phone
    function phoneHandler(event){
        console.log(event.target.value)
    }
    // обработчик поля email
    function emailHandler(event){
        console.log(event.target.value)
    }
    // обработчик поля password
    function passwordHandler(event){
        console.log(event.target.value)
    }
    // обработчик поля repeatPassword
    function repeatPasswordHandler(event){
        console.log(event.target.value)
    }
    // обработчик поля address
    function addressHandler(event){
        console.log(event.target.value)
    }

    return(
        <div>
            <Container maxWidth="lg"  >
                <div style={{width: "300px", margin: "auto" }}>
                    <div style={{ fontSize: "1.2rem", }}>
                        <div style={{marginBottom: "15px"}} >
                            <div style={{padding: "20px 0px 20px 0px",
                                fontSize: "1.4rem",  fontWeight: "600",}}>
                                Регистрация работодателя
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}} >
                            <div>
                                <label >Имя*</label>
                            </div>
                            <div>
                                <input type="text"  style={{width: "100%",}}
                                       onChange={firstNameHandler}/>
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >Фамилия*</label>
                            </div>
                            <div>
                                <input type="text" style={{width: "100%",}}/>
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >Мобильный телефон*</label>
                            </div>
                            <div>
                                <input type="text"  style={{width: "100%",}} />
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >Email*</label>
                            </div>
                            <div>
                                <input type="email"  style={{width: "100%",}} />
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >Название компании*</label>
                            </div>
                            <div>
                                <input type="text"  style={{width: "100%",}} />
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >ИНН компании*</label>
                            </div>
                            <div>
                                <input type="text" style={{width: "100%",}}  />
                            </div>
                        </div>

                        <div style={{marginBottom: "30px"}} >
                            <Button style={{backgroundColor: "#278c21", }}
                                    onClick={submitHandler}
                            >Зарегистрироваться</Button>
                        </div>
                    </div>

                </div>



            </Container>


        </div>
    )
}