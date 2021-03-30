import React from 'react';
import './styles1/SearchWorkSteps.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EditIcon from '@material-ui/icons/Edit';
import EmailIcon from '@material-ui/icons/Email';

export default function SearchWorkSteps(props) {
    const content = props.content
    return(
        <div className="wrapper">
            <div className="title-steps">
                {content.title}
            </div>
           <div className="wr-stp">
               <div className="wr-stp-div">
                   {content.red1}
               </div>
               <div className="wr-stp-div">
                   {content.red2}
               </div>
               <div className="wr-stp-div">
                   {content.red3}
               </div>
           </div>

            <div className="how-title">
                Как найти:
            </div>
            <div className="how-wrapper" >
                <div className='one'>
                    <div className='two'>
                        <div className='steps-icons'>
                            <LocationOnIcon style={{width: '36px', height: '36px'}} />
                        </div>
                        {content.grey1}
                    </div>
                </div>
                <div className='one'>
                    <div className='two'>
                        <div className='steps-icons'>
                            <EditIcon style={{width: '36px', height: '36px'}} />
                        </div>
                        {content.grey2}
                    </div>
                </div>
                <div className='one'>
                    <div className='two'>
                        <div className='steps-icons'>
                            <EmailIcon  style={{width: '36px', height: '36px'}} />
                        </div>
                        {content.grey3}
                    </div>
                </div>
            </div>
        </div>
    )
}