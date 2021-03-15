import React, {useState, useMemo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import './styles1/VacancieForMe.css';
import AdItem from "../AdItem";
import Ad from '../employeesForCompany/VacanciesText'
import {Map, Placemark, YMaps} from "react-yandex-maps";
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";


export default function VacanciesForMe() {

    let tempCords=localStorage.getItem("center")
    console.log(tempCords)
    const [zoom, setZoom] = useState(7)
    const [address, setAddress] = useState('')
    const [ymaps, setYmaps] = useState()

    const [coordinates, setCoordinates] = useState([])
    // Состояние: вид работы: постоянная или подработка
    const [workType, setWorkType] = useState('')
    // состояние карты
    const [mapHid, setMapHid] = useState(true)
    const [buttonValue, setButtonValue] = useState("Показать на карте")


    const [center, setCenter] = useState(tempCords,)
    const mapState = useMemo(() =>
            ({ center, zoom, controls: ['zoomControl', 'fullscreenControl']}),
        [center, zoom])


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

    function addressHandler(event) {
        setAddress(event.target.value)
    }
    function clearTheSearchField() {
        setAddress('')
    }
    // разобраться!
    function findPlace() {
        console.log("Клик по кнопке")
        // let coords = []
        // {Адрес и радиус} отпраить на бэк, получить список адресов в указанном радиусе - data
        // после, пройтись по массиву адресов - data
        // создать массив из координат - сoordinates
        // data.map(function (add) {
        //     ymaps.geocode(add.address)
        //         .then(result => coords.push( result.geoObjects.get(0).geometry.getCoordinates()))
        // })
        // setCoordinates(coords)

        ymaps.geocode(address)
            .then(result => setCenter( result.geoObjects.get(0).geometry.getCoordinates()))
    }
    // radio
    const RedRadio = withStyles({
        root: {
            color: '#f04d2d',
            '&$checked': {
                color: '#f04d2d',
            },
        },
        checked: {},
    })((props) =>
        <Radio color="default" {...props} style={{padding: '0', margin: '0 10px 0 10px'}}/>);
    // Функция выбора типа работы: Постоянная работа или Подработка
    const workTypeHandler =(event) => {
        setWorkType(event.target.value)
        console.log(workType)
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


    return(
        <div>
            <Container maxWidth="lg">
                <div style={{padding: "20px 0px 30px 0px", textTransform: 'uppercase',
                    textAlign: "center", fontSize: "1.2rem",
                    fontWeight: "600", }}>
                    найти работу в удобном месте
                </div>
                <div style={{textAlign: "center",}}>
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

                <div className="radio-gr">
                    <div>
                        <RedRadio
                            checked={workType === 'Постоянная работа'}
                            onChange={workTypeHandler}
                            value="Постоянная работа"
                            // name="radio-button-demo"
                            // inputProps={{ 'aria-label': 'C' }}
                        /> Полная занятость
                    </div>
                    <div>
                        <RedRadio
                            checked={workType === 'Подработка'}
                            onChange={workTypeHandler}
                            value="Подработка"
                            // name="radio-button-demo"
                            // inputProps={{ 'aria-label': 'C' }}
                        /> Подработка
                    </div>
                </div>
                <div className="add-point">
                    <div>
                        <IconButton style={{margin: '0 5px 0 10px', padding: '0',}}>
                            <AddCircleOutlineIcon style={{color: '#f04d2d'}} />
                        </IconButton>
                        <span style={{margin: '0 10px 0 10px',  }}>
                                        Добавить точку поиска
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

                <div style={{display: "flex", justifyContent: "space-around", marginBottom: "50px"}}>
                    <div>
                        <div>
                            <AdItem vacancy = {Ad[0]}/>
                        </div>
                        <div>
                            <AdItem vacancy = {Ad[1]}/>
                        </div>
                    </div>
                </div>


            </Container>


        </div>
    )
}