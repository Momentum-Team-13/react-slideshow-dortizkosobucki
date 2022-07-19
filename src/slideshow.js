import React, { useSate, useEffect, useState } from 'react'

function SlideShow(props) {
    const { films } = props
    const [currentFilm, setCurrentFilm] = useState(films[0])
    const [currentFilmIndex, setCurrentFilmIndex] = useState(0)
    useEffect(() => {
        if (currentFilmIndex == 0) {
            document.getElementById("Go Back").disabled = true;
            document.getElementById("Start Over").disabled = true;
        }
        setCurrentFilm(films[currentFilmIndex])
    }, [films, currentFilmIndex])

    return (
        <div class="movie-card">
            <h2>{currentFilm.original_title}</h2>
            <h2>{currentFilm.title}</h2>
            <p>{currentFilm.release_date}</p>
            <img src={currentFilm.image}></img>
            <p>{currentFilm.description}</p>
            <p>{currentFilmIndex}</p>
            <button id="Go Back" onClick={() => { setCurrentFilmIndex(currentFilmIndex - 1) }}>Go Back</button>
            <button id="Start Over" onClick={() => { setCurrentFilmIndex(0) }}>Start Over</button>
            <button id="Go Forward" onClick={() => { setCurrentFilmIndex(currentFilmIndex + 1) }}>Go Forward</button>
        </div>
    )
}

export default SlideShow