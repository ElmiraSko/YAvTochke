import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import CompanyPagePhotoPlace from "../companyPagePhotoPlace/CompanyPagePhotoPlace";
import CompanyPageContactsPlace from "../companyPageContacts/CompanyPageContactsPlace";
import './styles2/CompanyBalance.css'
import '../forWorker/styles1/WorkerProfile.css'
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import ClearIcon from '@material-ui/icons/Clear';
import CompanyBalanceComponent from "../companyBalanceComponent/CompanyBalanceComponent";
import plus from '../../img/plus.png'
import minus from '../../img/minus.png'

export default function CompanyBalance() {

    // получили название компании
    const[companyName, setCompanyName] = useState('OOO "Хорошие люди"')
    // персональный выбор: количество объявлений и анкет
    const[personalAds, setPersonalAds] = useState(0)
    const[personalProfiles, setPersonalProfiles] = useState(0)
    const[personalCost, setPersonalCost] = useState(0)
    // стоимость объявлений и анкет
    let adCost = 500
    let profileCost = 1000

    // получили процент заполненности профиля
    const progressValue = '65'
    const ads = '5'
    const profiles = '6'

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

    // увеличить количество объявлений
    function incrementAds() {
        setPersonalAds((prev) => {return prev + 1})
    }
    // уменьшить количество объявлений
    function decrementAds() {
        if (personalAds > 0) {
            setPersonalAds(prev => prev - 1)
        }
    }
    // увеличить количество анкет
    function incrementProfiles() {
        setPersonalProfiles((prev) => {return prev + 1})
    }
    // уменьшить количество анкет
    function decrementProfiles() {
        if (personalProfiles > 0) {
            setPersonalProfiles(prev => prev - 1)
        }
    }
    function calculateTheCost() {
        let personCost = personalAds*adCost + personalProfiles*profileCost
        setPersonalCost(personCost)
    }
    // при изменении количества объявлений и вакансий происходит пересчет стоимости
    useEffect(() => {
        calculateTheCost()
    }, [personalAds, personalProfiles])

    let source = document.referrer // получили адрес с которого перешли, полный путь
    console.log(source)
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
                                    <div className="red-text this_link f_14">
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
                                                <td className="td_comp bold_ f_16">5 </td>
                                                <td className="td_comp bold_ f_16">50</td>
                                                <td className="td_comp bold_ f_16" >100</td>
                                                <td className="td_comp bold_ f_16">
                                                    <div className="flex_">
                                                        <div className="c-b-row" onClick={decrementAds}>
                                                            <img src={minus} alt="Minus"
                                                                 className="plus-minus" />
                                                        </div>
                                                        <span className="margin_L_R_7 width-td margin_T">
                                                            {personalAds}
                                                        </span>
                                                        <div className="c-b-row" onClick={incrementAds}>
                                                            <img src={plus} alt="Plus"
                                                                 className="plus-minus" />
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="td_comp_L">Анкеты</td>
                                                <td className="td_comp bold_ f_16">5</td>
                                                <td className="td_comp bold_ f_16">50</td>
                                                <td className="td_comp bold_ f_16">100</td>
                                                <td className="td_comp bold_ f_16">
                                                    <div className="flex_">
                                                        {/* <span className="material-icons"*/}
                                                        {/*       style={{color: '#848c8e',*/}
                                                        {/*           cursor: 'pointer', }} >*/}
                                                        {/*    remove_circle_outline*/}
                                                        {/*</span>*/}
                                                        <div className="c-b-row" onClick={decrementProfiles}>
                                                            <img src={minus} alt="Minus"
                                                                 className="plus-minus" />
                                                        </div>
                                                        <span className="margin_L_R_7 width-td margin_T">
                                                            {personalProfiles}
                                                        </span>
                                                        {/*<span className="material-icons"*/}
                                                        {/*      style={{color: '#848c8e',*/}
                                                        {/*          cursor: 'pointer', }} >*/}
                                                        {/*    control_point*/}
                                                        {/*</span>*/}
                                                        <div className="c-b-row" onClick={incrementProfiles}>
                                                            <img src={plus} alt="Plus"
                                                                 className="plus-minus" />
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="td_comp_L">Цена</td>
                                                <td className="td_comp bold_ f_16">3000</td>
                                                <td className="td_comp bold_ f_16">5000</td>
                                                <td className="td_comp bold_ f_16">25000</td>
                                                <td className="td_comp bold_ f_16">{personalCost}</td>
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
                                        <div className="bold_ red-text margin_L_R f_14 padding_T">
                                            Заказать счет
                                        </div>
                                        <div>
                                            <NavLink className="pay_by_card f_14" to={'/pay_by_card'}>
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
                                        <tr >
                                            <th className="td_comp th left-al f_14" >Имя</th>
                                            <th className="td_comp red-text th f_14">Роль</th>
                                            <th className="td_comp red-text th f_14">Объявления</th>
                                            <th className="td_comp red-text th f_14">Анкета</th>
                                            <th className="td_comp red-text th f_14">Общий баланс</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="td_comp_L">Рекрутеров И.Р.</td>
                                            <td className="td_comp ">Пользователь</td>
                                            <td className="td_comp bold_">
                                                <div className="flex_ f_16">
                                                    <div className="c-b-row">
                                                        <img src={minus} alt="Minus"
                                                             className="plus-minus" />
                                                    </div>
                                                    <span className="margin_L_R_7 width-td red-text">
                                                            5
                                                    </span>
                                                    <div className="c-b-row">
                                                        <img src={plus} alt="Plus"
                                                             className="plus-minus" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="td_comp bold_">
                                                <div className="flex_ f_16">
                                                    <div className="c-b-row">

                                                    </div>
                                                    <img src={minus} alt="Minus"
                                                         className="plus-minus" />
                                                    <span className="margin_L_R_7 width-td red-text">
                                                            2
                                                    </span>
                                                    <div className="c-b-row">

                                                    </div>
                                                    <img src={plus} alt="Plus"
                                                         className="plus-minus" />
                                                </div>
                                            </td>
                                            <td className="td_comp bold_">
                                                <RedCheckbox
                                                    // checked={fullTime}
                                                    // onChange={fullTimeHandler}
                                                    value=""
                                                    disableRipple={true}
                                                    style={{ backgroundColor: 'transparent' }}
                                                />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="td_comp_L">Иванова Л.П.</td>
                                            <td className="td_comp ">Администратор</td>
                                            <td className="td_comp bold_">
                                                <div className="flex_ f_16">
                                                    <div className="c-b-row">
                                                        <img src={minus} alt="Minus"
                                                             className="plus-minus" />
                                                    </div>
                                                    <span className="margin_L_R_7 width-td red-text ">
                                                            15
                                                    </span>
                                                    <div className="c-b-row">
                                                        <img src={plus} alt="Plus"
                                                             className="plus-minus" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="td_comp bold_ ">
                                                <div className="flex_  f_16">
                                                    <div className="c-b-row">
                                                        <img src={minus} alt="Minus"
                                                             className="plus-minus" />
                                                    </div>
                                                    <span className="margin_L_R_7 width-td red-text ">
                                                            6
                                                    </span>
                                                    <div className="c-b-row">
                                                        <img src={plus} alt="Plus"
                                                             className="plus-minus" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="td_comp bold_">
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

                            </div>

                </div>



                </div>

            </Container>
        </div>
    )
}

