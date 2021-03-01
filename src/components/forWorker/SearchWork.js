import React, {useState} from 'react';
import {Button, Container} from "@material-ui/core";
import '../employeesForCompany/styles2/Emploees.css';
import './styles1/slider.css'
import AdItem from "../AdItem";
import Ad from '../employeesForCompany/VacanciesText'
import {YMaps, Map, Placemark} from 'react-yandex-maps';


export default function WorkerPage() {
    const [sliderValue, setSliderValue] = useState(0)

    const [mapCenter, setMapCenter] = useState(
        {
            center: [55.75, 37.57],
            zoom: 7,
            controls: ['zoomControl', 'fullscreenControl'],
        }
    );
    const [zoom, setZoom] = React.useState(7)

    const [center, setCenter] = React.useState(
        [55.75, 37.57],
    )
    const mapState = React.useMemo(() => ({ center, zoom }),
        [center, zoom, ])

    const coordinates = [
        [55.684758, 37.738521],
        [56.684758, 37.73999]
    ]

    function getRadius() {
        const size = document.getElementById("radius").value;
        setSliderValue(size)
        console.log(size)
    }

    function getCurrentPlace(ymaps) {

        ymaps.geolocation.get({
            // Выставляем опцию для определения положения по ip
            provider: 'yandex',
            // Карта автоматически отцентрируется по положению пользователя.
            mapStateAutoApply: true
        }).then(function (result) {
            console.log(result)
            let coords = result.geoObjects.get(0).geometry.getCoordinates()
            console.log(coords);
            setCenter(coords)
            // setMapCenter({
            //         center: result.geoObjects.get(0).geometry.getCoordinates(),
            //         zoom: 7,
            //         controls: ['zoomControl', 'fullscreenControl']
            // })
            console.log(center)
        });

    }

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
                <hr />
                <div style={{marginBottom: "35px", }}>
                    <div style={{fontSize: "1.2rem", marginBottom: "15px",}}>
                        Найди работу в нужном тебе месте
                    </div>
                    <div>
                        <input style={{width: "40%", }}
                               placeholder="Улица и номер дома где хотите работать"/>
                               <input type="submit" style={{margin: "0px 10px", }} value="Поиск"/>
                        <p style={{fontSize: "1.0rem"}}>
                            Укажите в каком радиусе от точки искать работу
                        </p>
                               <p>
                                   <input type="range" className="slider"
                                          min="0" max="2000" step="100"
                                          value={sliderValue} id="radius"
                                          onInput={getRadius} />
                               </p>
                        <p style={{fontSize: "1.0rem"}}>
                            Радиус: {sliderValue/1000} км ({sliderValue} метров)
                        </p>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "135px",
                }}>
                    <div style={{width: "40%", height: "auto",}}>
                        <div>
                            <div>
                                <AdItem vacancy = {Ad[0]}/>
                            </div>
                            <div>
                                <AdItem vacancy = {Ad[1]}/>
                            </div>
                        </div>
                    </div>

                    <div style={{marginBottom: "35px",}}>
                        <YMaps  query={{
                            apikey: '7d5617ab-0b68-4e1b-927b-15096a804e10',
                        }}>
                            <div>
                                <Map state={mapState} onLoad={(ymaps) => {
                                    console.log(ymaps.geocode);
                                    getCurrentPlace(ymaps)
                                } }
                                     modules={['control.ZoomControl', 'control.FullscreenControl','geolocation', 'geocode']}
                                     style={{width: "600px", height: "400px"}}
                                >

                                    {/*<Placemark defaultGeometry={[55.75, 37.57]} />*/}

                                    {/*{coordinates.map(coordinate => <Placemark geometry={coordinate} />)}*/}

                                </Map>

                            </div>
                        </YMaps>
                        {/*<div id="map" style={{width: "600px", height: "400px"}} />*/}
                    </div>
                </div>



            </Container>


        </div>
    )
}