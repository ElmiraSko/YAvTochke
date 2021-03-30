import React, {useEffect, useState, } from 'react';
import { Container} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from "@material-ui/core/IconButton";
import './styles1/WorkerPage.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Select, { components } from 'react-select'
import Button from "@material-ui/core/Button";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import Radio from "@material-ui/core/Radio";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';
import vk2 from "../../img/vk-grey.png";
import telegram2 from "../../img/telegram-grey.png";
import vk3 from "../../img/vk-red.png";
import telegram3 from "../../img/telegram-red.png";
import addPhoto from '../../img/Add-a-photo.png'

export default function WorkerPage() {

    const RedRadio = withStyles({
        root: {
            color: '#f04d2d',
            '&$checked': {
                color: '#f04d2d',
            },
        },
        checked: {},
    })((props) =>
        <Radio color="default" {...props} />);

    const RedCheckbox = withStyles({
        root: {
            color: '#f04d2d',
            '&$checked': {
                color: '#f04d2d',
            },
        },
        checked: {},
    })((props) =>
        <Checkbox color="default" {...props} />);

    //предпочтительный способ связи: mail или phone
    // сначала не выбран, потом надо подтягивать с бэка
    const [preferredCommunication, setPreferredCommunication] = useState('')
    // цвет иконки #f04d2d - красный, #0c1618 - темный, #848c8e - серый
    const [mailColor, setMailColor] = useState('#848c8e')
    const [phoneColor, setPhoneColor] = useState('#848c8e')

    // Состояние: вид работы: постоянная или подработка
    const [workType, setWorkType] = useState('')

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    // Состояние бегунка
    const [sliderValue, setSliderValue] = useState(2)

    //-  вариант 1
    const [showContactsState, setShowContactsState] = useState({
        showContacts: false
    });
    const showContactsHandler = (event) => {
        setShowContactsState({[event.target.name]: event.target.checked});
    };
    const [mailingState, setMailingState] = useState({
        checkMailing: false
    });
    const mailingHandler = (event) => {
        setMailingState({[event.target.name]: event.target.checked});
    };
    const [hideProfileState, setHideProfileState] = useState({
        hideProfile: false
    });
    const hideProfileHandler = (event) => {
        setHideProfileState({[event.target.name]: event.target.checked});
    };


    const handleChange = (event) => {
        setAge(event.target.value);
    };
    // функция установки предпочтительного способа связи - email
    function setPreferredEmail() {
        setPreferredCommunication('email')
    }
    // функция установки предпочтительного способа связи - phone
    function setPreferredPhone() {
        setPreferredCommunication('phone')
    }
    // функция установки предпочтительного способа связи - vk
    function setPreferredVK() {
        setPreferredCommunication('vk')
    }
    // функция установки предпочтительного способа связи - telegram
    function setPreferredTelegram() {
        setPreferredCommunication('telegram')
    }
    // Проверку способа связи выполняем в useEffect, т. к. SetState является асинхронным,
    // то придется использовать локальную переменную или useEffect,
    // чтобы посмотреть, когда состояние уже обновлено
    useEffect(() => {
        isPreferredCommunication()
    }, [preferredCommunication])

    function isPreferredCommunication() {
        if (preferredCommunication === 'email')  {
            setMailColor('#f04d2d')
            setPhoneColor('#848c8e')
        } else
        if (preferredCommunication === 'phone') {
            setPhoneColor('#f04d2d')
            setMailColor('#848c8e')
        }
        else
        if (preferredCommunication === 'vk') {
            setPhoneColor('#848c8e')
            setMailColor('#848c8e')
        }
        else
        if (preferredCommunication === 'telegram') {
            setPhoneColor('#848c8e')
            setMailColor('#848c8e')
        }
    }
    // ==== для календаря
    const [selectedDate, setSelectedDate] = React.useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    // Функция выбора типа работы: Постоянная работа или Подработка
    const workTypeHandler =(event) => {
        setWorkType(event.target.value)
        console.log(workType)
    }
    // функция для бегунка
    function getRadius() {
        const size = document.getElementById("radius").value;
        setSliderValue(size)
        console.log(size)
    }
    // Для мульти селекта
    const options = [
        { value: 'Грузчик', label: 'Грузчик' },
        { value: 'Мерчендайзер', label: ' Мерчендайзер' },
        { value: 'Комплектовщик/сборщик', label: 'Комплектовщик/сборщик' },
        { value: 'Курьер', label: 'Курьер' },
        { value: 'Продавец-кассир', label: 'Продавец-кассир' },
        { value: 'Продавец-консультант', label: 'Продавец-консультант' },
        { value: 'Промоутер', label: 'Промоутер' },
        { value: 'Охраник', label: 'Охраник' },
        { value: 'Тайный покупатель', label: 'Тайный покупатель' },
    ]
    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', border: '2px solid #848c8e', }),
        option: (styles) => {
            return {...styles, backgroundColor: 'white',
                ':hover': {
                    backgroundColor: "#f04d2d",
                    color: 'white',
                },
            }
        },
        multiValue: (styles) => ({...styles, backgroundColor: '#848c8e', color: '#fff', borderRadius: '5px',
            ':hover': {
                backgroundColor: "#848c8e",
                color: 'white',
            },}),
        multiValueLabel: (styles) => ({...styles,  color: '#fff', }),
        multiValueRemove: (styles) => ({...styles, backgroundColor: '#848c8e', borderRadius: '5px',
            ':hover': {
                backgroundColor: "#f04d2d", borderRadius: '5px',
                color: 'white',
            },
        }),
    }
    const Placeholder = props => {
        return <components.Placeholder {...props} />;
    };


    return(
            <Container  maxWidth="lg" >
                <div style={{display: "flex", justifyContent: "space-around",
                    margin: "30px 0px", height: "auto",  fontSize: "1.0rem", }}>

                    <div style={{boxShadow: '0 0 3px 2px rgba(132, 140, 142, 0.5)',
                        width: '30%', position: 'relative', paddingBottom:'52px'}}>

                        <div style={{ textAlign: "center",}}>
                            {/*<div style={{marginTop: '15px'}}>*/}
                            {/*    <Brightness1Icon style={{width: '100px', height: '100px', color: '#848c8e', }}/>*/}
                            {/*</div>*/}

                            <div style={{marginTop: '15px', backgroundColor: 'grey',
                                width: '6.0rem', height: '6.0rem', borderRadius: '50%',
                            marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer'}}>
                                <img src={addPhoto} alt="logo"
                                     style={{width: '5.0rem', marginTop: '10px'}}/>
                            </div>

                            <div style={{ fontSize: '1.6rem', fontWeight: '700',
                                textTransform: 'uppercase', marginBottom: '30px',
                            marginTop: '10px'}}>
                                Петр Петров
                            </div>
                            <p>
                                Предпочтительный способ связи:
                            </p>
                            <IconButton onClick={setPreferredEmail}
                                        style={{ backgroundColor: 'transparent' }}
                                        disableRipple={true}>
                                <MailIcon style={{ fontSize: 30,  color: mailColor }} />
                            </IconButton>
                            <IconButton onClick={setPreferredPhone}
                                        style={{ backgroundColor: 'transparent' }}
                                        disableRipple={true}>
                                <PhoneIcon style={{ fontSize: 30, color: phoneColor }} />
                            </IconButton>
                            <IconButton onClick={setPreferredVK}
                                        style={{ backgroundColor: 'transparent' }}
                                        disableRipple={true}>
                                <img src={preferredCommunication==='vk' ? vk3 : vk2}
                                     alt="Иконка VK"
                                     style={{width: '27px', height: '27px', }} />
                            </IconButton>
                            <IconButton onClick={setPreferredTelegram}
                                        style={{ backgroundColor: 'transparent' }}
                                        disableRipple={true}>
                                <img src={preferredCommunication==='telegram' ? telegram3 :telegram2}
                                     alt="Иконка Telegram"
                                     style={{width: '27px', height: '27px',}} />
                            </IconButton>

                            <div style={{textAlign: "left", width: '240px', margin: 'auto', }}>
                                <div>
                                    <RedRadio
                                        checked={workType === 'Постоянная работа'}
                                        onChange={workTypeHandler}
                                        value="Постоянная работа"
                                        // name="radio-button-demo"
                                        // inputProps={{ 'aria-label': 'C' }}
                                        disableRipple={true}
                                        style={{ backgroundColor: 'transparent' }}
                                    /> Постоянная работа
                                </div>
                                <div>
                                    <RedRadio
                                        checked={workType === 'Подработка'}
                                        onChange={workTypeHandler}
                                        value="Подработка"
                                        // name="radio-button-demo"
                                        // inputProps={{ 'aria-label': 'C' }}
                                        disableRipple={true}
                                        style={{ backgroundColor: 'transparent' }}
                                    /> Подработка
                                </div>
                            </div>
                            <div className="worker-left-details-wr">
                                <div className="worker-left-cont-title">
                                    КОНТАКТЫ
                                </div>
                                <div className="worker-left-cont-flex">

                                    <div className="worker-left-left">
                                        <div style={{marginBottom: '10px'}}>
                                            <label >Телефон:</label> <br/>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <label>E-mail:</label>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <label>Telegram:</label>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <label>Vk:</label>
                                        </div>
                                    </div>

                                    <div>
                                        <div style={{marginBottom: '10px'}}>
                                            <input type="text" className="worker-left-input"
                                                   value='+79056785432' readOnly={true}/>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <input type="text" className="worker-left-input"
                                                   value='petr@mail.ru' readOnly={true}/>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <input type="text" className="worker-left-input"
                                                   value='' readOnly={true}/>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <input type="text" className="worker-left-input"
                                                   value='' readOnly={true}/>
                                        </div>
                                    </div>

                                    <div>
                                        <div style={{marginBottom: '10px'}}>
                                            <RedRadio style={{padding: '0px', backgroundColor: 'transparent'}}
                                                      checked={preferredCommunication === 'phone'}
                                                      onChange={setPreferredPhone}
                                                      value={preferredCommunication}
                                                      disableRipple={true}
                                                      // name="radio-button-demo"
                                                      // inputProps={{ 'aria-label': 'C' }}
                                            />
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <RedRadio style={{padding: '0px', backgroundColor: 'transparent'}}
                                                      checked={preferredCommunication === 'email'}
                                                      onChange={setPreferredEmail}
                                                      value={preferredCommunication}
                                                      disableRipple={true}
                                                      // name="radio-button-demo"
                                                      // inputProps={{ 'aria-label': 'C' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="worker-left-check-box">
                                    <div>
                                        <RedCheckbox checked={showContactsState.showContacts}
                                                     onChange={showContactsHandler} name='showContacts'
                                                     style={{ backgroundColor: 'transparent', padding: 5 }}/>
                                        Показать контакты работодателю
                                    </div>
                                    <div>
                                        <RedCheckbox checked={mailingState.checkMailing}
                                                     onChange={mailingHandler} name='checkMailing'
                                                     style={{ backgroundColor: 'transparent', padding: 5 }}/>
                                        Рассылка подходящих вакансий
                                    </div>
                                    <div>
                                        <RedCheckbox checked={hideProfileState.hideProfile}
                                                     onChange={hideProfileHandler} name='hideProfile'
                                                     style={{ backgroundColor: 'transparent', padding: 5 }}/>
                                        Скрыть анкету
                                    </div>
                                </div>
                            </div>
                            <div className="absolute-button">
                                <Button style={{margin: '15px 15px 15px 10px',
                                    background: '#f04d2d', color: 'white'}}
                                        href='/profile'
                                >Сохранить</Button>
                            </div>
                        </div>
                    </div>

                    <div style={{width: '60%', boxShadow: '0 0 3px 2px rgba(132, 140, 142, 0.5)',}}>
                        <div style={{margin: '10px 0', fontWeight: '700',
                            fontSize: '18px', textAlign: "center",}}>
                            АНКЕТА РАБОТНИКА
                        </div>

                        <div style={{width: '90%', height:'auto',
                            margin: 'auto',  border: '2px solid #e1e1e1',
                            marginBottom: '10px', fontWeight: '500', }}>
                            <div style={{margin: '5px 0 20px 15px'}}>
                                ОСНОВНЫЕ СВЕДЕНИЯ
                            </div>

                            <div style={{display: "flex", justifyContent: "space-between",
                                width: '100%', fontSize: "15px",}}>
                                <div style={{marginTop: '8px', marginLeft: '20px', }}>Пол</div>
                                <div style={{ marginRight: '15px', width: '370px', }}>
                                    <select className="select-css" onChange={handleChange}>
                                        <option value="Мужской" >Мужской</option>
                                        <option value="Женский">Женский</option>
                                    </select>
                                </div>
                            </div>
                            <hr style={{width: '96%', color: '#e1e1e1',
                                backgroundColor: '#e1e1e1', border: 'none', height: '2px'}}/>
                            <div style={{display: "flex", justifyContent: "space-between",
                                width: '100%', fontSize: "15px",}}>
                                <div style={{marginTop: '8px', marginLeft: '20px'}}>Дата рождения</div>
                                <div style={{ marginRight: '15px', width: '370px', }}>
                                    <input type="text" autoComplete='off' value={selectedDate}
                                           className="select-css"
                                           placeholder="дд-мм-гггг"
                                    onDoubleClick={() => {setSelectedDate('')}}
                                           onChange={handleDateChange}
                                    />

                                    {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                                    {/*    /!*<Grid container justify="space-around">*!/*/}
                                    {/*        <KeyboardDatePicker*/}
                                    {/*            disableToolbar*/}
                                    {/*            // placeholder={}*/}
                                    {/*            variant="inline"*/}
                                    {/*            format="dd-MM-yyyy"*/}
                                    {/*            margin="normal"*/}
                                    {/*            id="date-picker-inline"*/}
                                    {/*            value={selectedDate}*/}
                                    {/*            onChange={handleDateChange}*/}
                                    {/*            // KeyboardButtonProps={{*/}
                                    {/*            //     'aria-label': 'change date',*/}
                                    {/*            // }}*/}
                                    {/*        />*/}
                                    {/*    /!*</Grid>*!/*/}
                                    {/*</MuiPickersUtilsProvider>*/}
                                </div>
                            </div>
                            <hr style={{width: '96%', color: '#e1e1e1',
                                backgroundColor: '#e1e1e1', border: 'none', height: '2px'}}/>
                            <div style={{display: "flex", justifyContent: "space-between", width: '100%'}}>
                                <div style={{marginTop: '8px', marginLeft: '20px'}}>Гражданство</div>
                                <div style={{ marginRight: '15px', width: '370px', }}>
                                    <select className="select-css" onChange={handleChange}>
                                        <option value="age">РФ</option>
                                        <option value="age">Иностранное гражданство</option>
                                    </select>
                                </div>
                            </div>
                            <hr style={{width: '96%', color: '#e1e1e1',
                                backgroundColor: '#e1e1e1', border: 'none', height: '2px'}}/>
                            <div style={{display: "flex", justifyContent: "space-between",
                                width: '100%', fontSize: "15px",}}>
                                <div style={{marginTop: '8px', marginLeft: '20px'}}>
                                    Статус самозанятого гражданина
                                </div>
                                <div style={{ marginRight: '15px', width: '370px', }}>
                                    <select className="select-css" onChange={handleChange}>
                                        <option value="age">Да</option>
                                        <option value="age">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <hr style={{width: '96%', color: '#e1e1e1',
                                backgroundColor: '#e1e1e1', border: 'none', height: '2px' }}/>
                            <div style={{display: "flex", justifyContent: "space-between",
                                width: '100%', fontSize: "15px", }}>
                                <div style={{marginTop: '8px', marginLeft: '20px'}}>Мед. книжка</div>
                                <div style={{ marginRight: '15px', width: '370px', }}>
                                    <select className="select-css" onChange={handleChange}>
                                        <option value="age">Да</option>
                                        <option value="age">Нет</option>
                                        <option value="age">Мобил.мед.</option>
                                    </select>
                                </div>
                            </div>
                            <hr style={{width: '96%', color: '#e1e1e1',
                                backgroundColor: '#e1e1e1', border: 'none', height: '2px', marginBottom: '20px',}}/>
                        </div>
                        <div style={{width: '90%', height:'auto',
                            margin: 'auto',  border: '2px solid #e1e1e1',
                            marginBottom: '10px', fontWeight: '500',}}>
                            <div style={{margin: '5px 0 20px 15px'}}>
                                ПАРАМЕТРЫ ТОЧКИ
                            </div>
                            <div style={{display: "flex", justifyContent: "flex-start",}}>
                                <div style={{width: '20%',}}>
                                    <div  style={{margin: '5px 0 15px 15px'}}>
                                        Адрес:
                                    </div>
                                    <div style={{margin: '5px 0 15px 15px'}}>
                                        Радиус:
                                    </div>
                                </div>

                                <div style={{width: '100%',}}>
                                    <div style={{margin: '5px 0 15px 0px'}}>
                                        <input type="text" className="right-address-input"
                                               value='' readOnly={true}/>
                                    </div>

                                    <div style={{margin: '5px 0 15px 0px', display: "flex" }}>
                                        <input type="text" className="sliderValue"
                                               value={sliderValue} readOnly={true}/>
                                        <span style={{margin: '0 10px 0 10px'}}>км</span>
                                        <div style={{width: '70%', margin: '0 15px 0 15px',}}>
                                            <input type="range" className="slider"
                                                   min="0" max="10" step="0.5" id="radius"
                                                   value={sliderValue}
                                                   onInput={getRadius}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <IconButton style={{margin: '0 5px 0 15px', padding: '2px',}}>
                                    <AddCircleOutlineIcon style={{color: '#f04d2d'}} />
                                </IconButton>
                                <span style={{margin: '0 10px 0 10px',  }}>
                                        Добавить точку поиска
                                    </span>
                            </div>
                            <div style={{padding: '0px 10px 15px 15px',  }}>
                                <p style={{padding: '0', margin: '10px 0' }} >
                                        Интересующие  вакансии:
                                </p>
                                <div style={{display: "flex", justifyContent: "flex-start",}}>
                                    <div style={{width: '635px',}}>
                                        <Select styles={colourStyles}
                                                placeholder={"Вакансии"}
                                                options={options} isMulti
                                                onChange={opt => console.log(opt)}
                                                theme={theme => ({
                                                    ...theme,
                                                    borderRadius: 0,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary50: '#f04d2d',
                                                        primary: '#848c8e',
                                                    },
                                                })}
                                        />

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div style={{width: '90%', height:'180px',
                            margin: 'auto',  border: '2px solid #e1e1e1',
                            marginBottom: '10px', fontWeight: '500',}}>
                            <div style={{margin: '5px 0 20px 15px'}}>
                                ТЕКУЩЕЕ МЕСТО РАБОТЫ
                            </div>
                            <div className="work-place-wr">
                                <div style={{width: '20%',}}>
                                    <p  className="right-inputs-label">
                                        Адрес:
                                    </p>
                                    <p  className="right-inputs-label">
                                        Компания:
                                    </p>
                                    <p  className="right-inputs-label">
                                        Должность:
                                    </p>
                                </div>
                                <div style={{width: '80%', textAlign: 'right'}}>
                                    <div style={{margin: '5px 12px 5px 0px'}}>
                                        <input type="text" className="right-inputs"
                                               value='' readOnly={true}/>
                                    </div>
                                    <div style={{margin: '5px 12px 5px 0px'}}>
                                        <input type="text" className="right-inputs"
                                               value='' readOnly={true}/>
                                    </div>
                                    <div style={{margin: '5px 12px 5px 0px'}}>
                                        <input type="text" className="right-inputs"
                                               value='' readOnly={true}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
    )
}