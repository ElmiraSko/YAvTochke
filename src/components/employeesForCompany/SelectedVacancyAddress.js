import React, {useEffect, useState} from 'react';
import address from './VacancyAddressArray'
import AdItemForCompany from "../AdItemForCompany";
import Ad from "./VacanciesText";
import './styles2/SelectedVacancy.css'
import Container from "@material-ui/core/Container";
import {NavLink} from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import EmployeesItem from "./EmployeesItem";
import EmplInfo from "./EmployeesInfo";
import Photo2 from "../../img/worker2.jpg";
import Photo1 from "../../img/worker1.jpg";

export default function SelectedVacancy() {

    //флаг - показывать псевдо элемент вакансии(true) или нет(false)
    const showPsevdo = true
    //Достаем id адреса из url:
    let urlVar = window.location.href;
    let items = urlVar.split('='); // разделили на две части по разделителю =, получили массив
    let addressId = Number(items[1]);
    console.log(addressId)
    // Информация по конкретному адресу
    const [selectedAddress, setSelectedAddress] = useState({})

    // Временное решение для отображения контактов, нужно подумать
    const workerContacts = [
        {
            showContact: true,
            phone: "8 (960) 415-12-12",
            email: 'Stepan@mail.ru',
            telegram: '@Stepan100500',
            vk: 'vk.com/Stepan',
        },
        {
            showContact: false,
            phone: "8 (960) 415-12-12",
            email: 'Ivan@mail.ru',
            telegram: '@Ivan100500',
            vk: 'vk.com/ivanich',
        },
    ]

    function getAddressById(id) {
        if(address) {
            const addressItem = address.filter((item) => (item.id===id))
            setSelectedAddress(addressItem)
        }
    }
    useEffect(() => {
        getAddressById(addressId)
    }, [])
    console.log(selectedAddress)

    return(
        <Container maxWidth="lg">
            <div className="flex-between">
                <div className="margin_L_R">
                    <div className="hidden_">
                        text
                    </div>
                </div>
                <div>
                    <div className="hidden_">
                        text
                    </div>
                </div>
                <div className="margin_L_R">
                    <NavLink to='/selected-vacancy' style={{color: '#505350'}}>
                        <ClearIcon className="margin_T_B"/>
                    </NavLink>
                </div>
            </div>
            <div>
                <AdItemForCompany vacancy = {Ad[0]} show={showPsevdo}/>
            </div>

            <div style={{marginBottom: '70px'}}>
                <table className="sel-vac-table2">
                    <thead>
                    <tr>
                        <td className='filter'>
                            Фильтры:
                        </td>
                        <td className="sel-table-th">
                            <div className="th-select ">
                                <div className="padd-t">Сотрудники</div>
                            </div>
                        </td>
                        <td className="sel-table-th">
                            <div className="th-select">
                                <div className="padd-t">Кандидаты</div>
                            </div>
                        </td>
                        <td className="sel-table-th">
                            <div className="th-select">
                                <div className="padd-t">Отклики</div>
                            </div>
                        </td>
                        <td className="sel-table-th">
                            <div className="th-select">
                                <div className="padd-t">Профили</div>
                            </div>
                        </td>
                        <td className="sel-table-th">
                            <div className="hidden_">
                                <div className="padd-t">text</div>
                            </div>
                        </td>
                    </tr>
                    </thead>
                    <tbody className="f_14">
                    {selectedAddress[0] ? (<tr>
                                <td className="sel-vac-td1 ">
                                    <div className="noLink-decoration">
                                        {selectedAddress[0].address}
                                    </div>
                                </td>
                                <td className="sel-vac-td">{selectedAddress[0].empl}</td>
                                <td className="sel-vac-td">{selectedAddress[0].cond}</td>
                                <td className="sel-vac-td">{selectedAddress[0].otckliki}</td>
                                <td className="sel-vac-td color-FFAB9A border-5">
                                    {selectedAddress[0].profiles}
                                </td>
                                <td className="sel-vac-td2 border-0">
                                    <button className="red-button_">Закрыть точку</button>
                                </td>
                            </tr>
                        ):
                        (<tr>
                            <td colSpan="5" style={{textAlign: 'center'}}>
                                Нет новых откликов
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
            <div>
                <div>
                    <EmployeesItem emplInf = {EmplInfo[0]} photo={Photo2} contacts={workerContacts[0]}/>
                </div>
                <div>
                    <EmployeesItem  emplInf = {EmplInfo[1]} photo={Photo1} contacts={workerContacts[1]}/>
                </div>
            </div>
        </Container>
    )
}