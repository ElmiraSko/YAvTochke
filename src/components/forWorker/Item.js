import React from 'react';
import './styles1/Carousel.css'

export default function Item(props) {
    const context = props.context
    return(
        <div className="carousel-vacancy-wrapper"
             key={context.name}
        >
            <div className="vacancy-name">
                <div className="vacancy-name-inner">
                    {context.name}
                </div>
            </div>

            <div className="vacancy-count">
                <div className="vacancy-name-inner">
                    {context.count}
                    <span className="text">&nbsp;вакансий</span>
                </div>
            </div>
        </div>
    )
}