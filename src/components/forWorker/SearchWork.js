import React, {useState, useEffect, useContext} from 'react';
import {Container} from "@material-ui/core";
import './styles1/SearchWork.css';
import './styles1/slider.css'
import AdItem from "../AdItem";
import Ad from '../employeesForCompany/VacanciesText'
import WorkerContent from './textForMainPageWorker'
import {YMaps, Map, Placemark, Circle} from 'react-yandex-maps';
import SearchWorkSteps from "./SearchWorkSteps";
import Photo from '../../img/Photo-1st-screen.png'
import {NavLink} from "react-router-dom";
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import Context from "../Context";


export default function SearchWork() {
    // для функции activeSearchWork
    const {setSearchWork, searchWork, user} = useContext(Context)

    // для карусели, сколько элементов отображать в
    // зависимости от экрана, нужно потестить
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3, itemsToScroll: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 },
    ];

    const workerContent = WorkerContent
    // Вспомогательное свойство для карусели, чтоб менять цвет
    const carouselFor = "Work"

    // здесь пересмотреть, может изменить или убрать лишние стэйты
    const [sliderValue, setSliderValue] = useState(5)
    const [zoom, setZoom] = useState(10)
    const [address, setAddress] = useState('')
    const [yMaps, setYMaps] = useState()

    const [coordinates, setCoordinates] = useState([])

    const [center, setCenter] = useState([55.751574, 37.573856])
    const mapState = React.useMemo(() =>
            ({ center, zoom, controls: ['zoomControl', 'fullscreenControl']}),
        [center, zoom])


    // временная функция-заглушка, для работы с вакансиями
    // состояние нашей страницы: массив вакансий, получим с сервера
    // после того, как отрисуется этот компонент Responses отработает useEffect()
    const [myVacancies, setMyVacancies] = useState([])
    // вспомогательный флаг, чтоб происходила перересовка компонента
    const[paint, setPaint] = useState(false)

    //выполнится после монтирования в DOM и обновления массива вакансий
    useEffect(() => {
        if(Ad.length>0) {
            let tempArray = []
            Ad.map(item => {
                if (!item.is_respond) {
                    tempArray.push(item)
                }
            })
            setMyVacancies(tempArray)
        }
    }, [])

    //выполнится после обновления
    useEffect(() => {
        if(myVacancies.length>0) {
            let tempArray = []
            myVacancies.map(item => {
                if (!item.is_respond) {
                    tempArray.push(item)
                }
            })
            setMyVacancies(tempArray)
        }
    }, [paint])

    // Здесь должен идти запрос на бэк, что на вакансию откликнулись
    function respondHandler(id) {
        respondButtonHandler(id, true)
        setPaint(prevState => !prevState)
    }
    //Здесь должен идти запрос на бэк, что отменили отклик на вакансию
    function cancelHandler(id) {
        respondButtonHandler(id, false)
    }
    function respondButtonHandler(id, bool) {
        if(myVacancies.length>0) {
            let tempArray = []
            myVacancies.map(item => {
                if (item.id === id) {
                    item.is_respond = bool
                }
                tempArray.push(item)
            })
            setMyVacancies(tempArray)
        }
    }

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

    // // передача кнопки в компонент- вакансия
    // const buttonForAdItem = (props) => {
    //     return(
    //         <button className={`sent-button ${props.responseSent(props.sent)} `}
    //                 onClick={props.respond}
    //         > {props.jobsButton}</button>
    //     )
    // }
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

        // var metro = new yMaps.Metro.Closest(new YMaps.GeoPoint(55.751574, 37.573856), { results : 3 } )
        // // Обработчик успешного завершения
        // yMaps.Events.observe(metro, metro.Events.Load, function (metro) {
        //     if (metro.length()) {
        //         metro.setStyle("default#greenSmallPoint");
        //         yMaps.addOverlay(metro);
        //     } else {
        //         alert("Поблизости не найдено станций метро");
        //     }
        // });
        //
        // yMaps.Events.observe(metro, metro.Events.Fault, function (metro, error) {
        //     alert("При выполнении запроса произошла ошибка: " + error);
        // });
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

    // при переходе на эту страницу, устанавливаем флаг - для соискателей,
    // чтоб в гл.меню выделялась нужная вкладка
    useEffect(() => {setSearchWork(true)}, [searchWork])

    return(
        <div>
            <Container maxWidth="lg">
                <div className="search-work-wrapper">
                    <div className="search-work-img">
                        <div>
                            <img src={Photo} alt="Photo-1"
                                 className="search-work-img-style" />
                        </div>
                        <SearchWorkSteps content={workerContent}/>
                    </div>

                    <div className="search-work-reg-button-div" hidden={user}>
                        <NavLink className="reg-button-navLink"
                                 to={"/reg/employees"}
                        > Регистрация
                        </NavLink>
                    </div>
                    <h2 className="red-text align-l margin_L_R">Вакансии</h2>
                    <Carousel
                        isRTL={true}
                        breakPoints={breakPoints}
                        className={`${carouselFor==='Work' ? 'red' : 'grey'}`}>
                        {vacancies.map((c,index) => <Item
                            content={c}
                            key={index}
                            carouselFor={carouselFor}
                        />)}
                    </Carousel>

                    {/*<Carousel vacancies={getVac()} prev={prev} next={next}/>*/}

                    <div className="pre-search-text">
                        Найди работу в удобном месте
                    </div>
                    <div >
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
                            {myVacancies.length > 0 ?
                                myVacancies.map(ad =>
                                    <div key={ad.id}>
                                        <AdItem
                                            vacancy = {ad}
                                            respondHand={respondHandler}
                                            cancelHandler={cancelHandler}
                                        />
                                    </div>
                                ) : ""}
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
                                <p className="text-top-map">
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

                <div className="search-work-wrapper" hidden={user}>
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