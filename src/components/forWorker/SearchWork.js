import React from 'react';
import {Button, Container} from "@material-ui/core";
import '../employeesForCompany/styles2/Emploees.css';


export default function WorkerPage() {

    return(
        <div>
            <div className="colorDiv" >
                <Container maxWidth="lg">
                    <div style={{display: "flex", justifyContent: "space-around", fontSize: "1.2rem",
                        fontWeight: "600",}}>
                        <div className="title">
                            Сервис для <br /> тех кто
                        </div>
                        <div >
                            <div >Хочет найти подработку </div>
                            <div style={{ marginTop: "15px"}}>в своем магазине </div>
                        </div>
                        <div>
                            <div> Ищет работу рядом</div>
                            <div style={{marginRight: "120px", marginTop: "15px"}}> со своим домом</div>
                        </div>
                    </div>
                    <div style={{paddingTop: "40px", textAlign: "center"}}>
                        <Button style={{backgroundColor: "#c81f1f", color: "#ffffff",
                            fontWeight: "400",}}> Регистрация </Button>
                    </div>
                </Container>
            </div>

            <Container maxWidth="lg">

                <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                    fontWeight: "600", }}> Соискатели
                </div>

                <div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>
                    <div>
                        <div>
                            <Button style={{backgroundColor: "#c4c1c1", color: "#ffffff",
                                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Продавцы 23</Button>
                        </div>
                        <div>
                            <Button style={{backgroundColor: "#c4c1c1", color: "#ffffff",
                                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Аудиторы 12</Button>
                        </div>

                    </div>
                    <div>
                        <div>
                            <Button style={{backgroundColor: "#c4c1c1",  color: "#ffffff",
                                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Промоутеры 18 </Button>
                        </div>
                        <div>
                            <Button style={{backgroundColor: "#c4c1c1", color: "#ffffff",
                                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Мерчендайзеры 17 </Button>
                        </div>

                    </div>
                    <div>
                        <div>
                            <Button style={{backgroundColor: "#c4c1c1", color: "#ffffff",
                                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Консультанты 8</Button>
                        </div>
                        <div>
                            <Button style={{backgroundColor: "#c4c1c1", color: "#ffffff",
                                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Разместить</Button>
                        </div>

                    </div>
                </div>

                <h1 style={{textAlign: "center"}}> Как это работает </h1>
                <div style={{display: "flex", justifyContent: "space-around",
                    marginBottom: "135px", height: "180px", fontSize: "1.4rem"  }}>
                    <div style={{backgroundColor: "#e78282",  width: "180px", }}>1 шаг</div>
                    <div style={{backgroundColor: "#e78282",  width: "180px", }}>2 шаг</div>
                    <div style={{backgroundColor: "#e78282",  width: "180px", }}>3 шаг</div>
                </div>

            </Container>


        </div>
    )
}