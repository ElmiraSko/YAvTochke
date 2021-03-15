import React from 'react';
import './styles1/SearchWorkSteps.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EditIcon from '@material-ui/icons/Edit';
import EmailIcon from '@material-ui/icons/Email';

export default function SearchWorkSteps() {
    return(
        <div className="wrapper">
            <div className="title-steps">
                Сервис для тех, кому:
            </div>
           <div className="wr-stp">
               <div className="wr-stp-div">
                   Нужна подработка в своем магазине
               </div>
               <div className="wr-stp-div">
                   Нужна работа рядом с домом
               </div>
               <div className="wr-stp-div">
                   Нет времени листать вакансии
               </div>
           </div>

            <div className="how-title">
                Как найти:
            </div>
            <div className="how-wrapper" >
                <div className='one'>
                    <div className='two'>
                        <div className='steps-icons'>
                            <LocationOnIcon style={{width: '36px', height: '36px'}} />
                        </div>
                        Выбери точку на карте, где удобно работать
                    </div>
                </div>
                <div className='one'>
                    <div className='two'>
                        <div className='steps-icons'>
                            <EditIcon style={{width: '36px', height: '36px'}} />
                        </div>
                        Заполни анкету и оставь свой номер телефона
                    </div>
                </div>
                <div className='one'>
                    <div className='two'>
                        <div className='steps-icons'>
                            <EmailIcon  style={{width: '36px', height: '36px'}} />
                        </div>
                        Получай сообщения с подходящими вакансиями
                    </div>
                </div>
            </div>
        </div>
    )
}