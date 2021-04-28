import React from 'react';
import Container from "@material-ui/core/Container";
import './styles2/NewVacancy.css'

export default function NewVacancy() {

    return(
        <Container maxWidth="lg">
            <div className="company-page-title">
                Создание вакансии
            </div>
            <div className="box-main">
                <div className="box-1">
                   <div>
                       <span className="tt">
                           Название вакансии
                       </span>

                   </div>
                </div>
                <div className="box-2-title">
                    должностные обязанности и условия работы
                </div>
                <div className="box-2">
                    В разработке
                </div>
            </div>


        </Container>
    )
}