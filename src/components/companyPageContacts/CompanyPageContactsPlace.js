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

            <div
                // hidden={contactsInfoHidden}
            >
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
            {/*<div */}
            {/*    // hidden={contactsFormHidden}*/}
            {/*>*/}
            {/*    <div className="cont">*/}
            {/*        <input  type="tel"*/}
            {/*                value={editPhone}*/}
            {/*                onChange={editPhoneChange}*/}
            {/*                style={{width: '96%'}}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="cont">*/}
            {/*        <input type="email"*/}
            {/*               value={editEmail}*/}
            {/*               onChange={editEmailChange}*/}
            {/*               style={{width: '96%'}}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="cont">*/}
            {/*        <input type="text"*/}
            {/*               value={editTelegram}*/}
            {/*               onChange={editTelegramChange}*/}
            {/*               style={{width: '96%'}}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="cont">*/}
            {/*        <input type="text"*/}
            {/*               value={editVk}*/}
            {/*               onChange={editVkChange}*/}
            {/*               style={{width: '96%'}}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}