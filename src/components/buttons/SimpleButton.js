import React from 'react';
import './RegButton.css'
import {Button} from "@material-ui/core";

export default function SimpleButton(props) {
    return(
        <div style={{ margin: "15px 0px", }}>
            <Button style={{backgroundColor: "#f04d2d", width: '150px',
                color: "white", margin: "10px 10px 10px 5px", }}
                     href={props.url}
            >
                {props.buttonText}
            </Button>
        </div>
    )
}