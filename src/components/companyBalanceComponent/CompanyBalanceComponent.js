import React from 'react';
import {NavLink} from "react-router-dom";
import './CompanyBalanceComponent.css'

export default function CompanyBalanceComponent(props) {
    return(
        <div>
            <div className="comp-balance-box-wrapper">
                <div className="comp-balance-icon flex-center">
                    <div>
                        <span className="material-icons">
                            account_balance_wallet
                        </span>
                    </div>
                    <div style={{paddingTop: '4px'}}>
                        <span className="comp-balance-icon-text">
                            Баланс компании
                        </span>
                    </div>
                </div>
                <div  className="comp-balance-info-wrap">
                    <p className="comp-balance-info-p">
                        Остаток пакета на текущее время:
                    </p>
                    <p className="comp-balance-info-p">
                        Объявления:
                        <span className="comp-balance-info-ads">
                                {props.ads}
                        </span>
                        Анкеты:
                        <span  className="comp-balance-info-ads">
                            {props.profiles}
                        </span>
                    </p>
                    <p className="comp-balance-info-p">
                        Администратор аккаунта: Иванова Л.П.
                    </p>
                    <div  className="comp-balance-details-wr">
                        <NavLink to={"/employer/personal-account/balance"}
                                 className="comp-balance-navlink">
                            Подробнее
                        </NavLink>
                    </div>
                </div>
            </div>
            <div>
                <div style={{marginTop: '25px',}}>
                    <NavLink exact to={"/employer/personal-account/documents"}
                             className="comp-balance-links"
                             activeStyle={{color: "#F04D2D",}}>
                        Бухгалтерские документы
                    </NavLink>
                </div>
                <div style={{marginTop: '15px',}}>
                    <NavLink to={"/employer/personal-account/settings"}
                             className="comp-balance-links"
                             activeStyle={{color: "#F04D2D",}}>
                        Пользовательские настройки
                    </NavLink>
                </div>
                <div style={{marginTop: '15px',}}>
                    <NavLink exact to={"/employer/personal-account/statistics"}
                             className="comp-balance-links"
                             activeStyle={{color: "#F04D2D",}}>
                        Посмотреть статистику
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
