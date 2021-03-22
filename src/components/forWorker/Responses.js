import React from 'react';
import Container from "@material-ui/core/Container";
import Ad from "../employeesForCompany/VacanciesText";
import AdItem from "../AdItem";

export default function Responses(){
    return(
        <Container maxWidth="lg">
            <div style={{padding: "20px 0px 30px 0px", textTransform: 'uppercase',
                textAlign: "center", fontSize: "1.2rem",
                fontWeight: "600", }}>
                Мои отклики
            </div>

            <div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>
                <div>
                    {Ad.length > 0 ?
                        Ad.map(ad =>
                            <div key={ad.id}>
                                <AdItem vacancy = {ad}/>
                            </div>
                        ) : ""}

                </div>
            </div>
        </Container>

    )
}