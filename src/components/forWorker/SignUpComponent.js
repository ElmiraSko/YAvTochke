import React from 'react';
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";

export default function (props) {

    const firstNameHandler = props.firstNH
    const lastNameHandler = props.lastNH
    const phoneHandler = props.phoneH
    const emailHandler = props.emailH
    const addressHandler = props.addressH
    const passwordHandler = props.passwordH
    const submitHandler = props.submitHandler

    return(
        <Container maxWidth="lg">
            <div style={{ fontSize: "1.2rem", }}>

                <div style={{padding: "30px 0px 30px 0px", marginBottom: "15px",
                    fontSize: "1.6rem",  fontWeight: "700", textAlign: 'center'}}>
                    РЕГИСТРАЦИЯ СОИСКАТЕЛЯ
                </div>

                <div style={{display: "flex", justifyContent: "space-around",
                    marginBottom: "30px", height: "180px", fontSize: "1.0rem", }}>
                    <div style={{
                        width: "30%", height: "auto",
                        borderRadius: '50%'}}>
                        <div style={{marginBottom: "15px"}} >
                            <div>
                                <label >Фамилия*</label>
                            </div>
                            <div>
                                <input type="text"  style={{width: "100%",
                                    height: '25px', fontSize: "1.3rem", borderRadius: '5px', paddingLeft: '7px', }}
                                       value={props.firstName}
                                       onChange={firstNameHandler}
                                       onClick={props.cleanFirstName} />
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >Имя*</label>
                            </div>
                            <div>
                                <input type="text" style={{width: "100%",
                                    height: '25px', fontSize: "1.3rem", borderRadius: '5px', paddingLeft: '7px', }}
                                       value={props.lastName}
                                       onChange={lastNameHandler}
                                       onClick={props.cleanLastName} />
                            </div>
                        </div>

                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >Мобильный телефон*</label>
                            </div>
                            <div>
                                <input type="text"  style={{width: "100%",
                                    height: '25px', fontSize: "1.3rem", borderRadius: '5px', paddingLeft: '7px', }}
                                       value={props.phone}
                                       onChange={phoneHandler}
                                       onClick={props.cleanPhone}/>
                            </div>
                        </div>

                    </div>
                    <div style={{
                        width: "30%", height: "auto",
                        borderRadius: '50%'}}>
                        <div style={{marginBottom: "15px"}}>
                            <div>
                                <label >E-mail*</label>
                            </div>
                            <div>
                                <input type="email"  style={{width: "100%",
                                    height: '25px', fontSize: "1.3rem", borderRadius: '5px', paddingLeft: '7px', }}
                                       value={props.email}
                                       onChange={emailHandler}
                                       onClick={props.cleanEmail}
                                />
                            </div>
                        </div>

                        <div style={{marginBottom: "25px"}}>
                            <div>
                                <label >Пароль*</label>
                            </div>
                            <div>
                                <input type="password" style={{width: "100%",
                                    height: '25px', fontSize: "1.3rem", borderRadius: '5px', paddingLeft: '7px', }}
                                       value={props.password}
                                       onChange={passwordHandler}
                                       onClick={props.cleanPassword}  />
                            </div>
                        </div>
                        <div style={{marginBottom: "25px"}}>
                            <div>
                                <label >Подтвердить пароль*</label>
                            </div>
                            <div>
                                <input type="password" style={{width: "100%",
                                    height: '25px', fontSize: "1.3rem", borderRadius: '5px', paddingLeft: '7px',}}
                                       value={props.password}
                                       onChange={passwordHandler}
                                       onClick={props.cleanPassword}  />
                            </div>
                        </div>

                    </div>
                </div>

                <div style={{textAlign: 'center', margin: 'auto', width: "40%"}}>
                    <div style={{marginBottom: "30px", textAlign: 'left', fontSize: "1.0rem", }}>
                        <div>
                            <label>Адрес поиска работы*</label>
                        </div>
                        <div>
                            <input type="text" style={{width: "100%",
                                height: '25px', fontSize: "1.3rem", borderRadius: '5px', paddingLeft: '7px', }}
                                   value={props.address}
                                   // placeholder="Адрес где хотите работать"
                                   onChange={addressHandler}
                                   onClick={props.cleanAddress}/>
                        </div>
                    </div>

                    {/*<div style={{marginBottom: "30px"}} >*/}
                    {/*    <Button style={{backgroundColor: "#FFB43C", width: "40%",}}*/}
                    {/*            onClick={submitHandler}*/}
                    {/*    >Зарегистрироваться</Button>*/}
                    {/*</div>*/}
                </div>

            </div>

        </Container>


    )
}