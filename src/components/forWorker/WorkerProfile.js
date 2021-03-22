import React, {useEffect, useState, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from "@material-ui/core/IconButton";
import './styles1/WorkerProfile.css'
import Brightness1Icon from "@material-ui/icons/Brightness1";
import Button from "@material-ui/core/Button";


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
                    width: '30%',  position: 'relative', paddingBottom:'52px' }}>

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

                        <p className="work-type-wr">
                            Временная работа
                        </p>
                        <div className="contacts-wrapper">
                            <div className="contact-title">
                                КОНТАКТЫ
                            </div>
                            <div className="contact-content-wr">
                                <div style={{marginRight: '5px', }}>
                                    <p id="contT">
                                        Телефон:
                                    </p>
                                    <p id="contT">
                                        E-mail:
                                    </p>
                                </div>

                                <div>
                                    <div style={{marginBottom: '10px'}}>
                                        <p id="cont" >
                                            +79056785432
                                        </p>
                                    </div>
                                    <div style={{marginBottom: '10px'}}>
                                        <p id="cont">
                                            petr@mail.ru
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute-button">
                            <Button style={{background: '#f04d2d', color: 'white',}}
                                    href='/personal-account/employees'
                            >Изменить</Button>
                        </div>
                    </div>
                </div>

                <div className="right-side-wrapper">
                    <div className="details-title">
                        АНКЕТА РАБОТНИКА
                    </div>

                    <div className="details-wrapper">
                        <div style={{margin: '5px 0 20px 15px'}}>
                            ОСНОВНЫЕ СВЕДЕНИЯ
                        </div>
                        <table className="right-table">
                            <tbody>
                            <tr>
                                <td className="td-l">Пол:</td>
                                <td className="td-r">Мужской</td>
                            </tr>
                            <tr>
                                <td className="td-l">Дата рождения:</td>
                                <td className="td-r">02.11.1990</td>
                            </tr>
                            <tr>
                                <td className="td-l">Гражданство:</td>
                                <td className="td-r">РФ</td>
                            </tr>
                            <tr>
                                <td className="td-l">Статус самозанятого гражданина:</td>
                                <td className="td-r">Да</td>
                            </tr>
                            <tr>
                                <td className="td-l">Мед. книжка:</td>
                                <td className="td-r">Да</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="details-wrapper">
                        <div style={{margin: '5px 0 20px 15px'}}>
                            ПАРАМЕТРЫ ТОЧКИ
                        </div>
                        <table className="right-table">
                            <tbody>
                            <tr>
                                <td className="td-l" >Адрес:</td>
                                <td className="td-r">ул. Горького, д. 4</td>
                            </tr>
                            <tr>
                                <td className="td-l">Радиус:</td>
                                <td className="td-r">1 км</td>
                            </tr>
                            <tr>
                                <td className="td-l">Интересующие  вакансии:</td>
                                <td className="td-r">Продавец, Мерчендайзер</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="details-wrapper">
                        <div style={{margin: '5px 0 20px 15px'}}>
                            ТЕКУЩЕЕ МЕСТО РАБОТЫ
                        </div>
                        <table className="right-table">
                            <tbody>
                            <tr>
                                <td className="td-l">Адрес:</td>
                                <td className="td-r">ул. Кирпичная, д. 23</td>
                            </tr>
                            <tr>
                                <td className="td-l">Компания:</td>
                                <td className="td-r">ООО Компания</td>
                            </tr>
                            <tr>
                                <td className="td-l">Должность:</td>
                                <td className="td-r">Продавец-кассир</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Container>
    )
}