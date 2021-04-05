import React, {useContext, useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import Context from "../Context";
import SignUpCompanyComponent from "./SignUpCompanyComponent";
import SignUpComponent from "../forWorker/SignUpComponent";
import Loader from "../Loader";

export default function SignUpCompany() {

    // Контекст
    const {signInCompany, setSignInCompany, signUpCompany, setSignUpCompany,
        company, setCompany
    } = useContext(Context)
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
    const [companyName, setCompanyName] = React.useState('')
    const [companyNameValid, setCompanyNameValid] = useState(true)
    const [inn, setInn] = React.useState('')
    const [innValid, setInnValid] = useState(true)
    const [city, setCity] = React.useState('')
    const [cityValid, setCityValid] = useState(true)
    // тип компании и валидация, выбран тип или нет
    const [companyType, setCompanyType] = React.useState('')

    const [formValid, setFormValid] = useState(false)

    // Для загрузчика -
    const [loading, setLoading] = React.useState(false)
    const [formHidden, setFormHidden] = React.useState(false)

    useEffect(() => {
        if (firstName.length>0 && firstNameValid && lastName.length>0 && lastNameValid &&
            phone.length>0 && phoneValid && email.length>0 && emailValid &&
            password.length>0 && passwordValid && repeatPassword.length>0 && repeatPasswordValid &&
        inn.length>0 && innValid && city.length>0 && cityValid &&
        companyName.length>0 && companyNameValid  && companyType.length>0) {
            setFormValid(true)
        } else setFormValid(false)
    }, [firstName, firstNameValid, lastNameValid, phoneValid, emailValid,
        passwordValid, repeatPasswordValid, innValid, cityValid, companyNameValid, companyType])

    function submitHandler(event) {
        event.preventDefault()

        setCompany("Company")
        console.log(company)
        setSignInCompany(!signInCompany)
        setSignUpCompany(!signUpCompany)
        // setLoading(false) // конец загрузки
        window.location.href='/confirm-745-phone'
    }

    // устанавливают тип работодателя,
    // может объединить в одну функцию ?
    function setPreferredDirectEmployer() {
        setCompanyType('Прямой работодатель')
    }
    function setPreferredAgency() {
        setCompanyType('Кадровое агенство')
    }
    function setPreferredRecruiter() {
        setCompanyType('Рекрутер')
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
    // обработчик поля companyName
    function companyNameHandler(event){
        let editCompanyName = event.target.value
        setCompanyName(editCompanyName)
        validateCompanyName(editCompanyName)
    }
    // обработчик поля city
    function cityHandler(event){
        let editCity = event.target.value
        setCity(editCity)
        validateCity(editCity)
    }
    // обработчик поля inn
    function innHandler(event){
        let editInn = event.target.value
        setInn(editInn)
        validateInn(editInn)
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
    function cleanCompanyName() {
        setCompanyName('')
        setCompanyNameValid(false)
    }
    function cleanInn() {
        setInn('')
        setInnValid(false)
    }
    function cleanCity() {
        setCity('')
        setCityValid(false)
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

    //======= Валидация полей формы =======
    // === Валидация FirstName, если длина имени больше 3 =====
    function validateFirstName(firstName){
        if (firstName.length > 2) {
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
        // const phs = /^\+?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        const ph = /^\+?([0-9]{11})\)?$/;
        let phoneValid = ph.test(String(phone).toLowerCase());
        if (phoneValid) {
            setPhoneValid(true)
        } else {
            setPhoneValid(false)
        }
    }
    // === Валидация Название компании, если длина больше 3 =====
    function validateCompanyName(companyName){
        if (companyName.length > 3) {
            setCompanyNameValid(true)
        } else {
            setCompanyNameValid(false)
        }
    }
    // === Валидация City, если длина больше 3 =====
    function validateCity(city){
        if (city.length > 3) {
            setCityValid(true)
        } else {
            setCityValid(false)
        }
    }
    // === Валидация inn, если длина = 12 ///////////////?
    function validateInn(inn){
        if (inn.length === 12) {
            setInnValid(true)
        } else {
            setInnValid(false)
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

    // сработывает при потере полем фокуса
    function blurHandler(event) {
        // eslint-disable-next-line default-case
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
            case 'inn':
                if (inn.length === 0) {
                    setInnValid(true) // что бы граница поля не была красного цвета
                }
                break
            case 'companyName':
                if (companyName.length === 0) {
                    setCompanyNameValid(true) // что бы граница поля не была красного цвета
                }
                break
            case 'city':
                if (city.length === 0) {
                    setCityValid(true) // что бы граница поля не была красного цвета
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
            case 'rpassword':
                if (repeatPassword.length === 0) {
                    setRepeatPasswordValid(true) // что бы граница поля не была красного цвета
                }
                break
        }
    }

    return(
        <div >
            <Container maxWidth="lg">
                <div className="div-louder">
                    {/*{loading && <Loader />}*/}
                </div>
                <form noValidate autoComplete="off"
                      hidden={formHidden}>
                   <SignUpCompanyComponent
                       firstNH={firstNameHandler} lastNH={lastNameHandler}
                       phoneH={phoneHandler} emailH={emailHandler}
                       passwordH={passwordHandler}
                       repeatPassworH={repeatPasswordHandler}
                       innH={innHandler}
                       cityH={cityHandler}
                       companyNameH={companyNameHandler}
                       submitHandler={submitHandler}

                       firstName={firstName} cleanFirstName={cleanFirstName} firstNameValid={firstNameValid}
                       lastName={lastName} cleanLastName={cleanLastName} lastNameValid={lastNameValid}
                       phone={phone} cleanPhone={cleanPhone} phoneValid={phoneValid}
                       companyName={companyName} cleanCompanyName={cleanCompanyName} companyValid={companyNameValid}
                       inn={inn} cleanInn={cleanInn} innValid={innValid}
                       city={city} cleanCity={cleanCity} cityValid={cityValid}
                       email={email} cleanEmail={cleanEmail} emailValid={emailValid}
                       password={password} cleanPassword={cleanPassword} passwordValid={passwordValid}
                       repeatPassword={repeatPassword} cleanRepeatPassword={cleanRepeatPassword}
                       repeatPasswordValid={repeatPasswordValid}
                       companyType={companyType}
                       setPreferredDirectEmployer={setPreferredDirectEmployer}
                       setPreferredAgency={setPreferredAgency}
                       setPreferredRecruiter={setPreferredRecruiter}

                       formValid={formValid}
                       blurHandler={blurHandler}
                   />
                </form>
            </Container>
        </div>
    )
}