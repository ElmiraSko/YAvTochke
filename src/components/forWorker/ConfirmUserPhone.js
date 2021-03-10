import React, {useContext} from 'react';
import {Button, Container} from "@material-ui/core";
import './styles1/signInWorker.css'

export default function ConfirmUserPhone() {
    return(
        <div>
            <Container  maxWidth="md" >
                <div style={{ fontSize: "1.2rem",
                    fontWeight: "600", textAlign: "center", margin: "35px 0px 20px 0px"}}>
                    <div>
                        Подтвердите свой номер телефона <br />
                        Пароль был отправлен на указанный номер
                    </div>
                    <div style={{marginBottom: "15px"}}>
                        <div>
                            <input type="text"
                                   style={{width: "300px", margin: '40px 0 15px 0'}}
                                   className="input-field"
                                   placeholder="Код из смс" />
                        </div>
                    </div>

                    <div style={{ margin: "15px 0px", }}>
                        <Button  style={{backgroundColor: "#f5253e",
                            color: "#faf5f5", margin: "10px 10px 5px 5px", }}
                                 href="/after-r57ph7-page">
                            Подтвердить</Button>
                    </div>

                </div>

            </Container>

        </div>
    )
}