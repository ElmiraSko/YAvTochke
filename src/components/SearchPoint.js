import React from 'react';

export default function SearchPoint(props) {

    return(
        <div style={{display: "flex", justifyContent: "flex-start",}}>
            <div style={{width: '20%',}}>
                <div  style={{margin: '5px 0 15px 15px'}}>
                    Адрес:
                </div>
                <div style={{margin: '5px 0 15px 15px'}}>
                    Радиус:
                </div>
            </div>

            <div style={{width: '100%',}}>
                <div style={{margin: '5px 0 15px 0px'}}>
                    <input type="text" className="right-address-input"
                           value={props.searchPointAddress}
                           onChange={props.searchHandler}
                           autoComplete="off"
                    />
                </div>

                <div style={{margin: '5px 0 15px 0px', display: "flex" }}>
                    <input type="text" className="sliderValue"
                           value={props.sliderValue} readOnly={true}/>
                    <span style={{margin: '0 10px 0 10px'}}>км</span>
                    <div style={{width: '70%', margin: '0 15px 0 15px',}}>
                        <input type="range" className="slider"
                               min="0" max="10" step="0.1"  id={props.id}
                               value={props.sliderValue}
                               onInput={props.getRadius}
                        />
                    </div>

                </div>
            </div>
        </div>

    )
}