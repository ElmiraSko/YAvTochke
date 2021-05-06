import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import AdItemForCompany from "../AdItemForCompany";
import Ad from "./VacanciesText";
import tableData from './VacancyAddressArray'
import './styles2/SelectedVacancy.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {Link} from "react-router-dom";

export default function SelectedVacancy() {
    //флаг - показывать псевдо элемент вакансии(true) или нет(false)
    const showPsevdo = true
    //Достаем id вакансии из url:
    let urlVar = window.location.href;
    let items = urlVar.split('='); // разделили на две части по разделителю =, получили массив
    let vacancyId = Number(items[1]);
    // Статус кнопки, нажата кнопка или отжата
    const [firstButtonActive, setFirstButtonActive] = useState(true)
    const [lastButtonActive, setLastButtonActive] = useState(false)
    // переменная showOtkliki, для содержания массива из отображаемых откликов
    // изначально присваиваем пустой массив
    const [showOtkliki, setShowOtkliki] = useState([])
    //search поле
    const [searchText, setSearchText] = useState("")
    // moreIcon  and lessIcon
    const [moreIconStaff, setMoreIconStaff] = useState(false)
    const [lessIconStaff, setLessIconStaff] = useState(true)
    const [moreIconCandidates, setMoreIconCandidates] = useState(false)
    const [lessIconCandidates, setLessIconCandidates] = useState(true)
    const [moreIconResponses, setMoreIconResponses] = useState(false)
    const [lessIconResponses, setLessIconResponses] = useState(true)
    const [moreIconProfiles, setMoreIconProfiles] = useState(false)
    const [lessIconProfiles, setLessIconProfiles] = useState(true)

    // предполагается, что tableData - это все отклики по данной вакансии

    // Получение новых откликов
    function getNewOtkliki() {
        if (tableData) { // если не пустой массив
            let newOtk = tableData.filter((item) => (item.otkStatus==='new'))
            setShowOtkliki(newOtk)
            }
        }
    useEffect(() => {
        doActiveFirstButton()
    }, [])


    // Активация кнопки "Новые отклики"
    function doActiveFirstButton() {
        setFirstButtonActive(true)
        setLastButtonActive(false)
        getNewOtkliki()
    }
    // Активация кнопки "Все отклики"
    function doActiveLastButton() {
        setFirstButtonActive(false)
        setLastButtonActive(true)
        setShowOtkliki(tableData)
    }
    // Поисковое поле - инпут
    function search(event) {
        setSearchText(event.target.value)
    }
    // Сортировка по возрастанию и убыванию:
    function staffMoreSort() {
        setMoreIconStaff(true)
        setLessIconStaff(false)
    }
    function staffLessSort() {
        setMoreIconStaff(false)
        setLessIconStaff(true)
    }
    function candidatesMoreSort() {
        setMoreIconCandidates(true)
        setLessIconCandidates(false)
    }
    function candidatesLessSort() {
        setMoreIconCandidates(false)
        setLessIconCandidates(true)
    }
    function responsesMoreSort() {
        setMoreIconResponses(true)
        setLessIconResponses(false)
    }
    function responsesLessSort() {
        setMoreIconResponses(false)
        setLessIconResponses(true)
    }
    function profilesMoreSort() {
        setMoreIconProfiles(true)
        setLessIconProfiles(false)
    }
    function profilesLessSort() {
        setMoreIconProfiles(false)
        setLessIconProfiles(true)
    }

    return(
        <Container maxWidth="lg">
            <div style={{ marginTop: '30px'}}>
                <AdItemForCompany vacancy = {Ad[0]} show={showPsevdo}/>
            </div>

            <div style={{ marginBottom: "30px", marginTop: '30px',
                textAlign: "center", width: '740px', margin: 'auto'}}>
                <div className="flex-start">
                    <input className="red-input padding-left-7"
                           onChange={search}
                           value={searchText}
                           placeholder="Поиск по адресу"
                    />
                    <div className="two_buttons_wr">
                        <button className={`${firstButtonActive ? 'active_button' : 'no_active'}`}
                                onClick={doActiveFirstButton}>
                            Новые отклики
                        </button>
                        <button className={`${lastButtonActive ? 'active_button' : 'no_active'}`}
                                onClick={doActiveLastButton}>
                            Все отклики
                        </button>
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
                            <div className="th-select flex-center ">
                                <div className="padd-t">Сотрудники</div>
                                <div hidden={moreIconStaff}
                                      className="this_link"
                                      onClick={staffMoreSort}
                                >
                                    <ExpandMoreIcon/>
                                </div>
                                <div hidden={lessIconStaff}
                                      className="this_link"
                                      onClick={staffLessSort}
                                >
                                    <ExpandLessIcon/>
                                </div>
                            </div>
                        </td>
                        <td className="sel-table-th">
                            <div className="th-select flex-center ">
                                <div className="padd-t">Кандидаты</div>
                                <div hidden={moreIconCandidates}
                                     className="this_link"
                                     onClick={candidatesMoreSort}
                                >
                                    <ExpandMoreIcon/>
                                </div>
                                <div hidden={lessIconCandidates}
                                     className="this_link"
                                     onClick={candidatesLessSort}
                                >
                                    <ExpandLessIcon/>
                                </div>
                            </div>
                        </td>
                        <td className="sel-table-th">
                            <div className="th-select flex-center ">
                                <div className="padd-t">Отклики</div>
                                <div hidden={moreIconResponses}
                                     className="this_link"
                                     onClick={responsesMoreSort}
                                >
                                    <ExpandMoreIcon/>
                                </div>
                                <div hidden={lessIconResponses}
                                     className="this_link"
                                     onClick={responsesLessSort}
                                >
                                    <ExpandLessIcon/>
                                </div>
                            </div>
                        </td>
                        <td className="sel-table-th">
                            <div className="th-select flex-center ">
                                <div className="padd-t">Профили</div>
                                <div hidden={moreIconProfiles}
                                     className="this_link"
                                     onClick={profilesMoreSort}
                                >
                                    <ExpandMoreIcon/>
                                </div>
                                <div hidden={lessIconProfiles}
                                     className="this_link"
                                     onClick={profilesLessSort}
                                >
                                    <ExpandLessIcon/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </thead>
                    <tbody className="f_14">
                    {showOtkliki.length>0 ? (showOtkliki.map(data =>
                        <tr key={data.id}>
                            <td className="sel-vac-td1 " id="address">
                                <Link to={'/selected-vacancy/address?address_id=' + data.id}
                                      className="noLink-decoration">
                                    {data.address}
                                </Link>
                                <span className="help-text">Посмотреть детали</span>
                            </td>
                            <td className="sel-vac-td sel-td-bg">{data.empl}</td>
                            <td className="sel-vac-td">{data.cond}</td>
                            <td className="sel-vac-td sel-td-bg">{data.otckliki}</td>
                            <td className="sel-vac-td border-5">{data.profiles}</td>
                        </tr>
                    )) :
                        (<tr>
                        <td colSpan="5" style={{textAlign: 'center'}}>
                            Нет новых откликов
                      </td>
                     </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    )
}