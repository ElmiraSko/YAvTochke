import React from 'react';
import telegram2 from "../../img/telegram-grey.png";
import vk2 from "../../img/vk-grey.png";

export default function CompanyPageContactsPlace(props) {
    return(
        <div className="flex-space-around">
            <div style={{marginRight: '5px', }}>
                <p className="contT">
                    Телефон:
                </p>
                <p className="contT">
                    E-mail:
                </p>
                <p id="telegram">
                    <img src={telegram2}
                         alt="Иконка Telegram"
                         style={{width: '25px', height: '25px',}} />
                </p>
                <p id="vk">
                    <img src={vk2}
                         alt="Иконка VK"
                         style={{width: '25px', height: '25px', }} />
                </p>
            </div>

            <div hidden={props.contactsInfoHidden}>
                <p className="cont">
                    {props.contPhone}
                </p>
                <p className="cont">
                    {props.contEmail}
                </p>
                <p className="cont">
                    {props.contTelegram}
                </p>
                <p className="cont">
                    {props.contVk}
                </p>
            </div>
            <div
                // hidden={props.contactsFormHidden}
                hidden={true}
            >
                <div className="cont">
                    <input  type="tel"
                            value={props.editPhone}
                            onChange={props.editPhoneChange}
                            style={{width: '96%'}}
                    />
                </div>
                <div className="cont">
                    <input type="email"
                           value={props.editEmail}
                           onChange={props.editEmailChange}
                           style={{width: '96%'}}
                    />
                </div>
                <div className="cont">
                    <input type="text"
                           value={props.editTelegram}
                           onChange={props.editTelegramChange}
                           style={{width: '96%'}}
                    />
                </div>
                <div className="cont">
                    <input type="text"
                           value={props.editVk}
                           onChange={props.editVkChange}
                           style={{width: '96%'}}
                    />
                </div>
            </div>
            <div hidden={true}>
                <button className="red-button_ c-p-save-button"
                        onClick={props.changeContacts}
                >{props.contactsButtonTitle}</button>
            </div>
        </div>
    )
}