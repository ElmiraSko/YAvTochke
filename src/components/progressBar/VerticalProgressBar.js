import React, {useEffect, useState} from 'react';
import './VerticalProgressBar.css'


export default function VerticalProgressBar(props) {

    const [color, setColor] = useState('#505350')

    const v = props.value
    console.log(v)
    console.log(v.response)

    // useEffect(() =>{
    //     if(props.value > 56) {setColor('#ffffff')}
    //     console.log(props.value)
    // }, [props.value])

    return(
        <div className="vert-wrapper">
            <div className="dd2">
                <progress value={v.got} max={v.all} className="vertical-progress">А</progress>
                <div className="dd">
                    <span style={{position: 'relative',   marginLeft: '70px',
                        top: '-60px',  color: '#fff',}}>
                        {v.response > 0 ? v.response : ' '}
                    </span>
                </div>

                    {/*   //Нижнее - значение value  */}
                    <div className="dd">
                        <span style={{position: 'relative',  left: '68px', color: '#fff', margin: 'auto'}}>
                            {v.got > 0 ? v.got : ' '}
                        </span>
                    </div>
            </div>
            <div>
                <span style={{position: 'relative',  left: '118px', width: '20px', height: '20px',
                    bottom: '88px',  color: '#222222'}}>
                    {v.got_percent > 0 ? v.got_percent+'%' : ' '}
                </span>
                <span style={{position: 'relative',  left: '92px', bottom: '28px', width: '20px', height: '20px',
                    color: `${color}`}}>
                    {v.response_percent > 0 ? v.response_percent+'%' : ' '}
                </span>
            </div>

        </div>
    )
}