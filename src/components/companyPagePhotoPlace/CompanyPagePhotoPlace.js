import React from 'react';
import addPhoto from "../../img/Add-a-photo.png";
import SmallProgressBar from "../progressBar/SmallProgressBar";
import './CompanyPagePhotoPlace.css'

export default function CompanyPagePhotoPlace(props) {

    return(
        <div className="wrapper_">
            <div className="photo_wrap_">
                <img src={addPhoto} alt="logo"
                     style={{width: '2.0rem', marginTop: '30px'}}/>
            </div>

            <div className="photo_right_place">
                <div className='comp-name_'>
                    {props.compName}
                </div>
                <div className='prof'>
                    Профиль заполнен на
                </div>
                <div >
                    <SmallProgressBar value={props.progressValue}/>
                </div>
            </div>
        </div>
    )
}