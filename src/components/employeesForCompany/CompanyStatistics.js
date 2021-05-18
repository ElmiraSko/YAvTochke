import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import CompanyPagePhotoPlace from "../companyPagePhotoPlace/CompanyPagePhotoPlace";
import CompanyPageContactsPlace from "../companyPageContacts/CompanyPageContactsPlace";
import CompanyBalanceComponent from "../companyBalanceComponent/CompanyBalanceComponent";
import {NavLink} from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import './styles2/CompanyPage.css'
import VerticalProgressBar from "../progressBar/VerticalProgressBar";

export default function CompanyStatistics() {
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

    // Статистика
    const staff =  {
        all: 24,
        got: 9,
        got_percent: 25,
        response: 15,
        response_percent: 20,
    }
    const candidates = {
        all: 110,
        got: 35,
        got_percent: 58,
        response: 75,
        response_percent: 74,
    }
    const responses = {
        all: 128,
        got: 47,
        got_percent: 0,
        response: 81,
        response_percent: 0,
    }
    const profile = {
        all: 293,
        got: 293,
        got_percent: 0,
        response: 0,
        response_percent: 0,
    }
    //==================================
    const february = {
        month: 'Февраль ',
        year: 2021,
        sum1: 225,
        sum2: 225,
        sum3: 225,
        sum4: '12:41:15',
        sum5: '12:41:15',
        sum6: 9,
    }
    const january = {
        month: 'Январь ',
        year: 2021,
        sum1: 243,
        sum2: 243,
        sum3: 243,
        sum4: '15:01:42',
        sum5: '15:01:42',
        sum6: 10,
    }
    const december = {
            month: 'Декабрь ',
            year: 2020,
            sum1: 312,
            sum2: 312,
            sum3: 312,
            sum4: '6:11:32',
            sum5: '6:11:32',
            sum6: 12,
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
                                    Статистика
                                </div>
                            </div>
                            <div className="margin_L_R">
                                <NavLink to='/employer/personal-account' style={{color: '#505350'}}>
                                    <ClearIcon className="margin_T_B"/>
                                </NavLink>
                            </div>
                        </div>

                        <div className="margin_L_R ">
                            <div className="margin_B_2 red-border">
                                <table className="table-balance pad_l_r ">
                                    <thead>
                                    <tr >
                                        <th className="align-c doc-th pad_b_40">Сотрудники</th>
                                        <th className="align-c doc-th pad_b_40">Кандидаты</th>
                                        <th className="align-c doc-th pad_b_40">Отклики</th>
                                        <th className="align-c doc-th pad_b_40">Анкеты</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className='td'>
                                            <div className="for_p_bar">
                                                <div >
                                                    <VerticalProgressBar value={staff}/>
                                                </div>
                                                <div className="table-st-all">
                                                    {staff.all}
                                                </div>
                                            </div>
                                        </td>
                                        <td className='td'>
                                            <div>
                                                <div>
                                                    <VerticalProgressBar value={candidates}/>
                                                </div>
                                                <div className="table-st-all">
                                                    {candidates.all}
                                                </div>
                                            </div>
                                        </td>
                                        <td className='td'>
                                            <div>
                                                <div>
                                                    <VerticalProgressBar value={responses}/>
                                                </div>
                                                <div className="table-st-all">
                                                    {responses.all}
                                                </div>
                                            </div>
                                        </td>
                                        <td className='td'>
                                            <div>
                                                <div>
                                                    <VerticalProgressBar value={profile}/>
                                                </div>
                                                <div className="table-st-all">
                                                    {profile.all}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>


                                <div className="underT flex-start">
                                    <div className="red_square"/>
                                    <span className="for_sq">
                                        Приобретенные анкеты
                                    </span>
                                </div>
                                <div className="underT flex-start ">
                                    <div className="pink_square"/>
                                    <span className="for_sq">
                                        Органические отклики
                                    </span>
                                </div>
                            </div>
                            <div className="margin_B_2">
                                <table className="table-balance">
                                    <thead>
                                    <tr >
                                        <th className="align-l doc-th pad_b_28 c_red width-200">
                                            Тип документа</th>
                                        <th className="align-c doc-th pad_b_28 c_red" >
                                            {february.month}{february.year}</th>
                                        <th className="align-c doc-th pad_b_28 c_red">
                                            {january.month}{january.year}</th>
                                        <th className="align-c doc-th pad_b_28 c_red">
                                            {december.month}{december.year}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="doc-td align-l ">
                                                Средняя стоимость отклика
                                            </td>
                                            <td className="doc-td align-c " >
                                                {february.sum1}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {january.sum1}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {december.sum1}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="doc-td align-l ">
                                                Средняя стоимость кандидата
                                            </td>
                                            <td className="doc-td align-c " >
                                                {february.sum2}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {january.sum2}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {december.sum2}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="doc-td align-l ">
                                                Средняя стоимость закрытия точки
                                            </td>
                                            <td className="doc-td align-c " >
                                                {february.sum3}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {january.sum3}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {december.sum3}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="doc-td align-l ">
                                                Средняя время до первого отклика
                                            </td>
                                            <td className="doc-td align-c " >
                                                {february.sum4}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {january.sum4}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {december.sum4}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="doc-td align-l 8">
                                                Среднее количество анкет на точку
                                            </td>
                                            <td className="doc-td align-c " >
                                                {february.sum5}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {january.sum5}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {december.sum5}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="doc-td align-l ">
                                                Средняя стоимость кандидата
                                            </td>
                                            <td className="doc-td align-c " >
                                                {february.sum6}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {january.sum6}
                                            </td>
                                            <td className="doc-td align-c ">
                                                {december.sum6}
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