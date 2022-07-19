import React, { useSate, useEffect, useState } from 'react'

function SlideShow(props) {
    const { films } = props
    const [currentFilm, setCurrentFilm] = useState(films[0])
    const [currentFilmIndex, setCurrentFilmIndex] = useState(0)
    useEffect(() => {
        setCurrentFilm(films[currentFilmIndex])
    }, [films, currentFilmIndex])
    return (
        <div class="movie-card">
            <h2>{currentFilm.title}</h2>
            <p>{currentFilm.original_title}</p>
            <p>{currentFilm.release_date}</p>
            <p>{currentFilm.description}</p>
            <p>{currentFilmIndex}</p>
            <button onClick={() => { setCurrentFilmIndex(currentFilmIndex - 1) }}>Go Back</button>
            <button onClick={() => { setCurrentFilmIndex(0) }}>Start Over</button>
            <button onClick={() => { setCurrentFilmIndex(currentFilmIndex + 1) }}>Go Forward</button>
        </div>
    )
}

export default SlideShow