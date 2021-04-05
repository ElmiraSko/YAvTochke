import React from 'react';
import {Container} from "@material-ui/core";
import RegButton from "./buttons/RegButton";


export default function ConfirmPhoneComponent(props) {

    // === Добавляем стилевой класс - error
    function fieldError(fieldNameValid) {
        return (fieldNameValid ? " ": 'input-field-error');
    }
    const buttonText ='Подтвердить'

    return(
        <div>
            <Container  maxWidth="md" >
                <div style={{ fontSize: "1.2rem",
                    fontWeight: "600", textAlign: "center", margin: "35px 0px 20px 0px"}}>
                    <div style={{ fontSize: "1.4rem", textTransform: 'uppercase',
                        marginBottom: '40px', fontWeight: '600',  }}>
                        Подтвеждение номера телефона
                    </div>

                    <div style={{margin: "15px 0 15px 0"}}>
                        <div style={{ fontSize: "1.1rem", }} >
                            Пароль был отправлен на указанный номер
                        </div>
                        <div>
                            <input type="text"
                                   name="code"
                                   style={{width: "300px", margin: '20px 0 15px 0'}}
                                   className={`input-field ${fieldError(props.codeValid)}`}
                                   placeholder="Код из смс"
                                   onChange={props.codeHandler}
                                   onBlur={props.blurHandler}
                            />
                        </div>
                    </div>

                    <RegButton
                        subHandler={props.submitHandler}
                        formValid={props.formValid}
                        buttonText={buttonText}
                    />

                </div>
            </Container>
        </div>
    )
}