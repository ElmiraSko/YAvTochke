import React, {useEffect, useState} from 'react';
import './styles1/signInWorker.css'
import ConfirmPhoneComponent from "../ConfirmPhoneComponent";

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
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        console.log(url)
        // fetch(url, requestOptions)
        //     .then(async response => {
        //         const  data = await response.json()
        //         if (response.status === 400) {
        //             alert(data.error)
        //         } else {
        //             alert(data.msg)
        //             alert(data.error)
        //             let stateObj = { foo: "confirm/user-phone" }
        //             window.history.replaceState(stateObj, null, "/welcome/employees")
        //             window.location.href='/welcome/employees'
        //         }
        //     })
        //     .catch(error=>{
        //         console.log("Ошибка при подтверждении номера телефона!")
        //         console.log(error)
        //         alert(error)
        //     });


// убрать потом
        window.location.href='/welcome/employees'
    }

    // обработчик поля code
    function codeHandler(event){
        let codeNumber = event.target.value
        setCode(codeNumber)
        validateCode(codeNumber)
    }
    // === Валидация code, если длина больше 3, надо уточнить =====
    function validateCode(code){
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
            <ConfirmPhoneComponent
                code={code}
                codeValid={codeValid}
                formValid={formValid}
                submitHandler={submitHandler}
                fieldError={fieldError}
                codeHandler={codeHandler}
                blurHandler={blurHandler}/>
        </div>
    )
}