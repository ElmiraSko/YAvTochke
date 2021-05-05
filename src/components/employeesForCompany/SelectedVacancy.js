import React from 'react';
import Container from "@material-ui/core/Container";
import AdItemForCompany from "../AdItemForCompany";
import Ad from "./VacanciesText";
import './styles2/SelectedVacancy.css'

export default function SelectedVacancy() {
    //флаг - показывать псевдо элемент вакансии(true) или нет(false)
    const showPsevdo = true

    const tableData = [
        {
            id: 1,
            address: 'г. Москва, Новокосинская, 14А',
            empl: 'нет',
            cond: '1',
            otckliki: '6',
            profiles: '14',
        },
        {
            id: 2,
            address: 'г. Москва, Арбат, 21',
            empl: 'нет',
            cond: '2',
            otckliki: '2',
            profiles: '12',
        },
        {
            id: 3,
            address: 'г. Москва, Салтыковская, 72',
            empl: 'нет',
            cond: '0',
            otckliki: '1',
            profiles: '4',
        },
        {
            id: 4,
            address: 'г. Москва, Батурина, 13',
            empl: 'нет',
            cond: '0',
            otckliki: '1',
            profiles: '11',
        },
        {
            id: 5,
            address: 'г. Москва, Батурина, 18',
            empl: 'нет',
            cond: '1',
            otckliki: '+6',
            profiles: '9',
        },
        {
            id: 6,
            address: 'г. Москва,  Металлургов, 54',
            empl: 'нет',
            cond: '1',
            otckliki: '+6',
            profiles: '8',
        },
        {
            id: 7,
            address: 'г. Москва,  Вальдэса, 49',
            empl: 'нет',
            cond: '1',
            otckliki: '6',
            profiles: '14',
        },
        {
            id: 8,
            address: 'г. Москва,  Ленина, 81',
            empl: 'есть',
            cond: '0',
            otckliki: '+6',
            profiles: '7',
        },
        {
            id: 9,
            address: 'г. Москва,  Молокова, 35',
            empl: 'есть',
            cond: '1',
            otckliki: '+6',
            profiles: '5',
        },
        {
            id: 10,
            address: 'г. Москва,  Вальдэса, 49',
            empl: 'есть',
            cond: '0',
            otckliki: '+6',
            profiles: '10',
        },
    ]


    return(
        <Container maxWidth="lg">
            <div style={{ marginTop: '30px'}}>
                <AdItemForCompany vacancy = {Ad[0]} show={showPsevdo}/>
            </div>

            <div style={{ marginBottom: "30px", marginTop: '30px',
                textAlign: "center", width: '700px', margin: 'auto'}}>
                <div className="flex-start">
                    <input className="red-input"/>

                    <div>
                        <div className="dd2">
                            <progress value="50" max="100"
                            style={{width: '34px'}}>А</progress>
                            <div className="dd">
                                <span style={{position: 'relative',   left: '70px',
                                    top: '-20px',  color: '#111106',}}>
                                    Новые отклики
                                </span>
                            </div>
                            <div className="dd">
                                <span style={{position: 'relative',  left: '200px',top: '-20px',
                                    color: '#080811', margin: 'auto'}}>
                                    Все отклики
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{marginBottom: '70px'}}>
                <table className="sel-vac-table">
                    <thead>
                    <tr>
                        <td className='filter'>
                            Фильтры:
                        </td>
                        <td className="sel-table-th">
                            <select className="th-select ">
                                <option>Сотрудники</option>
                            </select>
                        </td>
                        <td className="sel-table-th">
                            <select className="th-select ">
                                <option>Кандидаты</option>
                            </select>
                        </td>
                        <td className="sel-table-th">
                            <select className="th-select ">
                                <option>Отклики</option>
                            </select>
                        </td>
                        <td className="sel-table-th">
                            <select className="th-select ">
                                <option>Профили</option>
                            </select>
                        </td>
                    </tr>
                    </thead>
                    <tbody className="f_14">
                    {tableData.map(data =>
                        <tr key={data.id}>
                            <td className="sel-vac-td1">
                                {data.address}
                            </td>
                            <td className="sel-vac-td sel-td-bg">{data.empl}</td>
                            <td className="sel-vac-td">{data.cond}</td>
                            <td className="sel-vac-td sel-td-bg">{data.otckliki}</td>
                            <td className="sel-vac-td border-5">{data.profiles}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </Container>
    )
}