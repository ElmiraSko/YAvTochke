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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from "@material-ui/core/Fade";
import SelectProfiles from "./SelectProfiles";
import ErrorIcon from '@material-ui/icons/Error';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.1)',
        
    },
    paper: {
        backgroundColor: '#ffffff',
        border: '1px solid #ffffff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '940px',
        height: '540px'
    },
}));

export default function SelectedVacancy() {

    //флаг - показывать псевдо элемент вакансии(true) или нет(false)
    const showPsevdo = true
    //Достаем id адреса из url:
    let urlVar = window.location.href;
    let items = urlVar.split('='); // разделили на две части по разделителю =, получили массив
    let addressId = Number(items[1]);
    // console.log(addressId)
    // Информация по конкретному адресу
    const [selectedAddress, setSelectedAddress] = useState({})

    // необходимо разобраться с количеством отображаемых откликов по данному адресу точки
    const plus2= "+2"
    // показывать звезду на анкете соискателя, передаем соответствующую метку
    const showStar = "yes"
    // const starStatus = "open"

    //=============================
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //=================================

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
                            <div className="th-select flex-center  ">
                                <div className="padd-t">Сотрудники</div>
                                <div>
                                    <ExpandMoreIcon/>
                                </div>
                            </div>
                        </td>
                        <td className="sel-table-th">
                            <div className="th-select flex-center">
                                <div className="padd-t">Кандидаты</div>
                                <div >
                                    <ExpandMoreIcon/>
                                </div>
                            </div>
                        </td>
                        <td className="sel-table-th">
                            <div className="th-select flex-center">
                                <div className="padd-t">Отклики</div>
                                <div>
                                    <ExpandMoreIcon/>
                                </div>
                            </div>
                        </td>
                        <td className="sel-table-th">
                            <div className="th-select flex-center">
                                <div className="padd-t">Профили</div>
                                <div >
                                    <ExpandMoreIcon/>
                                </div>
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
                                <td className="sel-vac-td ">
                                    <div className="flex-center">
                                        <span className="margin_T m_r">
                                            {selectedAddress[0].otckliki}
                                        </span>
                                        <div style={{width: '24px', height: '24px',
                                            background: '#F04D2D', borderRadius: '50%'}} >
                                            <div className="margin_T c_white">
                                                {plus2}
                                            </div>

                                        </div>
                                    </div>
                                </td>
                                <td className="sel-vac-td color-FFAB9A border-5">
                                    {selectedAddress[0].profiles}
                                </td>
                                <td className="sel-vac-td2 border-0">
                                    <button className="red-button_" onClick={handleOpen}>Закрыть точку</button>
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

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className="font-20-bold align-c marg-b-15 color-0C1618 text-up">
                            закрытие точки
                        </div>
                        <div className="align-c marg-b-15 color-0C1618 font-bold ">
                            Выберите исполнителя из списка кандидатов
                        </div>
                        <SelectProfiles
                            emplInf = {EmplInfo[0]}
                            photo={Photo1}
                            contacts={workerContacts[0]}
                        />
                        <SelectProfiles
                            emplInf = {EmplInfo[1]}
                            photo={Photo2}
                            contacts={workerContacts[0]}
                        />
                        <div className="flex-between text-up font-10-b"
                             style={{width: '502px', margin: 'auto', color: '#818181', }}>
                            <p>Нашли другого исполнителя</p>
                            <p>Другая причина</p>
                        </div>
                        <div className="marg-b-15">
                            <table className="sel-vac-table">
                                <tbody className="f_14">
                                <tr>
                                    <td className="sel-vac-td1 ">
                                        {selectedAddress[0] ?
                                            <div className="noLink-decoration">
                                                {selectedAddress[0].address}
                                            </div> : ''}

                                    </td>
                                    <td className="sel-vac-td sel-td-bg">
                                        {selectedAddress[0] ? selectedAddress[0].empl : ''}
                                    </td>
                                    <td className="sel-vac-td">
                                        {selectedAddress[0] ? selectedAddress[0].cond : ''}
                                    </td>
                                    <td className="sel-vac-td sel-td-bg">
                                        <div className="flex-center">
                                        <span className="margin_T m_r">
                                            {selectedAddress[0] ? selectedAddress[0].otckliki : ''}
                                        </span>
                                            <div style={{width: '24px', height: '24px',
                                                background: '#F04D2D', borderRadius: '50%'}} >
                                                <div className="margin_T c_white">
                                                    {plus2}
                                                </div>

                                            </div>
                                        </div>
                                    </td>
                                    <td className="sel-vac-td border-5">
                                        {selectedAddress[0] ? selectedAddress[0].profiles : ''}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="align-c c_red">
                            <div className="flex-center">
                                <ErrorIcon style={{color: '#F04D2D'}} />
                                <span className="align-l margin_L_R_7">
                                После назначения исполнителя указаннай точка<br/>
                                по указанному адресу станет неактивна.
                            </span>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>

            <div>
                <div>
                    <EmployeesItem
                        emplInf = {EmplInfo[0]}
                        photo={Photo1}
                        contacts={workerContacts[0]}
                        star={showStar}
                        // status={starStatus}
                    />
                </div>
                <div>
                    <EmployeesItem
                        emplInf = {EmplInfo[1]}
                        photo={Photo2}
                        contacts={workerContacts[1]}
                        star={showStar}
                        // status={starStatus}
                    />
                </div>
            </div>

        </Container>
    )
}