import React, {useContext} from 'react';
import {Button, Container} from "@material-ui/core";

export default function AtCompany() {
    return(
        <div>
            <Container  maxWidth="md" >
                <div style={{ fontSize: "1.2rem",
                    fontWeight: "600", textAlign: "center", margin: "15px 0px"}}>
                    <div>
                        Ваша компания <br />
                        "ООО Рога и копыта" <br />
                        зарегистрирована
                    </div>
                    <div style={{ fontSize: "1.1rem", margin: "15px 0px", }} >
                        Пароль отправлен на почту
                    </div>
                    <div style={{ fontSize: "1.1rem", margin: "15px 0px", }} >
                        Профиль заполнен на 30%
                    </div>

                    <div style={{ fontSize: "1.1rem", margin: "15px 0px", }} >
                        Заполните профиль для больших возможностей
                    </div>

                    <div style={{ margin: "15px 0px", }}>
                        <Button style={{backgroundColor: "#3fc62c",
                            color: "#eee4e4", margin: "10px 10px 5px 5px", }}  >
                            Заполнить профиль</Button>
                        <br />
                        <Button  style={{backgroundColor: "#f04d2d",
                            color: "#faf5f5", margin: "10px 10px 5px 5px", }}  >
                            Опубликовать вакансию</Button>
                    </div>

                </div>

            </Container>

        </div>
    )
}