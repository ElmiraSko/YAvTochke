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
            {/*<div className="colorDiv" style={{background: "#d3ecf8"}}>*/}
            {/*    <Container maxWidth="lg">*/}
            {/*    <div style={{display: "flex", justifyContent: "space-around", fontSize: "1.2rem",*/}
            {/*        fontWeight: "600",}}>*/}
            {/*        <div className="title">*/}
            {/*            Найти сотрудника на <br /> свою точку*/}
            {/*        </div>*/}
            {/*        <div >*/}
            {/*            <div style={{marginLeft: "80px",}}>Продавцы </div>*/}
            {/*            <div style={{marginRight: "60px", marginTop: "15px"}}>Аудиторы </div>*/}
            {/*            <div style={{marginLeft: "160px", marginTop: "15px"}}> Промоутеры </div>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <div> Консультанты</div>*/}
            {/*            <div style={{marginRight: "120px", marginTop: "15px"}}> Мерчендайзеры</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div style={{paddingTop: "40px", textAlign: "center"}}>*/}
            {/*        <Button style={{backgroundColor: "#c81f1f", color: "#ffffff",*/}
            {/*            fontWeight: "400",}}> Разместить вакансию</Button>*/}
            {/*    </div>*/}
            {/*    </Container>*/}
            {/*</div>*/}

            <Container maxWidth="lg">
                <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                    fontWeight: "600", }}> Работодателям

                    <div style={{backgroundColor: '#848C8E', width: "900px", color: '#fff',
                        borderRadius: '10px', height: 'auto', margin: 'auto', textAlign: "center",
                        marginTop: '20px', fontSize: "1.2rem", }}>
                        <div style={{width: "500px", margin: 'auto', paddingTop:'10px'}}>
                            <ul style={{textAlign: "left", }}>
                                <li>Нужен работник на время</li>
                                <li>Нужно подобрать мерчендайзеров</li>
                                <li>Нет времени листать резюме</li>
                            </ul>
                        </div>
                        <h3 > Как найти: </h3>
                        <div style={{display: "flex", justifyContent: "space-around",
                            height: "180px", fontSize: "2.9rem"  }}>
                            <div style={{backgroundColor: "#ffb43c",
                                width: "80px", height: "80px",
                                borderRadius: '50%'}}>1</div>
                            <div style={{backgroundColor: "#f17f05",
                                width: "80px", height: "80px",
                                borderRadius: '50%'}}>2</div>
                            <div style={{backgroundColor: "#F04D2D",
                                width: "80px", height: "80px",
                                borderRadius: '50%'}}>3</div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around",
                            marginBottom: "105px", height: "180px", fontSize: "1.4rem"  }}>
                            <div style={{
                                width: "30%", height: "80px",
                                borderRadius: '50%'}}>Выбери точку на карте, куда необходим сотрудник</div>
                            <div style={{
                                width: "30%", height: "80px",
                                borderRadius: '50%'}}>Заполни объявления</div>
                            <div style={{
                                width: "30%", height: "80px",
                                borderRadius: '50%'}}>Получай сообщения с подходящими анкетами сотрудников</div>
                        </div>
                    </div>
                </div>

                {/*<div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>*/}
                {/*    <div>*/}
                {/*        <div>*/}
                {/*            <Button style={{backgroundColor: "#c4c1c1", color: "#ffffff",*/}
                {/*                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Продавцы 23</Button>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <Button style={{backgroundColor: "#c4c1c1", color: "#ffffff",*/}
                {/*                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Аудиторы 12</Button>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <div>*/}
                {/*            <Button style={{backgroundColor: "#c4c1c1",  color: "#ffffff",*/}
                {/*                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Промоутеры 18 </Button>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <Button style={{backgroundColor: "#c4c1c1", color: "#ffffff",*/}
                {/*                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Мерчендайзеры 17 </Button>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <div>*/}
                {/*            <Button style={{backgroundColor: "#c4c1c1", color: "#ffffff",*/}
                {/*                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Консультанты 8</Button>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <Button style={{backgroundColor: "#c4c1c1", color: "#ffffff",*/}
                {/*                fontWeight: "400", width: "180px", marginBottom: "15px"}}> Разместить</Button>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}



            </Container>


        </div>
    )
}