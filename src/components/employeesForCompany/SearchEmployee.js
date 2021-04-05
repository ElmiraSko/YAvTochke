import React, {useContext, useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import './styles2/Emploees.css';
import '../forWorker/styles1/SearchWork.css';
import Photo from "../../img/worker.jpg";
import SearchWorkSteps from "../forWorker/SearchWorkSteps";
import {NavLink} from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Item from "../forWorker/Item";
import AdItem from "../AdItem";
import Ad from "./VacanciesText";
import {Circle, Map, Placemark, YMaps} from "react-yandex-maps";
import Content from './textForMainPageCompany';
import Context from "../Context";

export default function SearchEmployee() {
    // контекст, чтоб проверить, авторизован работодатель или нет
    const {company} = useContext(Context)

    // для карусели, сколько элементов отображать в
    // зависимости от экрана, нужно потестить
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 }
    ];
    // получили текст для главной страницы, шаг 1, 2, 3
    const content = Content

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

    const vacancies = [
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

    //=== получаем значение ползунка
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

    // для якорной ссылки
    useEffect(() => {
        const hash = window.location.hash
        // Check if there is a hash and if an element with that id exists
        const el = hash && document.getElementById(hash.substr(1))
        if (el) {
            // el.scrollIntoView({behavior: "auto"}) // этот вариант не поддерживается в
            // браузерах Internet Explorer, Сафари, Safari на iOS
            el.scrollIntoView() // этот вариант поддерживают все
        }
    }, [window.location.hash]) // Fires every time hash changes


    function postAJob() {
        if (company===null) {
            window.location.href="/auth/company"
        } else {
            window.location.replace('/new-vacancy')
        }
    }

    return(
        <div>
            <Container maxWidth="lg">
                <div className="search-work-wrapper">
                    <div className="search-work-img">
                        <SearchWorkSteps content={content}/>
                        <div style={{marginTop: '20px', }}>
                            <img src={Photo} alt="Photo-1"
                                 className="search-work-img-style" />
                        </div>
                    </div>


                    <div className="search-work-reg-button-div">
                        <button className="reg-button-navLink f-s"
                                 onClick={postAJob}
                                 // to={"/new-vacancy"}
                        > Разместить вакансию
                        </button>
                    </div>

                    <Carousel breakPoints={breakPoints} isRTL={true}>
                        {vacancies.map((c,index) => <Item content={c} key={index}/>)}
                    </Carousel>

                    <div className="pre-search-text">
                        Укажите адрес, куда вам нужен сотрудник
                    </div>
                    <div>
                        <input className="search-work-input"
                               placeholder="Город, улица и номер дома"
                               value={address}
                               onChange={addressHandler}
                               onClick={clearTheSearchField}
                        />
                        <input type="submit" className="search-work-button"
                               value="Показать анкеты"
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
                                           min="0" max="10" step="0.1"
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
                                 to={"/reg/company"}
                        > Регистрация
                        </NavLink>
                    </div>
                </div>
            </Container>
        </div>
    )
}