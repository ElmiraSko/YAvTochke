import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import './styles1/SearchWork.css';
import './styles1/slider.css'
import AdItem from "../AdItem";
import Ad from '../employeesForCompany/VacanciesText'
import {YMaps, Map, Placemark, Circle} from 'react-yandex-maps';
import SearchWorkSteps from "./SearchWorkSteps";
import Photo from '../../img/Photo-1st-screen.png'
import {NavLink} from "react-router-dom";
import {Carousel} from "./Carousel";

export default function WorkerPage() {

    // let tempCords=localStorage.getItem("center")
    // console.log(tempCords)

    // здесь пересмотреть, может изменить или убрать лишние стайты
    const [sliderValue, setSliderValue] = useState(5)
    const [zoom, setZoom] = useState(10)
    const [address, setAddress] = useState('')
    const [yMaps, setYMaps] = useState()

    const [coordinates, setCoordinates] = useState([])

    const [center, setCenter] = useState([55.751574, 37.573856])
    const mapState = React.useMemo(() =>
            ({ center, zoom, controls: ['zoomControl', 'fullscreenControl']}),
        [center, zoom])


    let data = [
        {
            address: "Москва, ул. Тверская, 10"
        },
        {
            address: "Москва, ул. Большая Садовая, 4c1"
        }
    ]
    //=================
    const [vacancyCount, setVacancyCount] = useState(4)
    const [prevIndex, setPrevIndex] = useState(0)

    const vac = [
        {
            name: 'Грузчик',
            count: 12,
        },
        {
            name: 'Мерчендайзер',
            count: 23,
        },
        {
            name: 'Комплектовщик/сборщик',
            count: 49,
        },
        {
            name: 'Курьер',
            count: 38,
        },
        {
            name: 'Продавец-кассир',
            count: 25,
        },
        {
            name: 'Продавец-консультант',
            count: 27,
        },
        {
            name: 'Промоутер',
            count: 45,
        },
        {
            name: 'Охраник',
            count: 15,
        },
        {
            name: 'Тайный покупатель',
            count: 9,
        },
    ]
    function getVac() {
        let newVac = []
        for (let i = prevIndex, j = 0; j < vacancyCount && i< vac.length; i++, j++) {
            newVac.push(vac[i])
        }
        return newVac
    }
    // функции изменяющие стартовый индекс
    function prev(){
        if (prevIndex > 0) {
            setPrevIndex(prevIndex-1)
        }
    }
    function next(){
        if (prevIndex < vac.length-vacancyCount) {
            setPrevIndex(prevIndex+1)
        }
    }
    //======================================

    function getRadius() {
        const size = document.getElementById("radius").value;
        setSliderValue(size)
        console.log(size)
    }

    function addressHandler(event) {
        setAddress(event.target.value)
    }

    function getCurrentPlace(ymaps) {
        setYMaps(ymaps)
            ymaps.geolocation.get({
                // Выставляем опцию для определения положения по ip
                provider: 'auto',
                // Карта автоматически отцентрируется по положению пользователя.
                mapStateAutoApply: true
            }).then(function (result) {
                // console.log(result)
                let coords = result.geoObjects.get(0).geometry.getCoordinates()
                // console.log(coords);
                // localStorage.setItem("center", coords)
                // tempCords=coords
                setCenter(coords)
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
        // data.map(function (add) {
        //     yMaps.geocode(add.address)
        //         .then(result => coords.push( result.geoObjects.get(0).geometry.getCoordinates()))
        // })
        // setCoordinates(coords)

        yMaps.geocode(address)
            .then(result => setCenter( result.geoObjects.get(0).geometry.getCoordinates()))
    }

    return(
        <div>
            <Container maxWidth="lg">
                <div className="search-work-wrapper">
                    <div className="search-work-img">
                        <div>
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


                    <Carousel vacancies={getVac()} prev={prev} next={next}/>

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
                                <div>
                                    <input type="range" className="slider"
                                           min="0" max="10" step="0.5"
                                           value={sliderValue} id="radius"
                                           onInput={getRadius} />
                                </div>
                                <p style={{fontSize: "1.0rem"}}>
                                    Радиус: {sliderValue} км
                                </p>
                                <p style={{fontSize: "1.0rem", textTransform: 'uppercase', }}>
                                    <b>Укажите расстояние от точки поиска работы</b>
                                </p>
                            </div>
                        </div>
                        <YMaps
                            query={{
                                apikey: '7d5617ab-0b68-4e1b-927b-15096a804e10',
                            }}

                        >
                            <div>
                                <Map
                                    state={mapState}
                                    onLoad={(ymaps) => {
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
                                    <Circle
                                        geometry={ [center,  sliderValue*1000]}
                                        options={{
                                            // Setting the circle options.
                                            // Enabling drag-n-drop for the circle.
                                            draggable: false,
                                            fillColor: 'rgba(245, 131, 108,0.2)',
                                            strokeColor: '#f04d2d',
                                            strokeOpacity: 0.8,
                                            strokeWidth: 1,
                                        }}
                                    />

                                    <Placemark geometry={center}
                                               properties={{
                                                   balloonContent: 'Я здесь',
                                               }}
                                               options={{
                                                   preset: 'islands#darkOrangeDotIcon',
                                               }}
                                    />

                                    {/*<Placemark geometry={[55.75203456899694,37.64085649999999]} />*/}

                                    {/*{coordinates.map(coordinate => <Placemark geometry={coordinate} />)}*/}

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