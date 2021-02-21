import React, {useContext} from 'react';
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Context from "../Context";

export default function SignUpWorker() {

    // Контекст
    const {user, setUser, signIn, setSignIn, signUp, setSignUp} = useContext(Context)

    function submitHandler(event) {
        event.preventDefault()

        setUser("Company")
        console.log(user)
        setSignIn(!signIn)
        setSignUp(!signUp)
        // setLoading(false) // конец загрузки
        window.location.href='/confirm/user77t-745-phone'
    }

    // обработчик поля email
    function firstNameHandler(event){
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
                                Регистрация соискателя
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
                                <label >Гражданство*</label>
                            </div>
                            <div>
                                <input type="text"  style={{width: "100%",}} />
                            </div>
                        </div>

                        <div style={{marginBottom: "25px"}}>
                            <div>
                                <label >Адрес*</label>
                            </div>
                            <div>
                                <input type="text" style={{width: "100%",}}
                                placeholder="Адрес где хотите работать"/>
                            </div>
                        </div>

                        <div style={{marginBottom: "30px"}} >
                            <Button style={{backgroundColor: "#278C21", width: "100%",}}
                                    onClick={submitHandler}
                            >Зарегистрироваться</Button>
                        </div>
                    </div>

                </div>



            </Container>


        </div>
    )
}