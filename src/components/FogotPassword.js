import React from 'react';
import { Link } from 'react-router-dom';

export default function FogotPassword() {

    return(
        <div style={{textAlign: 'center'}}>
            <h1>
                В разработке
            </h1>
            <Link to={"/"} style={{color: '#525252'}}>
                Вернуться на главную
            </Link>
        </div>        
    )
}