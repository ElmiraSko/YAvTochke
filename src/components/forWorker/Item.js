import React from 'react';
import './styles1/Carousel.css'

export default function Item(props) {
    const content = props.content
    return(
        <div className="carousel-vacancy-wrapper"
             key={content.name}
        >
            <div className="vacancy-name">
                <div className="vacancy-name-inner">
                    {content.name}
                </div>
            </div>

            <div className="vacancy-count">
                <div className="vacancy-name-inner">
                    {content.count}
                    <span className="text">&nbsp;вакансий</span>
                </div>
            </div>
        </div>
    )
}