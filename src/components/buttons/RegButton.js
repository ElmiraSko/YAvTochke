import React from 'react';
import './RegButton.css'

export default function WelcomeWorker(props) {
    return(
        <div style={{ margin: "15px 0px", }}>
        <button  className="reg-button"
                     onClick={props.subHandler}
                     disabled={!props.formValid}
            >
            {props.buttonText}</button>
        </div>
    )
}