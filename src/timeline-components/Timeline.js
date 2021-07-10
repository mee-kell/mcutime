import React from 'react'
import Movie from './Movie'
import MovieData from './MovieData'

const Timeline = () => {
    let data = MovieData();
    return (
        data.length > 0 && (
            <div className="timeline-container">
                {data.map((movie, idx) => (
                    <Movie data={movie} key={idx} />
                ))}
            </div>
        )
    )
}

export default Timeline
