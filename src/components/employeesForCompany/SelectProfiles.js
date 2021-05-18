import React, {useEffect, useState} from 'react';
import telegram2 from "../../img/telegram-grey.png";
import vk2 from "../../img/vk-grey.png";

export default function SelectProfiles(props){

    const info = props.emplInf
    const contacts = props.contacts

    return(
        <div className="bbb flex-between">
            <div style={{textAlign: 'center', width: '25%'}}>
                <div style={{borderRadius: '50%', }}>
                    {/* Нужно будет добавить альтернативу для фото, если фото нет  */}
                    <img
                        src={props.photo}
                        alt="logo" style={{width: '4.0rem',
                        padding: "10px 0 10px 0", borderRadius: '50%',}}/>
                </div>
                <h4 id="cn">
                    {info.firstName} {info.lastName}
                </h4>
            </div>
            <div  style={{textAlign: 'center', width: '35%'}}>
                <div>
                    <p className="desc">
                        Тел: {contacts.phone}
                    </p>
                    <p className="desc">
                        E-mail: {contacts.email}
                    </p>

                </div>
            </div>
            <div style={{textAlign: 'center', width: '35%'}}>
                <p style={{fontWeight: '300', }}>
                    Мы уведомим его об этом
                </p>
                <button className="show-cont-button"
                    // onClick={respond}
                > назначить исполнителем</button>
            </div>
        </div>
    )
}