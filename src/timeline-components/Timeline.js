import React from 'react'
import Movie from './Movie'
import MovieData from './MovieData'
import branched from '../assets/branched.png'

const Timeline = ({ setChosenUrl, overthrown }) => {
    let data = MovieData();
    if (!overthrown) {
        return (
            data.length > 0 && (
                <div className="timeline-container">
                    {data.map((movie, idx) => (
                        <Movie data={movie} setChosenUrl={setChosenUrl} key={idx} />
                    ))}
                </div>
            )
        )
    } else {
        return (
            <img src={branched} alt="branched timeline" className="branched"/>
        )
    }
}

export default Timeline
