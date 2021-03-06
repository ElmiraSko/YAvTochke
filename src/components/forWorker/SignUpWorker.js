import React, {useContext, useState} from 'react';
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
    const [lastName, setLastName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [citizenship, setCitizenship] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [password, setPassword] = React.useState('')
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

    // обработчик поля firstName
    function firstNameHandler(event){
        setFirstName(event.target.value)
    }
    // обработчик поля lastName
    function lastNameHandler(event){
        setLastName(event.target.value)
    }
    // обработчик поля phone
    function phoneHandler(event){
        setPhone(event.target.value)
    }
    // обработчик поля email
    function emailHandler(event){
        setEmail(event.target.value)
    }
    // обработчик поля citizenship
    function citizenshipHandler(event){
        setCitizenship(event.target.value)
    }
    // обработчик поля address
    function addressHandler(event){
        setAddress(event.target.value)
    }
    // обработчик поля password
    function passwordHandler(event){
        setPassword(event.target.value)
    }
    //== onClick - для всех полей ===
    function cleanFirstName() {
        setFirstName('')
    }
    function cleanLastName() {
        setLastName('')
    }
    function cleanPhone() {
        setPhone('')
    }
    function cleanEmail() {
        setEmail('')
    }
    function cleanCitizenship() {
        setCitizenship('')
    }
    function cleanAddress() {
        setAddress('')
    }
    function cleanPassword() {
        setPassword('')
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
                   citizenshipH={citizenshipHandler} addressH={addressHandler}
                   passwordH={passwordHandler} submitHandler={submitHandler}

                   firstName={firstName} cleanFirstName={cleanFirstName}
                   lastName={lastName} cleanLastName={cleanLastName}
                   phone={phone} cleanPhone={cleanPhone}
                   email={email} cleanEmail={cleanEmail}
                   citizenship={citizenship} cleanCitizenship={cleanCitizenship}
                   address={address} cleanAddress={cleanAddress}
                   password={password} cleanPassword={cleanPassword} />

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
                           <Button style={{backgroundColor: "#FFB43C", width: "50x",}}
                                   onClick={submitHandler}
                           >Зарегистрироваться</Button>
                       </div>
                   </div>


            </Container>
        </div>
    )
}