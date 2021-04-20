import React, {useEffect, useState} from 'react';
import './SmallProgressBar.css'
export default function ProgressBar(props) {

    const [color, setColor] = useState('#505350')

    useEffect(() =>{
        if(props.value > 56) {setColor('#ffffff')}
        console.log(props.value)
    }, [props.value])

    return(
        <div style={{ width: '200px',
            marginLeft: 'auto', marginRight: 'auto', marginTop: '7px', }}>
            <progress value={props.value} max="100" className="small-progress">А</progress>
            <span style={{position: 'relative',  top: '-20px', color: `${color}`}}>{props.value}%</span>
        </div>
    )
}