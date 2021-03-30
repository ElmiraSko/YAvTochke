import React, {useContext, useState} from 'react';
import creon from "../img/creon-logo-1.png";
import './styles/AdItem.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Context from "./Context";

export default function AdItem(props) {
    // Контекст
    const {user, setSelectedVacancyId} = useContext(Context)
    // надпись на кнопке, откликнулся соискатель или нет
    const [jobsButton, setJobsButton] = useState('Откликнуться')
    const [sent, setSent] = useState(false)
    // записали в переменную vacancy объект из props - vacancy - данные по вакансии из json
    const vacancy = props.vacancy

    // меняем стили
    function responseSent(sent) {
        return (sent ? 'sent-ok' : " ");
    }
    function respond() {
        if (user===null) {
            window.location.href="/auth/employees"
        } else {
            setSent(true)
            setJobsButton("Отклик отправлен")
        }
    }
    function showDetails(item) {
        setSelectedVacancyId(item)
        window.location.href="/vacancy-details"
    }

    return(
            <div className="adItem-main" id = {vacancy.id}>
                <div style={{display: "flex", justifyContent: "space-between", margin: "0px 20px"}} >

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
                        <div style={{display: "flex",}}>
                            <LocationOnIcon style={{width: '40px', height: '40px', color: '#f04d2d'}}/>
                            <div style={{ paddingTop: '10px'}}> {vacancy.point} </div>
                        </div>
                    </div>

                    <div style={{textAlign: 'center', }}>
                        {/*<div>*/}
                           {/*<Brightness1Icon style={{width: '70px', height: '70px', color: '#848c8e', }}/>*/}
                            <img src={vacancy.imgUrl}
                                 alt="logo" style={{width: '4.0rem',
                                padding: "10px 0 10px 0", }}/>
                        {/*</div>*/}
                        <h4 id="cn">
                            {vacancy.companyName}
                        </h4>
                        <button className={`sent-button ${responseSent(sent)} `}
                                onClick={respond}
                        > {jobsButton}</button>
                    </div>

                </div>
            </div>
    )
}