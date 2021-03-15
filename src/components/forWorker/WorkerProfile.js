import React, {useEffect, useState, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from "@material-ui/core/IconButton";
import './styles1/WorkerProfile.css'
import Brightness1Icon from "@material-ui/icons/Brightness1";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 320,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function WorkerProfile() {

    //предпочтительный способ связи: mail или phone
    // сначала не выбран, потом надо подтягивать с бэка
    const [preferredCommunication, setPreferredCommunication] = useState('')
    // цвет иконки #f04d2d - красный, #0c1618 - темный, #848c8e - серый
    const [mailColor, setMailColor] = useState('#848c8e')
    const [phoneColor, setPhoneColor] = useState('#848c8e')

    // Вид работы: постоянная или подработка
    const [workType, setWorkType] = useState('')
    const classes = useStyles();
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    // Состояние бегунка, получаем с сервера
    const [sliderValue, setSliderValue] = useState(0)
    // функция установки предпочтительного способа связи - email
    function setPreferredEmail() {
        setPreferredCommunication('email')
    }
    // функция установки предпочтительного способа связи - phone
    function setPreferredPhone() {
        setPreferredCommunication('phone')
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
    }
    // Выбор типа работы
    const workTypeHandle =(event) => {
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
        { value: 'Консультант', label: 'Консультант' },
        { value: 'Мерчендайзе', label: 'Мерчендайзе' },
        { value: 'Продавец-кассир', label: 'Продавец-кассир' },
        { value: 'Промоутер', label: 'Промоутер' },
        { value: 'Упаковщик', label: 'Упаковщик' },
    ]
    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', border: '2px solid #e1e1e1',  }),
        option: (styles) => {
            return {
                ...styles,
                backgroundColor: 'white'
            }
        },
    }


    return(
        <Container  maxWidth="lg" >
            <div style={{display: "flex", justifyContent: "space-around",
                margin: "30px 0px", height: "auto",  fontSize: "1.0rem", }}>

                <div style={{boxShadow: '0 0 3px 2px rgba(132, 140, 142, 0.5)',
                    width: '30%',   }}>

                    <div style={{ textAlign: "center",}}>
                        <div style={{marginTop: '15px'}}>
                            <Brightness1Icon style={{width: '100px', height: '100px', color: '#848c8e', }}/>
                        </div>

                        {/*<img src={Logo} alt="logo"*/}
                        {/*     style={{width: '6.0rem', padding: "30px 0 10px 0"}}/>*/}

                        <div style={{ fontSize: '1.6rem', fontWeight: '700',
                            textTransform: 'uppercase', marginBottom: '30px'}}>
                            Петр Петров
                        </div>
                        <div style={{padding: '15px 0 10 0',   }}>
                            Предпочтительный способ связи:
                        </div>
                        <IconButton >
                            <MailIcon style={{ fontSize: 30,  color: mailColor }} />
                        </IconButton>

                        <IconButton  >
                            <PhoneIcon style={{ fontSize: 30, color: phoneColor }} />
                        </IconButton>

                        <div style={{textAlign: "left", width: '240px', margin: 'auto', }}>
                            <div className='form_radio'>
                                <input type="radio"
                                       value='Постоянная работа'
                                       id='permanent_work'
                                       className='input'
                                       checked={workType === 'Постоянная работа'}
                                       onChange={workTypeHandle} />
                                <label htmlFor="permanent_work"
                                       className='label'
                                >Постоянная работа</label>
                            </div>
                            <div className='form_radio'>
                                <input type="radio"
                                       value='Подработка'
                                       id='temporary_work'
                                       className='input'
                                       checked={workType === 'Подработка'}
                                       onChange={workTypeHandle}  />
                                <label htmlFor="temporary_work"
                                       className='label'
                                >Подработка</label>

                            </div>
                        </div>
                        <div style={{textAlign: "left",  width: '340px', margin: 'auto', }}>
                            <div style={{fontWeight: '700', margin: '25px 0' }}>
                                КОНТАКТЫ
                            </div>
                            <div style={{display: "flex", justifyContent: "space-around",}}>

                                <div style={{marginRight: '5px',}}>
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
                                        <input type="text" style={{width: '12rem'}}
                                               value='+79056785432' readOnly={true}/>
                                    </div>
                                    <div style={{marginBottom: '10px'}}>
                                        <input type="text" style={{width: '12rem'}}
                                               value='petr@mail.ru' readOnly={true}/>
                                    </div>
                                    <div style={{marginBottom: '10px'}}>
                                        <input type="text" style={{width: '12rem'}}
                                               value='' readOnly={true}/>
                                    </div>
                                    <div style={{marginBottom: '10px'}}>
                                        <input type="text" style={{width: '12rem'}}
                                               value='' readOnly={true}/>
                                    </div>
                                </div>
                                <div style={{marginTop: '10px'}}>
                                    <div style={{marginBottom: '14px'}}>
                                        <input type='radio' id='phone' className='input'
                                               value={preferredCommunication}
                                               checked={preferredCommunication === 'phone'}
                                               onChange={setPreferredPhone}/>
                                        <label htmlFor="phone" className='label'> </label>
                                    </div>
                                    <div style={{marginBottom: '10px'}}>
                                        <input type='radio' id='email' className='input'
                                               value={preferredCommunication}
                                               checked={preferredCommunication === 'email'}
                                               onChange={setPreferredEmail}/>
                                        <label htmlFor="email" className='label'> </label>
                                    </div>
                                </div>
                            </div>

                            <div style={{marginTop: '40px'}}>
                                <div style={{marginBottom: '10px'}}>
                                    <input type='checkbox' />
                                    <label style={{marginLeft: '15px'}}>
                                        Показать контакты работодателю
                                    </label>
                                </div>
                                <div style={{marginBottom: '10px'}}>
                                    <input type='checkbox' />
                                    <label style={{marginLeft: '15px'}}>
                                        Рассылка подходящих вакансий
                                    </label>
                                </div>
                                <div style={{marginBottom: '10px'}}>
                                    <input type='checkbox' />
                                    <label style={{marginLeft: '15px'}}>
                                        Скрыть анкету
                                    </label>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div style={{width: '60%', boxShadow: '0 0 3px 2px rgba(132, 140, 142, 0.5)',}}>
                    <div style={{margin: '10px 0 0 0', fontWeight: '700',
                        fontSize: '18px', textAlign: "center",}}>
                        АНКЕТА РАБОТНИКА
                        <div>
                            <button className="edit-button" onClick={() =>{
                                window.location.href='/personal-account/employees' }}
                            >Изменить данные</button>
                        </div>

                    </div>

                    <div style={{width: '90%', height:'auto',
                        margin: 'auto',  border: '2px solid #e1e1e1', paddingBottom: '30px',
                        marginBottom: '10px', fontWeight: '500', }}>
                        <div style={{margin: '5px 0 20px 15px'}}>
                            ОСНОВНЫЕ СВЕДЕНИЯ
                        </div>
                        <table className="right-table">
                            <tbody>
                            <tr>
                                <td>Пол:</td>
                                <td>Мужской</td>
                            </tr>
                            <tr>
                                <td>Дата рождения:</td>
                                <td>02.11.1990</td>
                            </tr>
                            <tr>
                                <td>Гражданство:</td>
                                <td>РФ</td>
                            </tr>
                            <tr>
                                <td>Статус самозанятого гражданина:</td>
                                <td>Да</td>
                            </tr>
                            <tr>
                                <td>Мед. книжка:</td>
                                <td>Да</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{width: '90%', height:'auto',
                        margin: 'auto',  border: '2px solid #e1e1e1', paddingBottom: '30px',
                        marginBottom: '10px', fontWeight: '500',}}>
                        <div style={{margin: '5px 0 20px 15px'}}>
                            ПАРАМЕТРЫ ТОЧКИ
                        </div>
                        <table className="right-table">
                            <tbody>
                            <tr>
                                <td>Адрес:</td>
                                <td>ул. Горького, д. 4</td>
                            </tr>
                            <tr>
                                <td>Радиус:</td>
                                <td>1 км</td>
                            </tr>
                            <tr>
                                <td>Интересующие  вакансии:</td>
                                <td>Продавец, Мерчендайзер</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{width: '90%', height:'180px',
                        margin: 'auto',  border: '2px solid #e1e1e1',
                        marginBottom: '10px', fontWeight: '500',}}>
                        <div style={{margin: '5px 0 20px 15px'}}>
                            ТЕКУЩЕЕ МЕСТО РАБОТЫ
                        </div>
                        <table className="right-table">
                            <tbody>
                            <tr>
                                <td>Адрес:</td>
                                <td>ул. Кирпичная, д. 23</td>
                            </tr>
                            <tr>
                                <td>Компания:</td>
                                <td>ООО Компания</td>
                            </tr>
                            <tr>
                                <td>Должность:</td>
                                <td>Продавец-кассир</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Container>
    )
}