import React from 'react';
import './styles1/Carousel.css'

export default function Item(props) {
    const content = props.content

    return(
        <div className="carousel-vac-wrapper"
             key={content.index}
        >
            <div className="vacancy-name this_link"
                 // onClick={() => alert("Eeeeeeeeee")}
            >
                <div className="vacancy-name-inner">
                    {content.name}
                </div>
            </div>

            <div className={`vacancy-count ${props.carouselFor==='Work' ? 'vac-count-red' : 'vac-count-grey'}`}>
                <div className="vacancy-name-inner">
                    {content.count}
                    <span className="text">&nbsp;вакансий</span>
                </div>
            </div>
        </div>
    )
}