import React from 'react';

export default function ButtonForAdItem(props) {
    return(
        <button className={`sent-button ${props.responseSent(props.sent)} `}
                onClick={props.respond}
        > {props.jobsButton}</button>
    )
}