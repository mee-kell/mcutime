import React from 'react';

const Movie = ({ data }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                {data.image}
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                    {data.title}
                </a>
            </div>
        </div>
    )
}

export default Movie;