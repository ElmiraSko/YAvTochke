import React, {useEffect, useState} from 'react';
import {Button, Container} from "@material-ui/core";
import './styles1/SearchWork.css';
import './styles1/slider.css'
import AdItem from "../AdItem";
import Ad from '../employeesForCompany/VacanciesText'
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import SearchWorkSteps from "./SearchWorkSteps";
import Photo from '../../img/Photo-1st-screen.png'
import {NavLink} from "react-router-dom";

export default function WorkerPage() {

    let tempCords=localStorage.getItem("center")
    console.log(tempCords)

    // здесь пересмотреть, может изменить или убрать лишние стайты
    const [sliderValue, setSliderValue] = useState(5)
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
                <div className="search-work-wrapper">
                    <div className="search-work-img">
                        <div >
                            <img src={Photo} alt="Photo-1"
                                 className="search-work-img-style" />
                        </div>
                        <SearchWorkSteps/>
                    </div>

                    <div className="search-work-reg-button-div">
                        <NavLink className="reg-button-navLink"
                                 to={"/reg/employees"}
                        > Регистрация
                        </NavLink>
                    </div>

                    <div className="pre-search-text">
                        Найди работу в удобном месте
                    </div>
                    <div>
                        <input className="search-work-input"
                               placeholder="Город, улица и номер дома, где хотите работать"
                               value={address}
                               onChange={addressHandler}
                               onClick={clearTheSearchField}
                        />
                        <input type="submit" className="search-work-button"
                               value="Найти"
                               onClick={findPlace}
                        />
                    </div>
                </div>


                <div className="vacancy-and-map-wrapper">
                    <div className="vacancy-div">
                        <div>
                            <div>
                                <AdItem vacancy = {Ad[0]}/>
                            </div>
                            <div>
                                <AdItem vacancy = {Ad[1]}/>
                            </div>
                        </div>
                    </div>

                    <div className="search-map-wrapper" >
                        <div className="search-slider-div">
                            <div>
                                <p>
                                    <input type="range" className="slider"
                                           min="0" max="10" step="0.01"
                                           value={sliderValue} id="radius"
                                           onInput={getRadius} />
                                </p>
                                <p style={{fontSize: "1.0rem"}}>
                                    Радиус: {sliderValue} км
                                </p>
                                <p style={{fontSize: "1.0rem", textTransform: 'uppercase'}}>
                                    Укажите в каком радиусе от точки искать работу
                                </p>
                            </div>
                        </div>
                        <YMaps
                            query={{
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

                                    className="m-maps"
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

                <div className="search-work-wrapper">
                    <div className="search-work-reg-button-div">
                        <NavLink className="reg-button-navLink"
                                 to={"/reg/employees"}
                        > Регистрация
                        </NavLink>
                    </div>
                </div>


            </Container>
        </div>
    )
}