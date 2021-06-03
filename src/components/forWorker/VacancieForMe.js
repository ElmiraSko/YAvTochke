import React, {useState, useMemo, useEffect} from 'react';
import Container from "@material-ui/core/Container";
import './styles1/VacancieForMe.css';
import AdItem from "../AdItem";
import Ad from '../employeesForCompany/VacanciesText'
import {Circle, Map, Placemark, YMaps} from "react-yandex-maps";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SearchPointWithCheckbox from "../SearchPointWithCheckbox";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";


export default function VacanciesForMe() {

    // получили из хранилища координаты центра карты
    // let tempCords=localStorage.getItem("center")

    const [zoom, setZoom] = useState(10)
    const [address, setAddress] = useState('')
    const [ymaps, setYmaps] = useState()

    const [coordinates, setCoordinates] = useState([])
    // Состояние: вид работы: постоянная или подработка
    const [fullTimeJob1, setFullTimeJob1] = useState({
        fullTime: false,
    })
    const [tempTimeJobs1, setTempTimeJobs1] = useState({
        tempTime: false,
    })
    // Состояние: вид работы: постоянная или подработка
    const [fullTimeJob2, setFullTimeJob2] = useState({
        fullTime: false,
    })
    const [tempTimeJobs2, setTempTimeJobs2] = useState({
        tempTime: false,
    })
    // состояние карты
    const [mapHid, setMapHid] = useState(true)
    const [buttonValue, setButtonValue] = useState("Показать на карте")

    // Состояние бегунка, используем для карты, значение меняется от первого адреса ко второму адресу
    const [sliderValue, setSliderValue] = useState(1)
    // для отцентровки карты, по дефолту [55.751574, 37.573856]
    const [center, setCenter] = useState([55.751574, 37.573856])
    const mapState = useMemo(() =>
            ({ center, zoom, controls: ['zoomControl', 'fullscreenControl']}),
        [center, zoom])
    // скрыть или показать дополнительную форму поиска
    const [newPointHidden, setNewPointHidden] = useState(true);
    // адреса поиска
    const [searchFirstAddress, setSearchFirstAddress] = useState("");
    const [searchSecondAddress, setSearchSecondAddress] = useState("");
    // Состояние бегунка
    const [sliderValueFirst, setSliderValueFirst] = useState(1)
    const [sliderValueSecond, setSliderValueSecond] = useState(1)
    const firstId = 'radius1'
    const secondId = 'radius2'
    // логическое значение - показывать или скрыть иконку добавления точки
    const [addPointState, setAddPointState] = useState(false)
    const [deletePointState, setDeletePointState] = useState(true)

    // функция для бегунка 1
    function getFirstRadius() {
        const size = document.getElementById("radius1").value;
        setSliderValueFirst(size)
    }
    // функция для бегунка 2
    function getSecondRadius() {
        const size = document.getElementById("radius2").value;
        setSliderValueSecond(size)
    }
    // добавить новую точку поиска
    function addNewPoint() {
        setNewPointHidden(false) // открыли форму для новой точки
        setAddPointState(true)  // скрыли иконку добавления новой точки
        setDeletePointState(false) // открыли иконку для удаления
    }
    // скрыть форму для новой точки-адреса
    function deleteNewPoint() {
        deleteAddressInMap(searchSecondAddress)
        setNewPointHidden(true)
        setAddPointState(false)
        setDeletePointState(true)
        setSearchSecondAddress('') // очистили второй адрес
        setSliderValueSecond(0) // очистили второй радиус
        setFullTimeJob2({fullTime: false,}) // очистили второй выбор
        setTempTimeJobs2({tempTime: false,}) // очистили второй выбор

    }
    // для текстового поля адреса первой точки
    function searchFirstHandler(event) {
        setSearchFirstAddress(event.target.value)
    }
    // для текстового поля адреса второй точки
    function searchSecondHandler(event) {
        setSearchSecondAddress(event.target.value)
    }

    // обработка кнопки Найти точку по адресу
    function findPlace1() {
        ymaps.geocode(searchFirstAddress)
            .then(result => setCenter( result.geoObjects.get(0).geometry.getCoordinates()))
        coordinates.push(center)
    }
    function findPlace2() {
        ymaps.geocode(searchSecondAddress)
            .then(result => setCenter( result.geoObjects.get(0).geometry.getCoordinates()))
        coordinates.push(center)
    }
    // функция удаления первого адреса
    function deletePoint() {
        deleteAddressInMap(searchFirstAddress) // перебор массива координат карты

        setFullTimeJob2({fullTime: false,}) // очистили второй выбор
        setTempTimeJobs2({tempTime: false,}) // очистили второй выбор

        setSearchFirstAddress(searchSecondAddress) // первый адрес заменили вторым
        setSliderValueFirst(sliderValueSecond) // первый радиус заменили вторым
        setFullTimeJob1(fullTimeJob2) // передали "Тип работы" из второго выбора в первый
        setTempTimeJobs1(tempTimeJobs2)  // передали "Тип работы" из второго выбора в первый

        setAddPointState(false) // открыли иконку добавления точки
        setNewPointHidden(true) // скрыли вторую форму
        setDeletePointState(true) // скрыли кнопку удаления

        setSearchSecondAddress('') // очистили второй адрес
        setSliderValueSecond(0) // очистили второй радиус
    }
    function deleteAddressInMap(delAddress) {
        let ind = coordinates.indexOf(delAddress, 0);
        coordinates.splice(ind, 1);
    }

    useEffect(() => {
        if (newPointHidden) { // если форма для второй точки скрыта
            setSliderValue(sliderValueFirst) // используем первый радиус
        }
        else {
            setSliderValue(sliderValueSecond)
        }
    }, [newPointHidden, sliderValueFirst ,sliderValueSecond])

    // получить текущее место, отцентровать карту, при первой загрузке страницы
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
            setCenter(coords)
        });
    }

    // временная функция-заглушка, для работы с вакансиями
    // состояние нашей страницы: массив вакансий, получим с сервера
    // после того, как отрисуется этот компонент Responses отработает useEffect()
    const [myVacancies, setMyVacancies] = useState([])
    // вспомогательный флаг, чтоб происходила перересовка компонента
    const[paint, setPaint] = useState(false)


    //выполнится после монтирования в DOM
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


    // заполняем массив точек, для отображения на карте
    function savePlace() {
        // let coords = []
        // {Адрес и радиус} отпраить на бэк, получить список адресов в указанном радиусе - data
        // после, пройтись по массиву адресов - data
        // создать массив из координат - сoordinates
        // data.map(function (add) {
        //     ymaps.geocode(add.address)
        //         .then(result => coords.push( result.geoObjects.get(0).geometry.getCoordinates()))
        // })
        // setCoordinates(coords)
        // ymaps.geocode(address)
        ymaps.geocode(searchFirstAddress)
            .then(result => setCenter( result.geoObjects.get(0).geometry.getCoordinates()))
    }

    // Функция выбора типа работы: Постоянная работа
    const fullTimeHandler1 =(event) => {
        setFullTimeJob1({[event.target.name]: event.target.checked})
    }
    // Функция выбора типа работы: Подработка
    const tempTimeHandler1 =(event) => {
        setTempTimeJobs1({[event.target.name]: event.target.checked})
    }
    // Функция выбора типа работы: Постоянная работа
    const fullTimeHandler2 =(event) => {
        setFullTimeJob2({[event.target.name]: event.target.checked})
    }
    // Функция выбора типа работы: Подработка
    const tempTimeHandler2 =(event) => {
        setTempTimeJobs2({[event.target.name]: event.target.checked})
    }
    //==== показать или скрыть карту ====
    function showTheMap() {
        if (mapHid){
            setButtonValue("Скрыть карту")
            setMapHid(false)
        } else {
            setButtonValue("Показать на карте")
            setMapHid(true)
        }
    }

    // для якорной ссылки
    useEffect(() => {
        const hash = window.location.hash
        // Check if there is a hash and if an element with that id exists
        const el = hash && document.getElementById(hash.substr(1))
        if (el) {
            // el.scrollIntoView({behavior: "auto"}) // этот вариант не поддерживается в
            // браузерах Internet Explorer, Сафари, Safari на iOS
            el.scrollIntoView() // поддерживают все
        }
    }, [window.location.hash]) // Fires every time hash changes



    return(
        <div>
            <Container maxWidth="lg">
                <div style={{padding: "20px 0px 30px 0px", textTransform: 'uppercase',
                    textAlign: "center", fontSize: "1.2rem",
                    fontWeight: "600", }}>
                    найти работу в удобном месте
                </div>
                <div hidden={!newPointHidden}>
                    <SearchPointWithCheckbox
                        address={searchFirstAddress}
                        addressHandler={searchFirstHandler}
                        findPlace={findPlace1}
                        fullTimeJob={fullTimeJob1.fullTime}
                        fullTimeHandler={fullTimeHandler1}
                        tempTimeJobs={tempTimeJobs1.tempTime}
                        tempTimeHandler={tempTimeHandler1}
                        sliderValue={sliderValueFirst}
                        getRadius={getFirstRadius}
                        id={firstId}
                    />
                </div>
                <div style={{padding: "20px 0px 30px 0px",
                    textAlign: "left", fontSize: "1.1rem", width: '580px', marginLeft: 'auto', marginRight: 'auto',
                    fontWeight: "500", }} hidden={newPointHidden}>

                    {searchFirstAddress ? `Адрес: ${searchFirstAddress}` : 'Адрес не выбран'}
                    <div className="flex-between">
                        <div>
                            {fullTimeJob1.fullTime? 'Полная занятость, ' : ''}
                            {tempTimeJobs1.tempTime? 'Подработка, ' : ''} {'Радиус: '} {sliderValueFirst} {' км'}
                        </div>
                        <div >
                            <IconButton style={{margin: '0 5px 0 15px',
                                padding: '0px', backgroundColor: 'transparent'}}
                                        onClick={deletePoint} >
                                <HighlightOffIcon style={{color: '#f04d2d'}} />
                            </IconButton>
                        </div>
                    </div>
                    <hr/>
                </div>

                <div hidden={newPointHidden}>
                    <SearchPointWithCheckbox
                        address={searchSecondAddress}
                        addressHandler={searchSecondHandler}
                        findPlace={findPlace2}
                        fullTimeJob={fullTimeJob2.fullTime}
                        fullTimeHandler={fullTimeHandler2}
                        tempTimeJobs={tempTimeJobs2.tempTime}
                        tempTimeHandler={tempTimeHandler2}
                        sliderValue={sliderValueSecond}
                        getRadius={getSecondRadius}
                        id={secondId}
                    />
                </div>

                <div className="add-point">
                    <div hidden={addPointState}>
                        <IconButton style={{margin: '0 5px 0 10px',
                            padding: '0', backgroundColor: 'transparent'}}
                                    onClick={addNewPoint} >
                            <AddCircleOutlineIcon style={{color: '#f04d2d'}} />
                        </IconButton>
                        <span style={{margin: '0 10px 0 10px',  }}>
                                        Добавить точку поиска
                                    </span>
                    </div>
                    <div hidden={deletePointState}>
                        <IconButton style={{margin: '0 5px 0 15px',
                            padding: '0px', backgroundColor: 'transparent'}}
                                    onClick={deleteNewPoint}
                        >
                            <HighlightOffIcon style={{color: '#f04d2d'}} />
                        </IconButton>
                        <span style={{margin: '0 10px 0 10px',  }}>
                                        Удалить вторую точку поиска
                                    </span>
                    </div>



                    <button className="show-map-b"
                            onClick={showTheMap}
                    >{buttonValue}</button>
                </div>

                <div hidden={mapHid}>>
                    <YMaps
                        query={{
                            apikey: '7d5617ab-0b68-4e1b-927b-15096a804e10',
                        }}>
                        <div style={{margin: "auto",}}>
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

                                className="my-maps"
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
                                           // properties={{
                                           //     iconContent: 'Я здесь',
                                           //     hintContent: 'Это',
                                           //     balloonContent: 'Я здесь',
                                           // }}
                                           options={{
                                               // The placemark's icon will stretch to fit its contents.
                                               preset: 'islands#darkOrangeDotIcon',
                                           }}
                                />


                                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}

                            </Map>
                        </div>
                    </YMaps>
                </div>

                <div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>
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


            </Container>


        </div>
    )
}