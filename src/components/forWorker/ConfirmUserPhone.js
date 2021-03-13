import React, {useContext, useEffect, useState} from 'react';
import {Button, Container} from "@material-ui/core";
import './styles1/signInWorker.css'

export default function ConfirmUserPhone() {

    const [code, setCode] = React.useState('')
    const [codeValid, setCodeValid] = useState(true)
    const [formValid, setFormValid] = useState(false)

    const userId = localStorage.getItem('user')
    let url = 'https://iaminpoint.herokuapp.com/confirm_phone/?code='+code+'&id='+userId+'&type=a'

    // console.log(url)

    useEffect(() => {
        if (code.length>0 && codeValid) {
            setFormValid(true)
        } else {
            setFormValid(false)}
    }, [code, codeValid])

    function submitHandler(event) {
        event.preventDefault()
        const requestOptions = {
            method: ' GET',
            headers: { 'Content-Type': 'application/json' },
        };
        console.log(url)
        fetch(url, requestOptions)
            .then(async response => {
                const  data = await response.json()
                if (response.status === 400) {
                    alert(data.error)
                } else {
                    alert(data.msg)
                    // alert(data.error)
                    let stateObj = { foo: "confirm/user-phone" }
                    window.history.replaceState(stateObj, null, "/after-r57ph7-page")
                    window.location.href='/after-r57ph7-page'
                }
            })
            .catch(error=>{
                console.log("Ошибка при подтверждении номера телефона!")
                console.log(error)
            });
    }

    // обработчик поля code
    function codeHandler(event){
        let codeNumber = event.target.value
        setCode(codeNumber)
        validateFirstName(codeNumber)
    }
    // === Валидация code, если длина больше 3 =====
    function validateFirstName(code){
        if (code.length > 3) {
            setCodeValid(true)
        } else {
            setCodeValid(false)
        }
    }

    // === Добавляем стилевой класс - error
    function fieldError(fieldNameValid) {
        return (fieldNameValid ? " ": 'input-field-error');
    }
    // сработывает при потере полем фокуса, нужно переписать
    function blurHandler(event) {
        // eslint-disable-next-line default-case
        switch (event.target.name) {
            case 'code':
                if (code.length === 0) {
                    setCodeValid(true) // что бы граница поля не была красного цвета
                }
                break

        }
    }

    return(
        <div>
            <Container  maxWidth="md" >
                <div style={{ fontSize: "1.2rem",
                    fontWeight: "600", textAlign: "center", margin: "35px 0px 20px 0px"}}>
                    <div style={{ fontSize: "1.4rem", marginBottom: '20px', }}>
                        Подтвердите номер телефона и адрес электронной почты!
                    </div>

                    <div style={{marginBottom: "15px"}}>
                        <div style={{ fontSize: "1.1rem", color: '#F04D2D'}} >
                            Пароль был отправлен на указанный номер
                        </div>
                        <div>
                            <input type="text"
                                   name="code"
                                   style={{width: "300px", margin: '20px 0 15px 0'}}
                                   className={`input-field ${fieldError(codeValid)}`}
                                   placeholder="Код из смс"
                                   onChange={codeHandler}
                                   onBlur={blurHandler}
                            />
                        </div>
                    </div>

                    <div style={{ margin: "15px 0px", }}>
                        <Button  style={{backgroundColor: "#f04d2d",
                            color: "#faf5f5", margin: "10px 10px 5px 5px", }}
                                 onClick={submitHandler}
                                 disabled={!formValid}
                                 // href="/after-r57ph7-page"
                        >
                            Подтвердить</Button>
                    </div>

                </div>
            </Container>
        </div>
    )
}