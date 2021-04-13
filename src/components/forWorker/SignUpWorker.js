import React, {useContext, useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import Context from "../Context";
import SignUpComponent from "./SignUpComponent";
import './styles1/slider.css'
import {Circle, Map, Placemark, YMaps} from "react-yandex-maps";
import './styles1/signUpWorker.css'
import Loader from "../Loader";
import RegButton from "../buttons/RegButton";

export default function SignUpWorker() {

    // Контекст
    const {setUser, signIn, setSignIn, signUp, setSignUp} = useContext(Context)
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
    const [addressCoords, setAddressCoords] = useState('')
    const [mapHid, setMapHid] = useState(true)
    const [ymaps, setYmaps] = useState()
    const [buttonValue, setButtonValue] = useState("ПОКАЗАТЬ КАРТУ")
    const [center, setCenter] = useState([55.751574, 37.573856])
    const [zoom, setZoom] = useState(7)
    const mapState = React.useMemo(() =>
            ({ center, zoom, controls: ['zoomControl', 'fullscreenControl']}),
        [center, zoom])
    const [formValid, setFormValid] = useState(false)

    // состояние ползунка
    const [sliderValue, setSliderValue] = useState(2)
    // Для загрузчика -
    const [loading, setLoading] = React.useState(false)
    const [formHidden, setFormHidden] = React.useState(false)

    const buttonText = 'Зарегистрироваться'
    //
    function submitHandler(event) {
        event.preventDefault()
        setFormHidden(true) // скрыли форму
        setLoading(true)    // начало загрузки

        // ymaps.geocode(address)
        //     .then(result => {
        //         const coordinates = result.geoObjects.get(0).geometry.getCoordinates()
        //         // setCenter(coordin) // не меняем отцентровку карты, только получаем координаты адреса
        //         setAddressCoords(coordinates)
        //         const requestOptions = {
        //             method: 'POST',
        //             body: JSON.stringify({
        //                 first_name: firstName,
        //                 last_name: lastName,
        //                 phone: phone,
        //                 email: email,
        //                 password: password,
        //                 address: address,
        //                 x: coordinates[0],
        //                 y: coordinates[1],
        //                 radius: sliderValue
        //             })
        //         };
        //         console.log(requestOptions)
                // fetch('https://iaminpoint.herokuapp.com/register', requestOptions)
                //     .then(async response => {
                //         console.log(response)
                //         const  data = await response.json()
                //         console.log(response.status)
                //         if (response.status === 400) {
                //             setLoading(false)    // конец загрузки
                //             setFormHidden(false) // открыли форму
                //             setUser(null)
                //             setSignIn(false)
                //             setSignUp(false)
                //             alert(data.error)
                //         } else {
                //             setUser(data.id)
                //             setSignIn(!signIn)
                //             setSignUp(!signUp)
                //             setLoading(false)    // конец загрузки
                //             alert(data.msg)
                //             let stateObj = { foo: "reg/employees" }
                //             window.history.replaceState(stateObj, null, "/confirm/user-phone")
                //             window.location.href='/confirm/user-phone'
                //         }
                //     })
                //     .catch(error=>{
                //         console.log("Ошибка при регистрации пользователя!")
                //         console.log(error)
                //         setLoading(false)
                //     })
            // });



        // убрать потом
        setUser(5)
        setSignIn(true)
        setSignUp(true)
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
    // === для карты ======
    function findAddressPlace() {
        console.log("Клик по кнопке")
        if (address) {
            ymaps.geocode(address)
                .then(result => {
                    const coordin = result.geoObjects.get(0).geometry.getCoordinates()
                    console.log(coordin)
                    setCenter(coordin)
                    setAddressCoords(coordin)
                })
        }
    }

    function getCurrentPlace(ymaps) {
        setYmaps(ymaps)
        ymaps.geolocation.get({
            provider: 'auto',
            mapStateAutoApply: true
        }).then(function (result) {
            let coords = result.geoObjects.get(0).geometry.getCoordinates()
            // console.log(coords);
            // localStorage.setItem("center", coords)
            // tempCords=coords  // пересмотреть
            setCenter(coords)
            // console.log(tempCords)
        });
    }

    function showTheMap() {
        if (mapHid){
            setButtonValue("СКРЫТЬ КАРТУ")
            setMapHid(false)
        } else {
            setButtonValue("ПОКАЗАТЬ КАРТУ")
            setMapHid(true)
        }
    }

    return(
        <div>
            <Container maxWidth="lg">
                <div className="div-louder">
                    {loading && <Loader />}
                </div>

                <form noValidate autoComplete="off" hidden={formHidden} >
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
                </form>

                    <div className="search-block" hidden={formHidden}>
                        <p style={{fontSize: "1.0rem"}}>
                            УКАЖИТЕ РАССТОЯНИЕ ОТ ТОЧКИ ПОИСКА РАБОТЫ
                        </p>
                        <p style={{width: '400px', margin: 'auto'}}>
                            <input type="range" className="slider"
                                   min="0" max="10" step="0.1"
                                   value={sliderValue} id="radius"
                                   onInput={getRadius} />
                        </p>
                        <p className="radius-text">
                            Радиус: {sliderValue} км
                        </p>


                        <button className="map-button"
                                onClick={showTheMap} >
                            {buttonValue}
                        </button>

                        <div className="map-wrapper"
                             hidden={mapHid}>
                            <YMaps
                                query={{
                                    apikey: '7d5617ab-0b68-4e1b-927b-15096a804e10',
                                }}>
                                <div>
                                    <Map
                                        state={mapState}
                                        onLoad={(ymaps) => {
                                            console.log(ymaps.geocode);
                                            getCurrentPlace(ymaps);
                                        } }
                                        modules={[
                                            'control.ZoomControl',
                                            'control.FullscreenControl',
                                            'geolocation', 'geocode',
                                            'geoObject.addon.balloon',
                                            'geoObject.addon.hint']}

                                        style={{width: "600px", height: "400px"}}
                                    >
                                        <Circle
                                            geometry={ [center,  sliderValue*1000]}
                                            options={{
                                                // Setting the circle options.
                                                // Enabling drag-n-drop for the circle.
                                                draggable: false,
                                                fillColor: 'rgba(245, 131, 108,0.2)',
                                                strokeColor: '#f04d2d',
                                                strokeOpacity: 0.8,
                                                strokeWidth: 1,
                                            }}
                                        />

                                        <Placemark geometry={center}
                                                   options={{
                                                       preset: 'islands#darkOrangeDotIcon',
                                                   }}
                                        />
                                        {/*<Placemark geometry={[55.75203456899694,37.64085649999999]} />*/}

                                        {/*{coordinates.map(coordinate => <Placemark geometry={coordinate} />)}*/}

                                    </Map>
                                </div>
                            </YMaps>
                        </div>

                        <div style={{margin: "30px 0px 30px 0px"}} >
                            <RegButton
                                subHandler={submitHandler}
                                formValid={formValid}
                                buttonText={buttonText}
                            />
                        </div>
                    </div>
            </Container>
        </div>
    )
}