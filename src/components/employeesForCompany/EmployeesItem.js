import React, {useState} from "react";
import './styles2/EmployeesItem.css'
import LocationOnIcon from "@material-ui/icons/LocationOn";


export default function EmployeesItem(props){
    const info = props.emplInf
    // надпись на кнопке, откликнулся соискатель или нет
    const [jobsButton, setJobsButton] = useState('Показать контакты')
    const [sent, setSent] = useState(false)

    // меняем стили
    function responseSent(sent) {
        return (sent ? 'sent-ok' : " ");
    }

    return(
        <div className="employeesItem-main"
             // id = {vacancy.id}
        >
            <div style={{display: "flex", justifyContent: "space-between", margin: "0px 20px"}} >

                <div
                    // onClick={() => showDetails(vacancy.id)}
                    className="description" >
                    <h3 className="vacancy-title">
                        {info.requiredPosition}
                    </h3>
                    <p  className="desc">
                        Текущая должность: {info.currentPosition}
                    </p>
                    <p className="red-text">
                        {info.work_type}
                    </p>
                    <div style={{display: "flex",}}>
                        <LocationOnIcon style={{width: '40px', height: '40px', color: '#f04d2d'}}/>
                        <div style={{ paddingTop: '10px'}}> {info.atPoint} </div>
                    </div>
                </div>

                <div style={{textAlign: 'center', width: '30%'}}>
                    <div style={{borderRadius: '50%', }}>
                    {/* Нужно будет добавить альтернативу для фото, если фото нет  */}
                    <img src={props.photo}
                         alt="logo" style={{width: '4.0rem',
                        padding: "10px 0 10px 0", borderRadius: '50%',}}/>
                    </div>
                    <h4 id="cn">
                        {info.firstName} {info.lastName}
                    </h4>
                    <button className={`show-cont-button ${responseSent(sent)} `}
                            // onClick={respond}
                    > {jobsButton}</button>
                </div>

            </div>
        </div>
    )
}