import './MoviesCardList.css'
import { useLocation } from 'react-router-dom'
import MoviesCard from "../MoviesCard/MoviesCard"
import { useState, useEffect } from 'react'

function MoviesCardList({ filteredMovies, defineLikedMovies, savedMovies, likedMovies, removeMovie, likeMovie}) {
    const location = useLocation()

    function defineNumberOfStartCards() {
        const width = window.innerWidth
        if (width < 768 ) {
            return 5
        }
        if (width < 1280) {
            return 8
        }

        return 12
    }
    function defineNumberOfMoreItems() {
        const width = window.innerWidth;

        if(width < 1280) {
            return 2
        }

        return 3
    }


    const [numberOfCardsShow, setNumberOfCardsShown] = useState(defineNumberOfStartCards())
    const [numberOfMoreCards, setNumberOfMoreItems] = useState(defineNumberOfMoreItems())
   
    const showMore = () => {
        if (numberOfCardsShow + numberOfMoreCards <= filteredMovies.length) {
            setNumberOfCardsShown(numberOfCardsShow + numberOfMoreCards)
        } else {
            setNumberOfCardsShown(filteredMovies.length)
        }
    }

    const updateMoreItems = () => {
        setNumberOfMoreItems(defineNumberOfMoreItems)
    }

    useEffect(() => {
        window.addEventListener('resize', updateMoreItems);
        return () => window.removeEventListener('resize', updateMoreItems);
    });



    function renderEmptySearch() {
        return (
            <p className='movies-card-list__empty'>Ничего не найдено</p>
        )
    }


function renderContent() {

    return(
        <>
        <ul className="movies-card-list">
            {filteredMovies.slice(0,numberOfCardsShow).map((movie) => (
            <MoviesCard key={movie.id || movie._id || movie.movieId} 
            movie={movie} 
            defineLikedMovies={defineLikedMovies} 
            savedMovies={savedMovies} 
            removeMovie={removeMovie}
            likeMovie={likeMovie}
            />)
            )
            }
        </ul> 
        {numberOfCardsShow < filteredMovies.length && <button className='movies-card-list__button-more' onClick={showMore}>Еще</button>}
        </>
    )
}
    

function renderMovies() {
    if (location.pathname === '/saved-movies') {
        return renderContent()
    } else {
        return (localStorage.getItem('filteredMovies')) ? (filteredMovies.length === 0 ? renderEmptySearch() : renderContent()) 
        : 
        <></>
    }
}
return renderMovies()
}

export default MoviesCardList