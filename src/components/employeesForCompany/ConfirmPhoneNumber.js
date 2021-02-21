import React, {useContext} from 'react';
import {Button, Container} from "@material-ui/core";

export default function AtCompany() {
    return(
        <div>
            <Container  maxWidth="md" >
                <div style={{ fontSize: "1.2rem",
                    fontWeight: "600", textAlign: "center", margin: "35px 0px 20px 0px"}}>
                    <div>
                        Подтвердите свой номер телефона <br />
                        Пароль был отправлен на номер
                    </div>
                    <div style={{marginBottom: "15px"}}>
                        <div>
                            <input type="text" style={{width: "300px",}} placeholder="Код из смс" />
                        </div>
                    </div>

                    <div style={{ margin: "15px 0px", }}>
                        <Button  style={{backgroundColor: "#f5253e",
                            color: "#faf5f5", margin: "10px 10px 5px 5px", }}
                        href="/company-page">
                            Подтвердить</Button>
                    </div>

                </div>

            </Container>

        </div>
    )
}