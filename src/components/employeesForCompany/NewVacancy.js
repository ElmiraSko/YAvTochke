import React from 'react';
import Container from "@material-ui/core/Container";
export default function NewVacancy() {
    return(
        <Container maxWidth="lg">
            <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                fontWeight: "600", }}> Создание вакансии
            </div>

            <div style={{width: '700px', height: '200px', margin: 'auto',
                border: '2px solid #e1e1e1'}}>
                В разработке
            </div>

        </Container>
    )
}