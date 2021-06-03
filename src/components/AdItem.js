import React, {useContext, } from 'react';
import './styles/AdItem.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Context from "./Context";

export default function AdItem(props) {
    // Контекст
    const {setSelectedVacancyId} = useContext(Context)

    // записали в переменную vacancy объект из props - vacancy - все вакансиии (json)
    const vacancy = props.vacancy

    // меняем стили: sent - состояние - отправлен отклик(true) или нет(false)
    function responseSent(sent) {
        return (sent ? 'sent-ok' : " ");
    }
    // откликнуться на вакансию (использовала, когда для значения
    // кнопки использовала стейт - sent (первоначальный вариант). Переделала эту функцию,
    // получая значение через сведения самой вакансии
    // function respond() {
    //     if (user===null) {
    //         window.location.href="/auth/employees"
    //     } else {
    //         setSent(true)
    //         setCancel(false)
    //         setJobsButton("Отклик отправлен")
    //     }
    // }

    function showDetails(item) {
        setSelectedVacancyId(item)
        window.location.href="/vacancy-details"
    }

    return(
            <div className="adItem-main" id = {vacancy.id}>
                <div style={{margin: "0px 20px", }} className="flex-between">

                    <div onClick={() => showDetails(vacancy.id)} className="description-area" >
                        <h3 className="vacancy-title">
                            {vacancy.title}
                        </h3>
                        <strong className="vacancy-price">
                            {vacancy.price} {vacancy.unit_of_time}
                        </strong>
                        <p  className="desc">
                            {vacancy.desc}
                        </p>
                    </div>

                    <div style={{textAlign: 'center', }}>
                        <img src={vacancy.imgUrl} alt="logo" style={{width: '4.0rem',
                                padding: "10px 0 10px 0", }}/>
                        <h4 id="cn">
                            {vacancy.companyName}
                        </h4>
                    </div>
                </div>

                <div style={{margin: "0px 20px 10px 20px"}} className="flex-between">
                    <div className="flex-only">
                        <LocationOnIcon style={{width: '40px', height: '40px', color: '#f04d2d'}}/>
                        <div style={{ paddingTop: '10px'}}> {vacancy.point} </div>
                    </div>
                    <div className="flex-center" >
                        <div hidden={vacancy.response_viewed}>
                            <button
                                // className={`sent-button ${responseSent(sent)} `}
                                className={`sent-button ${responseSent(vacancy.is_respond)} `}
                                    // onClick={() => respond()}
                                onClick={() => props.respondHand(vacancy.id)}
                            > {vacancy.is_respond ? 'Отклик отправлен' : 'Откликнуться'}</button>
                        </div>
                        <div hidden={vacancy.response_viewed}>
                            <div hidden={!vacancy.is_respond}>
                                <button className="cancel"
                                        onClick={() => props.cancelHandler(vacancy.id)}
                                > Отмена</button>
                            </div>
                        </div>
                        <div hidden={!vacancy.response_viewed}>
                            <div hidden={!vacancy.is_respond}>
                                <button className="sent-button sent-ok"
                                > отклик просмотрен</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}