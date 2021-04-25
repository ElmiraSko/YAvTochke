import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import CompanyPagePhotoPlace from "../companyPagePhotoPlace/CompanyPagePhotoPlace";
import CompanyPageContactsPlace from "../companyPageContacts/CompanyPageContactsPlace";
import CompanyBalanceComponent from "../companyBalanceComponent/CompanyBalanceComponent";
import {NavLink} from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import './styles2/CompanyPage.css'
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";


export default function CompanySettings() {
    // получили процент заполненности профиля
    const progressValue = '65'
    //Количество объявлений и анкет, остаток
    const ads = '5'
    const profiles = '6'
    // Сведения о компании
    const companyName = "ООО «Хорошие люди»"
    const [companyInfo, setCompanyInfo] = useState({
        companyDescription: `«RATOS GROUP» предоставит Вам весь спектр мерчендайзинговых услуг,
     а главное, уверенность в том, что Вашей продукцией будет заниматься команда
      специалистов, действительно способных качественно осуществить поддержку торговой марки
    
        Мы не берёмся за заказы, если хотя бы на 1% сомневаемся в своих силах!
         Наша философия состоит в том, что сотрудничество должно быть качественным, 
         а не количественным.`,
        contacts: {
            email: "pochta@mail.ru",
            phone: "+79056785432",
            telegram: "",
            vk: "",
        }
    })
    const [personRole, setPersonRole] = useState('Админ')
    const [personAcc, setPersonAcc] = useState('Админ')

    // Флаги для скрытия и отображения формы, для добавления нового пользователя
    const [formHidden, setFormHidden] = useState(true)
    const [addIconHidden, setAddIconHidden] = useState(false)
    // Данные о пользователях
    const [personsData, setPersonData] = useState(
        [
            {
                name: 'Иван Рекрутеров',
                role: 'Пользователь',
                email: 'Ivan@mail.ru',
                access: 'Ограничен',
            },
            {
                name: 'Оксана Петрова',
                role: 'Пользователь',
                email: 'Petrova@mail.ru',
                access: 'Ограничен',
            },
            {
                name: 'Людмила Петрова',
                role: 'Администратор',
                email: 'Lidmulaf@mail.ru',
                access: 'Разрешен',
            }
        ]
    )
    // const persons = [
    //     {
    //         name: 'Иван Рекрутеров',
    //         role: 'Пользователь',
    //         email: 'Ivan@mail.ru',
    //         access: 'Ограничен',
    //     },
    //     {
    //         name: 'Оксана Петрова',
    //         role: 'Пользователь',
    //         email: 'Petrova@mail.ru',
    //         access: 'Ограничен',
    //     },
    //     {
    //         name: 'Людмила Петрова',
    //         role: 'Администратор',
    //         email: 'Lidmulaf@mail.ru',
    //         access: 'Разрешен',
    //     }
    // ]
    // Чтоб изменить роль пользователя, отправка запроса на бэк
    // Не продумано и не работает
    function roleChange(event) {
        // setPersonRole(prevState => {
        // return {...prevState, role: event.target.value}})
        // }
    }
    // Чтоб изменить права пользователя, отправка запроса на бэк
    function accessChange(event) {
        setPersonAcc(event.target.value)
    }

    // Добавить нового пользователя, отобразить форму
    function addNewPerson() {
        setFormHidden(false)
        setAddIconHidden(true)
    }
    // Отправить нового пользователя на бэк
    function saveNewPerson() {
        setFormHidden(true)
        setAddIconHidden(false)
    }

    return(
        <div>
            <Container  maxWidth="lg" >
                <div className="wrapper-personal-account">
                    <div className="left-wrapper-personal-account">

                        <div style={{ textAlign: "center",}}>
                            <CompanyPagePhotoPlace progressValue={progressValue} compName={companyName}/>

                            <div className="contacts-wrapper">
                                <div className="contact-title">
                                    КОНТАКТЫ
                                </div>
                                <CompanyPageContactsPlace
                                    contPhone={companyInfo.contacts.phone}
                                    contEmail={companyInfo.contacts.email}
                                    contTelegram={companyInfo.contacts.telegram}
                                    contVk={companyInfo.contacts.vk}
                                />
                            </div>
                            <CompanyBalanceComponent ads={ads} profiles={profiles}/>
                        </div>
                    </div>

                    <div className="right-side-wrapper-company-balance">
                        <div className="flex-between margin_B">
                            <div className="hidden_">
                                text
                            </div>

                            <div>
                                <div className="grey-title margin_T_B ">
                                    Пользовательские настройки
                                </div>
                            </div>
                            <div className="margin_L_R">
                                <NavLink to='/employer/personal-account' style={{color: '#505350'}}>
                                    <ClearIcon className="margin_T_B"/>
                                </NavLink>
                            </div>
                        </div>


                        <div className="margin_L_R f-16">
                            <div className="margin_B_2">
                                <div className="bold_ m_t_b">
                                    Пользователи
                                </div>
                                <table className="table-balance">
                                    <thead>
                                        <tr className=" ">
                                            <th className="align-l sett-th">Имя</th>
                                            <th className="align-c sett-th">Роль</th>
                                            <th className="align-c sett-th">Email</th>
                                            <th className="align-c sett-th">Доступ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {personsData.map(person =>
                                        <tr key={person.name}>
                                            <td className="sett-td align-l cs-black">{person.name}</td>
                                            <td className="sett-td align-c" >
                                                <select value={person.role}
                                                    onChange={roleChange}
                                                        className="c-sett-select c-888"
                                                >
                                                    <option value="Пользователь">Пользователь</option>
                                                    <option value="Администратор">Администратор</option>
                                                </select>
                                            </td>
                                            <td className="sett-td align-c cs-black">{person.email}</td>
                                            <td className="sett-td align-c">
                                                <select value={person.access}
                                                        onChange={accessChange}
                                                        className="c-sett-select cs-black"
                                                >
                                                    <option value="Ограничен">Ограничен</option>
                                                    <option value="Разрешен">Разрешен</option>
                                                </select>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>

                            <div hidden={formHidden}>
                                <div className="flex-between">
                                    <div>
                                        <div style={{width: '200px', marginLeft: '4px', color: '#F04D2D'}}>
                                            <label className="sett-td">Имя:</label>
                                            <input type="text"
                                                // value={editTelegram}
                                                // onChange={editTelegramChange}
                                                   style={{width: '100%', marginBottom: '10px',
                                                       borderStyle: 'solid'}}
                                                   className="input-field-error"
                                            />
                                        </div>
                                        <div style={{width: '200px', marginLeft: '4px'}}>
                                            <label className="sett-td">Фамилия:</label>
                                            <input type="text"
                                                // value={editTelegram}
                                                // onChange={editTelegramChange}
                                                   style={{width: '100%', marginBottom: '25px'}}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{width: '200px', marginLeft: '4px'}}>
                                            <label className="sett-td">Роль:</label>
                                            <input type="text"
                                                // value={editTelegram}
                                                // onChange={editTelegramChange}
                                                   style={{width: '100%', marginBottom: '10px'}}
                                            />
                                        </div>
                                        <div style={{width: '200px', marginLeft: '4px'}}>
                                            <label className="sett-td">E-mail:</label>
                                            <input type="text"
                                                // value={editTelegram}
                                                // onChange={editTelegramChange}
                                                   style={{width: '100%',  marginBottom: '25px'}}
                                            />
                                        </div>
                                    </div>
                                    <div style={{width: '215px'}} />
                                </div>
                                <div style={{textAlign: 'right', marginRight: '26px'}} >
                                    <button className="red-button_" onClick={saveNewPerson}>
                                        Добавить
                                    </button>
                                </div>
                            </div>


                            <div style={{cursor: "pointer"}} onClick={addNewPerson} hidden={addIconHidden}>
                                <IconButton style={{padding: '0px', backgroundColor: 'transparent'}}>
                                    <AddCircleOutlineIcon style={{color: '#f04d2d'}} />
                                </IconButton>
                                <span style={{margin: '0 10px 0 10px', fontSize: '14px', fontWeight: '500', }}>
                                        Добавить пользователя
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </Container>
        </div>
    )
}