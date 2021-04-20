import React from 'react';
import {NavLink} from "react-router-dom";

export default function CompanyBalanceComponent(props) {
    return(
        <div>
            <div style={{marginTop: '20px',
                width: '20.0rem', height: '12.0rem', marginLeft: 'auto', marginRight: 'auto',
                border: '1px solid #848C8E', }}>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px',}}>
                    <div>
                                        <span className="material-icons">
                                            account_balance_wallet
                                        </span>
                    </div>
                    <div style={{paddingTop: '4px'}}>
                                        <span style={{marginLeft: '10px',  color: '#505350',
                                            fontWeight: 'bold', fontSize: '14px'}}>
                                            Баланс компании
                                        </span>
                    </div>
                </div>
                <div style={{textAlign: 'left', marginLeft: '30px',
                    fontSize: '12px', color: '#848C8E',fontWeight: '500', }}>
                    <p style={{lineHeight: '20px', fontSize: '12px',}}>
                        Остаток пакета на текущее время:
                    </p>
                    <p style={{lineHeight: '20px', fontSize: '12px',}}>
                        Объявления:
                        <span style={{fontWeight: 'bold',
                            fontSize: '12px',
                            lineHeight: '14px',color: '#505350', margin: "0 7px"}}>
                        {props.ads}
                                        </span>
                        Анкеты:
                        <span  style={{fontWeight: 'bold',
                            fontSize: '12px',
                            lineHeight: '14px',color: '#505350', margin: "0 7px"}}>
                        {props.profiles}
                    </span>

                    </p>
                    <p style={{lineHeight: '20px', fontSize: '12px',}}>
                        Администратор аккаунта: Иванова Л.П.
                    </p>
                    <div style={{textAlign: 'center', marginTop: '11px', }}>
                        <NavLink to={"/employer/personal-account/balance"}
                                 style={{color: '#f04d2d',
                                     textDecoration: 'none', fontWeight: 'bold',
                                     fontSize: '14px',  }}>
                            Подробнее
                        </NavLink>
                    </div>
                </div>
            </div>
            <div>
                <div style={{marginTop: '25px',}}>
                    <NavLink to={"/employer/personal-account/documents"}
                             style={{color: '#505350',
                                 textDecoration: 'none', fontWeight: '500', marginTop: '20px',}}>
                        Бухгалтерские документы
                    </NavLink>
                </div>
                <div style={{marginTop: '15px',}}>
                    <NavLink to={"/employer/personal-account/settings"}
                             style={{color: '#505350',
                                 textDecoration: 'none', fontWeight: '500', marginTop: '20px',}}>
                        Пользовательские настройки
                    </NavLink>
                </div>
                <div style={{marginTop: '15px',}}>
                    <NavLink to={"/employer/personal-account/statistics"}
                             style={{color: '#505350',
                                 textDecoration: 'none',
                                 fontWeight: '500',
                             }}>
                        Посмотреть статистику
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
