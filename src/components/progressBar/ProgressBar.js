import React from 'react';
import './ProgressBar.css'
export default function ProgressBar(props) {

    return(
        <div style={{ width: '300px',
            marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', }}>
            <progress value={props.value} max="100" id="progressbar">А</progress>
            <span style={{position: 'relative',  top: '-20px'}}>{props.value}%</span>
        </div>
    )
}