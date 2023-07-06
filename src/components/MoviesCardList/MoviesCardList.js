import './MoviesCardList.css'
import { useLocation } from 'react-router-dom'
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList() {
    const location = useLocation()

    return(
        <>
        <ul className="movies-card-list">
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
        </ul>
        {location.pathname === "/movies" ? <button className='movies-card-list__button-more'> Еще</button> : ""}
        </>
    )
}

export default MoviesCardList