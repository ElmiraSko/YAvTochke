import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import CompanyPagePhotoPlace from "../companyPagePhotoPlace/CompanyPagePhotoPlace";
import CompanyPageContactsPlace from "../companyPageContacts/CompanyPageContactsPlace";
import CompanyBalanceComponent from "../companyBalanceComponent/CompanyBalanceComponent";
import {NavLink} from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import './styles2/CompanySetting.css'


export default function CompanySettings() {
    // получили процент заполненности профиля
    const progressValue = '65'
    const ads = '5'
    const profiles = '6'

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

    function roleChange(event) {
        setPersonRole(event.target.value)
    }
    function accessChange(event) {
        setPersonAcc(event.target.value)
    }
    const persons = [
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
                            <div className="margin_L_R">
                                <div className="hidden_">
                                    text
                                </div>
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
                                <div className="bold_ margin_T_B  margin_B_2">
                                    Пользователи
                                </div>
                                <table className="table-balance">
                                    <thead>
                                    <tr >
                                        <th className="td_comp red-text th left-al f_14" >Имя</th>
                                        <th className="td_comp red-text th f_14">Роль</th>
                                        <th className="td_comp red-text th f_14">Email</th>
                                        <th className="td_comp red-text th f_14">Доступ</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {persons.map(person =>
                                        <tr>
                                            <td className="td_comp_L">{person.name}</td>
                                            <td className="td_comp ">
                                                <select value={person.role}
                                                    onChange={roleChange}
                                                        className="c-sett-select"
                                                >
                                                    <option value="Пользователь">Пользователь</option>
                                                    <option value="Администратор">Администратор</option>
                                                </select>
                                            </td>
                                            <td className="td_comp bold_">{person.email}</td>
                                            <td className="td_comp bold_">
                                                <select value={person.access}
                                                        onChange={accessChange}
                                                        className="c-sett-select"
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
                        </div>


                    </div>

                </div>

            </Container>
        </div>
    )
}