import React from 'react';

const Movie = ({ data, setChosenUrl }) => {

    function updateUrl() {
        let url = data.url
        setChosenUrl({ url })
    }
    
    return (
        <div className="timeline-item">
            <button 
                className="timeline-item-content" 
                onClick={updateUrl}
            >
                {data.image}
                <p>{data.title}</p>
            </button>
        </div>
    )
}

export default Movie;