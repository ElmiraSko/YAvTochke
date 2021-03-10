import React, {useEffect, useState} from 'react';
import {Button, Container} from "@material-ui/core";
import '../employeesForCompany/styles2/Emploees.css';
import './styles1/slider.css'
import AdItem from "../AdItem";
import Ad from '../employeesForCompany/VacanciesText'
import {YMaps, Map, Placemark} from 'react-yandex-maps';

export default function WorkerPage() {

    let tempCords=localStorage.getItem("center")
    console.log(tempCords)

    // здесь пересмотреть, может изменить или убрать лишние стайты
    const [sliderValue, setSliderValue] = useState(0)
    const [zoom, setZoom] = useState(7)
    const [address, setAddress] = useState('')
    const [ymaps, setYmaps] = useState()

    const [coordinates, setCoordinates] = useState([])


    const [center, setCenter] = useState(tempCords,)
    const mapState = React.useMemo(() =>
            ({ center, zoom, controls: ['zoomControl', 'fullscreenControl']}),
        [center, zoom])


    let data = [
        {
            address: "Москва, ул. Солянка, 9"
        },
        {
            address: "Москва, ул. Варварка, 5/10c1"
        }
    ]

    function getRadius() {
        const size = document.getElementById("radius").value;
        setSliderValue(size)
        console.log(size)
    }

    function addressHandler(event) {
        setAddress(event.target.value)
    }

    function getCurrentPlace(ymaps) {
            setYmaps(ymaps)
            ymaps.geolocation.get({
                // Выставляем опцию для определения положения по ip
                provider: 'auto',
                // Карта автоматически отцентрируется по положению пользователя.
                mapStateAutoApply: true
            }).then(function (result) {
                console.log(result)
                let coords = result.geoObjects.get(0).geometry.getCoordinates()
                console.log(coords);
                localStorage.setItem("center", coords)
                tempCords=coords
                setCenter(coords)
                console.log(tempCords)
            });
    }

    function clearTheSearchField() {
        setAddress('')
    }


    function findPlace() {
        console.log("Клик по кнопке")
        let coords = []
        // {Адрес и радиус} отпраить на бэк, получить список адресов в указанном радиусе - data
        // после, пройтись по массиву адресов - data
        // создать массив из координат - сoordinates
        data.map(function (add) {
            ymaps.geocode(add.address)
                .then(result => coords.push( result.geoObjects.get(0).geometry.getCoordinates()))
        })
        setCoordinates(coords)
        ymaps.geocode(address)
            .then(result => setCenter( result.geoObjects.get(0).geometry.getCoordinates()))
    }


    return(
        <div>
            <Container maxWidth="lg">
                <div style={{padding: "20px 0px 30px 0px", textAlign: "center", fontSize: "1.4rem",
                    fontWeight: "600", }}> Соискателям

                    <div style={{backgroundColor: '#848C8E', width: "900px", color: '#fff',
                        borderRadius: '10px', height: 'auto', margin: 'auto', textAlign: "center",
                        marginTop: '20px', fontSize: "1.2rem", }}>
                        <div style={{width: "500px", margin: 'auto', paddingTop:'10px', marginBottom: '50px'}}>
                            <ul style={{textAlign: "left", }}>
                                <li>Нужна подработка в своем магазине</li>
                                <li>Нужна работа рядом с домом</li>
                                <li>Нет времени листать вакансии</li>
                            </ul>
                        </div>
                        <h3 > Как найти: </h3>
                        <div style={{display: "flex", justifyContent: "space-around",
                            height: "90px", fontSize: "2.9rem"  }}>
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
                                borderRadius: '50%'}}>Выбери точку на карте, где удобно работать</div>
                            <div style={{
                                width: "30%", height: "80px",
                                borderRadius: '50%'}}>Заполни анкету и оставь свой номер телефона</div>
                            <div style={{
                                width: "30%", height: "80px",
                                borderRadius: '50%'}}>Получай сообщения с подходящими вакансиями</div>
                        </div>
                    </div>
                </div>

                <div style={{marginBottom: "35px", }}>
                    <div style={{fontSize: "1.2rem", marginBottom: "15px",}}>
                        Найди работу в нужном тебе месте
                    </div>
                    <div>
                        <input style={{width: "40%", }}
                               placeholder="Улица и номер дома где хотите работать"
                               value={address}
                               onChange={addressHandler}
                               onClick={clearTheSearchField}
                        />
                        <input type="submit" style={{margin: "0px 10px", }}
                               value="Поиск"
                               onClick={findPlace}
                        />
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
                                <Map
                                    state={mapState}
                                     onLoad={(ymaps) => {
                                    console.log(ymaps.geocode);
                                    getCurrentPlace(ymaps);
                                } }
                                     modules={[
                                         'control.ZoomControl',
                                         'control.FullscreenControl',
                                         'geolocation', 'geocode',
                                         'geoObject.addon.balloon',
                                         'geoObject.addon.hint']}

                                     style={{width: "600px", height: "400px"}}
                                >

                                    <Placemark geometry={center}
                                               properties={{
                                                   // iconContent: 'Я здесь',
                                                   // hintContent: 'Это',
                                                   balloonContent: 'Я здесь',
                                               }}
                                               options={{
                                                   // The placemark's icon will stretch to fit its contents.
                                                   preset: 'islands#darkOrangeDotIcon',
                                               }}
                                    />
                                    {/*<Placemark geometry={[55.75203456899694,37.64085649999999]} />*/}

                                    {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}

                                </Map>
                            </div>
                        </YMaps>
                    </div>
                </div>



            </Container>


        </div>
    )
}