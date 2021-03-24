import React from 'react';
import './styles1/Carousel.css'
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';

export function Carousel(props) {

    const vac = props.vacancies
    const prev = props.prev
    const next = props.next
    return (
        <div>
            {/*<button className="vacancy-button" onClick={prev} >Prev</button>*/}
            <div className="carousel-wrapper">
                <button className="vacancy-button" onClick={prev} >
                    <ChevronLeftOutlinedIcon />
                </button>
                {vac.map(item => (
                    <div className="carousel-vacancy-wrapper" key={item.name}>
                        <div className="vacancy-name">
                            <div className="vacancy-name-inner">{item.name}</div>
                        </div>

                        <div className="vacancy-count">
                            <div className="vacancy-name-inner">
                                {item.count} <span className="text">вакансий</span>
                            </div>
                        </div>
                    </div>
                ))}
                <button className="vacancy-button" onClick={next}>
                    <ChevronRightOutlinedIcon />
                </button>
            </div>

        </div>
    )
}