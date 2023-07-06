import './MoviesCard.css'
import testfilm from '../../images/testfilm.png'
import { useLocation } from 'react-router-dom'

function MoviesCard() {

  const location = useLocation()

    return(
        <li className="movies-card">
                <div className='movies-card__container'>
                <div className="movies-card__name-section">
                    <p className="movies-card__name">calling</p>
                    <span className="movies-card__duration">1ч 49мин</span>
                </div>
                {location.pathname === '/saved-movies' 
                ? 
                <button className='movies-card__remove' type="button"/> 
                : 
                <button className="movies-card__like movies-card__like_active" type="button"/>
                }
                </div>
                <img className="movies-card__image" src={testfilm} alt="имя фильма"></img>
        </li>
    )
}

export default MoviesCard