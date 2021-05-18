import React, {useState} from "react";
import './styles2/EmployeesItem.css'
import LocationOnIcon from "@material-ui/icons/LocationOn";
import telegram2 from "../../img/telegram-grey.png";
import vk2 from "../../img/vk-grey.png";
import st from "../../img/s1.png"

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';


export default function EmployeesItem(props){

    const info = props.emplInf
    const contacts = props.contacts
    // надпись на кнопке, откликнулся соискатель или нет
    const [jobsButton, setJobsButton] = useState('Показать контакты')
    const [sent, setSent] = useState(false)

    // отображать звезду или нет
    const star = props.star

    // меняем стили
    function responseSent(sent) {
        return (sent ? 'sent-ok' : " ");
    }

    return(
        <div className="employeesItem-main"
             // id = {vacancy.id}
        >
            <div className="flex-between margin_L_R">

                <div className="description"
                    // onClick={() => showDetails(vacancy.id)}
                >
                    <div className="flex-start">
                        <h3 style={{margin: '5px 10px 0 0'}}
                            className="vacancy-title">{info.requiredPosition}</h3>
                        {star ==='yes' ?
                            <div>
                                {info.starStatus ?
                                    <StarIcon style={{color: '#F04D2D'}}/>
                                :
                                    <StarBorderIcon style={{color: '#505350'}}/>
                                }
                            </div> : ''}
                        {/*{info.showStar ==='yes' ? <div><StarIcon style={{color: '#F04D2D'}}/></div> : ''}*/}
                    </div>

                    <p  className="desc">
                        Текущая должность: {info.currentPosition}
                    </p>
                    <p className="c_red">
                        {info.work_type}
                    </p>
                    {/*<div className="flex-only f_14">*/}
                    {/*    <LocationOnIcon style={{width: '40px', height: '40px', color: '#f04d2d'}}/>*/}
                    {/*    <div style={{ paddingTop: '10px'}}> {info.atPoint} </div>*/}
                    {/*</div>*/}
                </div>
                <div  style={{textAlign: 'center', width: '25%'}}>
                    {contacts.showContact ? (
                    <div>
                        <p className="desc">
                            Тел: {contacts.phone}
                        </p>
                        <p className="desc">
                            E-mail: {contacts.email}
                        </p>
                        <p className="desc flex-only">
                            <img src={telegram2} style={{width: '20px', height: '20px',}} alt="Telegram"/>
                            <span style={{marginLeft: '5px', paddingTop: '2px'}} >
                                {contacts.telegram}
                            </span>
                        </p>
                        <p className="desc flex-only">
                            <img src={vk2} style={{width: '20px', height: '20px',}}  alt="Vk"/>
                            <span style={{marginLeft: '5px', paddingTop: '2px'}}>
                                 {contacts.vk}
                            </span>
                        </p>
                    </div>
                    ) : (
                        ''
                    )}
                </div>

                <div style={{textAlign: 'center', width: '24%'}}>
                    <div style={{borderRadius: '50%', }}>
                    {/* Нужно будет добавить альтернативу для фото, если фото нет  */}
                    <img src={props.photo}
                         alt="logo" style={{width: '4.0rem',
                        padding: "10px 0 10px 0", borderRadius: '50%',}}/>
                    </div>
                    <h4 id="cn">
                        {info.firstName} {info.lastName}
                    </h4>
                    {/*<button className={`show-cont-button ${responseSent(sent)} `}*/}
                    {/*        // onClick={respond}*/}
                    {/*> {jobsButton}</button>*/}
                </div>

            </div>
            <div className="flex-between margin_L_R">
                <div className="flex-only f_14">
                    <LocationOnIcon style={{width: '40px', height: '40px', color: '#f04d2d'}}/>
                    <div style={{ paddingTop: '10px'}}> {info.atPoint} </div>
                </div>

                <div style={{width: '24%', textAlign: 'center'}}>
                    {contacts.showContact ?
                        <button className="whiteButton "
                            // onClick={respond}
                        >
                            <div className="flex-start">
                                <span className="font-bold f_14 margin_T">Новый</span>
                                <img src={st} alt="arrow_drop_down"/>
                            </div>

                        </button>
                        :
                        <button className={`show-cont-button ${responseSent(sent)} `}
                            // onClick={respond}
                        > {jobsButton}</button>
                    }
                </div>
            </div>
        </div>
    )
}