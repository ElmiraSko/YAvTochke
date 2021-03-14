import React from 'react';

export default function SearchWorkSteps() {
    return(
        <div style={{width: '700px', height: 'auto', textAlign: 'center'}}>
            <div style={{textTransform: 'uppercase'}}>
                Сервис для тех, кому:
            </div>
           <div style={{display: "flex", justifyContent: "space-around",
               fontSize: '1.1rem', color: '#f04d2d'}} >
               <div style={{width: '28%', margin: '15px 0 15px 0'}}>
                   Нужна подработка в своем магазине
               </div>
               <div style={{width: '28%', margin: '15px 0 15px 0'}}>
                   Нужна работа рядом с домом
               </div>
               <div style={{width: '28%', margin: '15px 0 15px 0'}}>
                   Нет времени листать вакансии
               </div>
           </div>

            <div style={{textTransform: 'uppercase', margin: '15px 0 15px 0', fontSize: '1.1rem',}}>
                Как найти:
            </div>
            <div style={{display: "flex", justifyContent: "space-around",}} >
                <div style={{width: '26%', height: '170px',  margin: '15px 0 0 0', backgroundColor: '#c3d771'}}>
                    Выбери точку на карте, где удобно работать
                </div>
                <div style={{width: '26%', height: '170px', margin: '15px 0 0 0', backgroundColor: '#d9ef6d'}}>
                    Заполни анкету и оставь свой номер телефона
                </div>
                <div style={{width: '26%', height: '170px', margin: '15px 0 0 0', backgroundColor: '#abba61'}}>
                    Получай сообщения с подходящими вакансиями
                </div>
            </div>

        </div>
    )
}