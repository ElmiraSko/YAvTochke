import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import CompanyPagePhotoPlace from "../companyPagePhotoPlace/CompanyPagePhotoPlace";
import CompanyPageContactsPlace from "../companyPageContacts/CompanyPageContactsPlace";
import './styles2/CompanyBalance.css'
import '../forWorker/styles1/WorkerProfile.css'
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import ClearIcon from '@material-ui/icons/Clear';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import SimpleButton from "../buttons/SimpleButton";

export default function CompanyBalance() {

    // получили название компании
    const[companyName, setCompanyName] = useState('OOO "Хорошие люди"')

    // получили процент заполненности профиля
    const progressValue = '65'
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

    let source = document.referrer // получили адрес с которого перешли, полный путь
    console.log(source)
    return(
        <div>
            <Container  maxWidth="lg" >
                <div style={{display: "flex", justifyContent: "space-around",
                    margin: "30px 0px", height: "auto",  fontSize: "1.0rem", }}>

                    <div style={{boxShadow: '0 0 3px 2px rgba(132, 140, 142, 0.5)',
                        width: '30%',  position: 'relative', paddingBottom:'52px' }}>

                        <div style={{ textAlign: "center",}}>
                            <CompanyPagePhotoPlace progressValue={progressValue} compName={companyName}/>

                            <div className="contacts-wrapper">
                                <div className="contact-title">
                                    КОНТАКТЫ
                                </div>
                                {/*<div className="contact-content-wr">*/}
                                {/*    <div style={{marginRight: '5px', }}>*/}
                                {/*        <p className="contT">*/}
                                {/*            Телефон:*/}
                                {/*        </p>*/}
                                {/*        <p className="contT">*/}
                                {/*            E-mail:*/}
                                {/*        </p>*/}
                                {/*        <p id="telegram">*/}
                                {/*            <img src={telegram2}*/}
                                {/*                 alt="Иконка Telegram"*/}
                                {/*                 style={{width: '25px', height: '25px',}} />*/}
                                {/*        </p>*/}
                                {/*        <p id="vk">*/}
                                {/*            <img src={vk2}*/}
                                {/*                 alt="Иконка VK"*/}
                                {/*                 style={{width: '25px', height: '25px', }} />*/}
                                {/*        </p>*/}
                                {/*    </div>*/}

                                {/*    <div>*/}
                                {/*        /!*<p className="cont">*!/*/}
                                {/*        /!*    {companyInfo.contacts.phone}*!/*/}
                                {/*        /!*</p>*!/*/}
                                {/*        /!*<p className="cont">*!/*/}
                                {/*        /!*    {companyInfo.contacts.email}*!/*/}
                                {/*        /!*</p>*!/*/}
                                {/*        /!*<p className="cont">*!/*/}
                                {/*        /!*    {companyInfo.contacts.telegram}*!/*/}
                                {/*        /!*</p>*!/*/}
                                {/*        /!*<p className="cont">*!/*/}
                                {/*        /!*    {companyInfo.contacts.vk}*!/*/}
                                {/*        /!*</p>*!/*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <CompanyPageContactsPlace
                                    contPhone={companyInfo.contacts.phone}
                                    contEmail={companyInfo.contacts.email}
                                    contTelegram={companyInfo.contacts.telegram}
                                    contVk={companyInfo.contacts.vk}
                                />
                            </div>

                            {/*<div >*/}
                            {/*    <Button style={{background: '#f04d2d', color: 'white',}}*/}
                            {/*            onClick={changeContacts}*/}
                            {/*    >{contactsButtonTitle}</Button>*/}
                            {/*</div>*/}

                            <div style={{marginTop: '20px',
                                width: '20.0rem', height: '12.0rem', marginLeft: 'auto', marginRight: 'auto',
                                border: '1px solid #505350', fontSize: '1.1rem',}}>
                                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px',}}>
                                    <span className="material-icons">
                                    account_balance_wallet
                                </span>
                                    <span style={{marginLeft: '10px', color: '#505350', fontWeight: '500',}}>
                                        Баланс компании
                                    </span>
                                </div>
                                <div style={{textAlign: 'left', marginLeft: '30px',}}>
                                    <p>
                                        Остаток пакета на текущее время:
                                    </p>
                                    <p>
                                        Объявления: 15 Анкеты: 6
                                    </p>
                                    <p>
                                        Администратор аккаунта: Иванова Л.П.
                                    </p>
                                    <div style={{textAlign: 'center', }}>
                                        <NavLink to={"/employer/personal-account/balance"}
                                                 style={{color: '#f04d2d',
                                                     textDecoration: 'none', fontWeight: '500',}}>
                                            Подробнее
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style={{marginTop: '25px',}}>
                                    <NavLink to={"/employer/personal-account/documents"}
                                             style={{color: '#505350',
                                                 textDecoration: 'none', fontWeight: '500', marginTop: '20px',}}>
                                        Бухгалтерские документы
                                    </NavLink>
                                </div>
                                <div style={{marginTop: '15px',}}>
                                    <NavLink to={"/employer/personal-account/settings"}
                                             style={{color: '#505350',
                                                 textDecoration: 'none', fontWeight: '500', marginTop: '20px',}}>
                                        Пользовательские настройки
                                    </NavLink>
                                </div>
                                <div style={{marginTop: '15px',}}>
                                    <NavLink to={"/employer/personal-account/statistics"}
                                             style={{color: '#505350',
                                                 textDecoration: 'none',
                                                 fontWeight: '500',
                                             }}>
                                        Посмотреть статистику
                                    </NavLink>
                                </div>
                            </div>
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
                                    <div className="grey-title margin_T_B">
                                        ПОДРОБНЫЙ БАЛАНС
                                    </div>
                                </div>
                                <div className="margin_L_R">
                                    <NavLink to='/employer/personal-account' style={{color: '#505350'}}>
                                        <ClearIcon className="margin_T_B"/>
                                    </NavLink>
                                </div>
                            </div>

                            <div className="margin_L_R">
                                <div className="flex-between">
                                    <div className="bold_">
                                        Остаток на текущее время
                                    </div>
                                    <div className="bold_ red-text this_link">
                                        История заказов
                                    </div>
                                </div>
                                <div className='margin_T_B font_16'>
                                    Объявления компании:
                                    <span className="margin_L_R red-text bold_700">15</span>
                                    Анкеты:
                                    <span className="margin_L_R red-text bold_700">6</span>
                                </div>

                                <div className="margin_B">
                                    <div className="bold_ margin_T_B">
                                        Пополнение баланса
                                    </div>
                                    <table className="table-balance">
                                        <thead>
                                            <tr>
                                                <th className="td_comp hidden_">1</th>
                                                <th className="td_comp red-text th">Light</th>
                                                <th className="td_comp red-text th">Medium</th>
                                                <th className="td_comp red-text th">Professional</th>
                                                <th className="td_comp red-text th">Personal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="td_comp_L">Объявления</td>
                                                <td className="td_comp bold_">
                                                    5
                                                </td>
                                                <td className="td_comp bold_">50</td>
                                                <td className="td_comp bold_">100</td>
                                                <td className="td_comp bold_">
                                                    <div className="flex_">
                                                         <span className="material-icons"
                                                               style={{color: '#848c8e'}}>
                                                            remove_circle_outline
                                                        </span>
                                                        <span className="margin_L_R_7 width-td">
                                                            5
                                                        </span>
                                                        <span className="material-icons"
                                                              style={{color: '#848c8e'}}>
                                                            control_point
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="td_comp_L">Анкеты</td>
                                                <td className="td_comp bold_">5</td>
                                                <td className="td_comp bold_">50</td>
                                                <td className="td_comp bold_">100</td>
                                                <td className="td_comp bold_ ">
                                                    <div className="flex_">
                                                         <span className="material-icons"
                                                               style={{color: '#848c8e'}} >
                                                            remove_circle_outline
                                                        </span>
                                                        <span className="margin_L_R_7 width-td">
                                                            15
                                                        </span>
                                                        <span className="material-icons"
                                                              style={{color: '#848c8e'}} >
                                                            control_point
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="td_comp_L">Цена</td>
                                                <td className="td_comp bold_">3000</td>
                                                <td className="td_comp bold_">5000</td>
                                                <td className="td_comp bold_">25000</td>
                                                <td className="td_comp bold_">50000</td>
                                            </tr>
                                            <tr>
                                                <td className="td_comp hidden_">2</td>
                                                <td className="td_comp">
                                                    <RedCheckbox
                                                        // checked={fullTime}
                                                        // onChange={fullTimeHandler}
                                                        value=""
                                                        disableRipple={true}
                                                        style={{ backgroundColor: 'transparent' }}
                                                    />
                                                </td>
                                                <td className="td_comp">
                                                    <RedCheckbox
                                                        // checked={fullTime}
                                                        // onChange={fullTimeHandler}
                                                        value=""
                                                        disableRipple={true}
                                                        style={{ backgroundColor: 'transparent' }}
                                                    />
                                                </td>
                                                <td className="td_comp">
                                                    <RedCheckbox
                                                        // checked={fullTime}
                                                        // onChange={fullTimeHandler}
                                                        value=""
                                                        disableRipple={true}
                                                        style={{ backgroundColor: 'transparent' }}
                                                    />
                                                </td>
                                                <td className="td_comp">
                                                    <RedCheckbox
                                                        // checked={fullTime}
                                                        // onChange={fullTimeHandler}
                                                        value=""
                                                        disableRipple={true}
                                                        style={{ backgroundColor: 'transparent' }}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="flex-between margin_B_2">
                                    <div className="flex_ this_link">
                                        <span className="material-icons" style={{color: '#f04d2d'}}>
                                            help_center
                                        </span>
                                        <span className="margin_L_R_7">
                                            Подробнее о тарифах
                                        </span>
                                    </div>

                                    <div className="flex_ this_link">
                                        <div className="bold_ red-text">
                                            Заказать счет
                                        </div>
                                        <div>
                                            <NavLink className="pay_by_card" to={'/pay_by_card'}>
                                                Оплатить картой
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="margin_B_2">
                                    <div className="bold_ margin_T_B  margin_B_2">
                                        Распределение баланса
                                    </div>
                                    <table className="table-balance">
                                        <thead>
                                        <tr>
                                            <th className="td_comp th left-al" >Имя</th>
                                            <th className="td_comp red-text th">Роль</th>
                                            <th className="td_comp red-text th">Объявления</th>
                                            <th className="td_comp red-text th">Анкета</th>
                                            <th className="td_comp red-text th">Общий баланс</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="td_comp_L">Рекрутеров И.Р.</td>
                                            <td className="td_comp bold_">Пользователь</td>
                                            <td className="td_comp bold_">
                                                <div className="flex_">
                                                         <span className="material-icons"
                                                               style={{color: '#848c8e'}}>
                                                            remove_circle_outline
                                                        </span>
                                                    <span className="margin_L_R_7 width-td">
                                                            5
                                                        </span>
                                                    <span className="material-icons"
                                                          style={{color: '#848c8e'}}>
                                                            control_point
                                                        </span>
                                                </div>
                                            </td>
                                            <td className="td_comp bold_">
                                                <div className="flex_">
                                                         <span className="material-icons"
                                                               style={{color: '#848c8e'}}>
                                                            remove_circle_outline
                                                        </span>
                                                    <span className="margin_L_R_7 width-td">
                                                            2
                                                        </span>
                                                    <span className="material-icons"
                                                          style={{color: '#848c8e'}}>
                                                            control_point
                                                        </span>
                                                </div>
                                            </td>
                                            <td className="td_comp bold_">
                                                <td className="td_comp">
                                                    <RedCheckbox
                                                        // checked={fullTime}
                                                        // onChange={fullTimeHandler}
                                                        value=""
                                                        disableRipple={true}
                                                        style={{ backgroundColor: 'transparent' }}
                                                    />
                                                </td>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="td_comp_L">Иванова Л.П.</td>
                                            <td className="td_comp bold_">Администратор</td>
                                            <td className="td_comp bold_">
                                                <div className="flex_">
                                                         <span className="material-icons"
                                                               style={{color: '#848c8e'}}>
                                                            remove_circle_outline
                                                        </span>
                                                    <span className="margin_L_R_7 width-td">
                                                            15
                                                        </span>
                                                    <span className="material-icons"
                                                          style={{color: '#848c8e'}}>
                                                            control_point
                                                        </span>
                                                </div>
                                            </td>
                                            <td className="td_comp bold_">
                                                <div className="flex_">
                                                         <span className="material-icons"
                                                               style={{color: '#848c8e'}}>
                                                            remove_circle_outline
                                                        </span>
                                                    <span className="margin_L_R_7 width-td">
                                                            6
                                                        </span>
                                                    <span className="material-icons"
                                                          style={{color: '#848c8e'}}>
                                                            control_point
                                                        </span>
                                                </div>
                                            </td>
                                            <td className="td_comp bold_">
                                                <td className="td_comp">
                                                    <RedCheckbox
                                                        // checked={fullTime}
                                                        // onChange={fullTimeHandler}
                                                        value=""
                                                        disableRipple={true}
                                                        style={{ backgroundColor: 'transparent' }}
                                                    />
                                                </td>
                                            </td>
                                        </tr>
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

