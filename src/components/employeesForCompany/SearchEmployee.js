import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Container} from "@material-ui/core";
import './styles2/Emploees.css';


const useStyles = makeStyles((theme) => ({
    root: {

    },
}));


export default function SearchEmployee() {
    const classes = useStyles();

    return(
        <div>
            <div className="colorDiv" style={{background: "#d3ecf8"}}>
                <Container maxWidth="lg">
                <div style={{display: "flex", justifyContent: "space-around", fontSize: "1.2rem",
                    fontWeight: "600",}}>
                    <div className="title">
                        Найти сотрудника на <br /> свою точку
                    </div>
                    <div >
                        <div style={{marginLeft: "80px",}}>Продавцы </div>
                        <div style={{marginRight: "60px", marginTop: "15px"}}>Аудиторы </div>
                        <div style={{marginLeft: "160px", marginTop: "15px"}}> Промоутеры </div>
                    </div>
                    <div>
                        <div> Консультанты</div>
                        <div style={{marginRight: "120px", marginTop: "15px"}}> Мерчендайзеры</div>
                    </div>
                </div>
                <div style={{paddingTop: "40px", textAlign: "center"}}>
                    <Button style={{backgroundColor: "#c81f1f", color: "#ffffff",
                        fontWeight: "400",}}> Разместить вакансию</Button>
                </div>
                </Container>
            </div>

            <Container maxWidth="lg">

                <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                    fontWeight: "600", }}> Сотрудники
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
                    <div style={{backgroundColor: "#b1e0f3",  width: "180px",  }}>1 шаг</div>
                    <div style={{backgroundColor: "#b1e0f3",  width: "180px",  }}>2 шаг</div>
                    <div style={{backgroundColor: "#b1e0f3",  width: "180px",  }}>3 шаг</div>
                </div>

            </Container>


        </div>
    )
}