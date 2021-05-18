import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import CompanyPagePhotoPlace from "../companyPagePhotoPlace/CompanyPagePhotoPlace";
import CompanyPageContactsPlace from "../companyPageContacts/CompanyPageContactsPlace";
import CompanyBalanceComponent from "../companyBalanceComponent/CompanyBalanceComponent";
import {NavLink} from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import './styles2/CompanyPage.css'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


export default function CompanyDocuments() {

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

    // Данные о документах
    const [documentsData, setDocumentsData] = useState(
        [
            {
                id: 1,
                date: '25.01.2019',
                docType: 'Акт',
                ads: '15',
                profiles: '15',
                summa: '15 000. 00',
            },
            {
                id: 2,
                date: '25.01.2019',
                docType: 'Счет',
                ads: '15',
                profiles: '15',
                summa: '15 000. 00',
            },
            {
                id: 3,
                date: '12.01.2019',
                docType: 'Акт',
                ads: '20',
                profiles: '20',
                summa: '20 000. 00 ',
            },
            {
                id: 4,
                date: '12.01.2019',
                docType: 'Счет',
                ads: '20',
                profiles: '20',
                summa: '20 000. 00 ',
            },
        ]
    )


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
                                    Бухгалтерские документы
                                </div>
                            </div>
                            <div className="margin_L_R">
                                <NavLink to='/employer/personal-account' style={{color: '#505350'}}>
                                    <ClearIcon className="margin_T_B"/>
                                </NavLink>
                            </div>
                        </div>

                        <div className="margin_L_R ">
                            <div className="margin_B_2">
                                <table className="table-balance">
                                    <thead>
                                    <tr >
                                        <th className="align-l doc-th pad_b_40 c_red">
                                            Дата</th>
                                        <th className="align-c doc-th pad_b_40 c_red">
                                            Тип документа</th>
                                        <th className="align-c doc-th pad_b_40 c_red">
                                            Объявления</th>
                                        <th className="align-c doc-th pad_b_40 c_red">
                                            Анкеты</th>
                                        <th className="align-c doc-th pad_b_40 c_red">
                                            Сумма</th>
                                        <th className="align-c doc-th pad_b_40 c_red"/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {documentsData.map(doc =>
                                        <tr key={doc.id}>
                                            <td className="doc-td align-l pad_b_28">{doc.date}</td>
                                            <td className="doc-td align-c pad_b_28" >{doc.docType}</td>
                                            <td className="doc-td align-c pad_b_28">{doc.ads}</td>
                                            <td className="doc-td align-c pad_b_28">{doc.profiles}</td>
                                            <td className="doc-td align-c pad_b_28">{doc.summa} руб.</td>
                                            <td className="doc-td align-c pad_b_28">
                                                <div style={{cursor: 'pointer'}} >
                                                    <InsertDriveFileIcon
                                                        style={{color: "#F04D2D",}}/>
                                                </div>

                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="doc-th pad_b_10">
                                Акт сверки
                            </div>
                            <div className="doc-td pad_b_10" style={{color: '#525252'}}>
                                Дата
                            </div>
                            <div className="doc-th flex-only">
                               <input className="d-input"/>
                               <button className="f_14 m_left_38 red-button_ ">
                                   Сформировать
                               </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}