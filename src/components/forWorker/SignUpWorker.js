import React, {useContext, useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Context from "../Context";
import SignUpComponent from "./SignUpComponent";
import './styles1/slider.css'

export default function SignUpWorker() {

    // Контекст
    const {user, setUser, signIn, setSignIn, signUp, setSignUp} = useContext(Context)
    // Состояние компонента SignUpWorker
    const [firstName, setFirstName] = React.useState('')
    const [firstNameValid, setFirstNameValid] = useState(true)
    const [lastName, setLastName] = React.useState('')
    const [lastNameValid, setLastNameValid] = useState(true)
    const [phone, setPhone] = React.useState('')
    const [phoneValid, setPhoneValid] = useState(true)
    const [email, setEmail] = React.useState('')
    const [emailValid, setEmailValid] = useState(true)
    const [password, setPassword] = React.useState('')
    const [passwordValid, setPasswordValid] = useState(true)
    const [repeatPassword, setRepeatPassword] = React.useState('')
    const [repeatPasswordValid, setRepeatPasswordValid] = useState(true)
    const [address, setAddress] = React.useState('')
    const [addressValid, setAddressValid] = useState(true)
    const [formValid, setFormValid] = useState(false)

    // состояние ползунка
    const [sliderValue, setSliderValue] = useState(0)

    const [loading, setLoading] = React.useState(false)
    const [formHidden, setFormHidden] = React.useState(false)

    function submitHandler(event) {
        event.preventDefault()

        setUser("Company")
        console.log(user)
        setSignIn(!signIn)
        setSignUp(!signUp)
        // setLoading(false) // конец загрузки
        window.location.href='/confirm/user-phone'
    }

    useEffect(() => {
        if (firstName.length>0 && firstNameValid && lastName.length>0 && lastNameValid &&
            phone.length>0 && phoneValid && email.length>0 && emailValid && address.length>0 && addressValid
        && password.length>0 && passwordValid && repeatPassword.length>0 && repeatPasswordValid) {
            setFormValid(true)
        } else setFormValid(false)
    }, [firstName, firstNameValid, lastNameValid, phoneValid, emailValid,
        passwordValid, repeatPasswordValid, addressValid])

    // сработывает при потере полем фокуса
    function blurHandler(event) {
        switch (event.target.name) {
            case 'firstName':
                if (firstName.length === 0) {
                    setFirstNameValid(true) // что бы граница поля не была красного цвета
                }
                break
            case 'lastName':
                if (lastName.length === 0) {
                    setLastNameValid(true) // что бы граница поля не была красного цвета
                }
                break
            case 'phone':
                if (phone.length === 0) {
                    setPhoneValid(true) // что бы граница поля не была красного цвета
                }
                break
            case 'email':
                if (email.length === 0) {
                    setEmailValid(true) // что бы граница поля не была красного цвета
                }
                break
            case 'password':
                if (password.length === 0) {
                    setPasswordValid(true) // что бы граница поля не была красного цвета
                }
                break
            case 'address':
                if (address.length === 0) {
                    setAddressValid(true) // что бы граница поля не была красного цвета
                }
                break
        }
    }

    // обработчик поля firstName
    function firstNameHandler(event){
        let fname = event.target.value
        setFirstName(fname)
        validateFirstName(fname)
    }
    // обработчик поля lastName
    function lastNameHandler(event){
        let lname = event.target.value
        setLastName(lname)
        validateLastName(lname)
    }
    // обработчик поля phone
    function phoneHandler(event){
        let editPhone = event.target.value
        setPhone(editPhone)
        validatePhone(editPhone)
    }
    // обработчик поля email
    function emailHandler(event){
        let editEmail = event.target.value
        setEmail(editEmail)
        validateEmail(editEmail)
    }
    // обработчик поля password
    function passwordHandler(event){
        let editPassword = event.target.value
        setPassword(editPassword)
        validatePassword(editPassword)
    }
    // обработчик поля repeatPassword
    function repeatPasswordHandler(event){
        let editRepeatPassword = event.target.value
        setRepeatPassword(editRepeatPassword)
        validateRepeatPassword(editRepeatPassword)
    }
    // обработчик поля address
    function addressHandler(event){
        let editAddress = event.target.value
        setAddress(editAddress)
        validateAddress(editAddress)
    }
    //== onClick - очищаем все поля ===
    function cleanFirstName() {
        setFirstName('')  // очистили содержимое
        setFirstNameValid(false) // поле невалидно
    }
    function cleanLastName() {
        setLastName('')
        setLastNameValid(false)
    }
    function cleanPhone() {
        setPhone('')
        setPhoneValid(false)
    }
    function cleanEmail() {
        setEmail('')
        setEmailValid(false)
    }
    function cleanPassword() {
        setPassword('')
        setPasswordValid(false)
    }
    function cleanRepeatPassword() {
        setRepeatPassword('')
        setRepeatPasswordValid(false)
    }
    function cleanAddress() {
        setAddress('')
        setAddressValid(false)
    }

    //======= Валидация полей формы =======
    // === Валидация FirstName, если длина имени больше 3 =====
    function validateFirstName(firstName){
        if (firstName.length > 3) {
            setFirstNameValid(true)
        } else {
            setFirstNameValid(false)
        }
    }
    // === Валидация LastName, если длина фамилии больше 3 =====
    function validateLastName(lastName){
        if (lastName.length > 3) {
            setLastNameValid(true)
        } else {
            setLastNameValid(false)
        }
    }
    // === Валидация Email =====
    function validateEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailValid = re.test(String(email).toLowerCase());
        if (emailValid) {
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }
    }
    // === Валидация Phone === маска (phs: +XXXX-XXX-XXXX, +XXXX.XXX.XXXX, +XXXX XXX XXXX,
    function validatePhone(phone){
        const phs = /^\+?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        const ph = /^\+?([0-9]{11})\)?$/;
        let phoneValid = ph.test(String(phone).toLowerCase());
        if (phoneValid) {
            setPhoneValid(true)
        } else {
            setPhoneValid(false)
        }
    }
    // === Валидация Password ===
    function validatePassword(password){
        const ph = /^[A-Za-z]\w{7,15}$/;
        let passValid = ph.test(String(password).toLowerCase());
        if (passValid) {
            setPasswordValid(true)
        } else {
            setPasswordValid(false)
        }
    }
    // === Валидация RepeatPassword ===
    function validateRepeatPassword(rpassword){
        if (rpassword === password) {
            setRepeatPasswordValid(true)
        } else {
            setRepeatPasswordValid(false)
        }
    }
    // === Валидация Address,  =====
    function validateAddress(address){
        if (address.length > 5) {
            setAddressValid(true)
        } else {
            setAddressValid(false)
        }
    }

    // функция для ползунка
    function getRadius() {
        const size = document.getElementById("radius").value;
        setSliderValue(size)
        console.log(size)
    }

    return(
        <div>
            <Container maxWidth="lg">
               <SignUpComponent
                   firstNH={firstNameHandler} lastNH={lastNameHandler}
                   phoneH={phoneHandler} emailH={emailHandler}
                   passwordH={passwordHandler}
                   repeatPassworH={repeatPasswordHandler}
                   addressH={addressHandler}
                   submitHandler={submitHandler}

                   firstName={firstName} cleanFirstName={cleanFirstName} firstNameValid={firstNameValid}
                   lastName={lastName} cleanLastName={cleanLastName} lastNameValid={lastNameValid}
                   phone={phone} cleanPhone={cleanPhone} phoneValid={phoneValid}
                   email={email} cleanEmail={cleanEmail} emailValid={emailValid}
                   password={password} cleanPassword={cleanPassword} passwordValid={passwordValid}
                   repeatPassword={repeatPassword} cleanRepeatPassword={cleanRepeatPassword}
                   repeatPasswordValid={repeatPasswordValid}
                   address={address} cleanAddress={cleanAddress} addressValid={addressValid}

                   blurHandler={blurHandler}
               />

                   <div style={{textAlign: 'center', paddingBottom: '20px'}}>
                        <p style={{fontSize: "1.0rem"}}>
                            Укажите расстояние от точки поиска работы
                        </p>
                        <p>
                            <input type="range" className="slider"
                                   min="0" max="2000" step="100"
                                   value={sliderValue} id="radius"
                                   onInput={getRadius} />
                        </p>
                        <p style={{fontSize: "1.0rem", paddingBottom: '30px'}}>
                            Радиус: {sliderValue/1000} км ({sliderValue} метров)
                        </p>

                       <div style={{marginBottom: "30px"}} >
                           <Button style={{backgroundColor: "#f04d2d", width: "250px", color:'white'}}
                                   onClick={submitHandler}
                                   disabled={!formValid}
                           >Зарегистрироваться</Button>
                       </div>
                   </div>


            </Container>
        </div>
    )
}