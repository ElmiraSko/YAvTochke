import React from 'react';
import './SimpleButton.css'
import {NavLink} from "react-router-dom";

export default function SimpleButton(props) {
    return(
        <div style={{ margin: "15px 0px", }}>
            <NavLink className='button_body'
                     to={props.url}
            >
                {props.buttonText}
            </NavLink>
        </div>
    )
}