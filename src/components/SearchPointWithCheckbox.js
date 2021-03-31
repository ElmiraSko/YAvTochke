import React from 'react';
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";

export default function SearchPointWithCheckbox(props) {
    const RedCheckbox = withStyles({
        root: {
            color: '#f04d2d', padding: '0', margin: '10px',
            '&$checked': {
                color: '#f04d2d',
            },
        },
        checked: {},
    })((props) =>
        <Checkbox color="default" {...props} />);

    return(
        <div>
            <div style={{textAlign: "center",}}>
                <input className="search-work-input-2"
                       placeholder="Город, улица и номер дома, где хотите работать"
                       value={props.address}
                       onChange={props.addressHandler}
                       // onClick={props.clearTheSearchField}
                />
                <input type="submit" className="search-work-button-2"
                       value="Найти"
                       onClick={props.findPlace}
                />
            </div>

            <div className="radio-gr">
                <div>
                    <RedCheckbox
                        checked={props.fullTimeJob}
                        onChange={props.fullTimeHandler}
                        name="fullTime"
                    /> Полная занятость
                </div>
                <div>
                    <RedCheckbox
                        checked={props.tempTimeJobs}
                        onChange={props.tempTimeHandler}
                        name="tempTime"
                    /> Подработка
                </div>
            </div>

            <div style={{ display: 'flex', width: '400px', margin: 'auto',}}>
                <input type="range" className="slider-2"
                       min="0" max="10" step="0.1" id={props.id}
                       value={props.sliderValue}
                       onInput={props.getRadius}
                />
            </div>

            <div style={{width: '400px', margin: 'auto',
                display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', }} >
                <div style={{margin: '5px 0 15px 0'}}>0</div>
                <div  style={{margin: '5px 0 15px 0'}}>
                    <b> {props.sliderValue} км </b>
                </div>
                <div  style={{margin: '5px 0 15px 0'}}>10</div>
            </div>
        </div>
    )
}
