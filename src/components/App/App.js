import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import Main from '../Landing/Main';
import './App.css'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'; 
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Layout from '../Layout/Layout';
import Preloader from '../Preloader/Preloader';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as moviesApi from '../../utils/MoviesApi'
import * as mainApi from '../../utils/MainApi';
import * as filters from "../../utils/FIlters"
import * as auth from "../../utils/auth"
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

function App() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email: '',
    name: '',
    _id: '',
})

const [savedMovies, setSavedMovies] = useState([])
const [savedFilteredMovies, setSavedFilteredMovies] = useState([])
const [shortsIsChecked, setShortsIsChecked] = useState(false)
const [shortsSavedIsChecked, setShortsSavedIsChecked] = useState(false)
const [shortMovies, setShortMovies] = useState([])
const [shortMoviesSaved, setShortMoviesSaved] = useState([]);
const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
const [infoToolTipType, setInfoToolTipType] = useState(false);
const [infoToolTipText, setInfoToolTipText] = useState('');

const navigate = useNavigate()
const [loggedIn, setLoggedIn] = useState(false);


//обработчик закрытия попапов
function closeAllPopups() {
  setIsInfoToolTipOpen(false)
  setInfoToolTipText('');
  setInfoToolTipType(false);
}

useEffect(() => {
  function closeByEscape(e) {
    if (e.key === 'Escape') {
      closeAllPopups()
    }
  }
  if(isInfoToolTipOpen) {
    document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    }
  }
}, [isInfoToolTipOpen])

function closeInfoToolTip() {
  setIsInfoToolTipOpen(false);
}


function showErrorPopup(errorMessage = `Произошла ошибка.
Попробуйте еще раз.`) {
    setInfoToolTipType(false);
    setInfoToolTipText(errorMessage);
    setIsInfoToolTipOpen(true);
}

// обработчик регистрации
  function handleRegistration(data) {
    setIsLoading(true)
    auth.register(data)
    .then(() => {
      handleAuthorize({
        email:data.email,
        password: data.password
      })
    }).catch((err) => {
      showErrorPopup(`При регистрации пользователя произошла ошибка.`)})

      .finally(() => {
        setIsLoading(false)
      })
  }

  // обработчик авторизации
  function handleAuthorize(data) {
    setIsLoading(true)
    auth.login(data).then((res) => {
      if(res.token) {
        localStorage.setItem('token' , res.token);
        setLoggedIn(true);
        navigate("/movies", {replace: true}) 
    }
    })
    .catch((err) => {
     showErrorPopup(`При авторизации произошла ошибка.`)})
    .finally(() => {
      setIsLoading(false)
    })
  }

  // обработчик сессии
  function checkAuthorization() {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkTokenVerifcation(token)
        .then((res) => {
          setCurrentUser(res.data)
          setLoggedIn(true)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    checkAuthorization()
  }, [])

  //выход из профиля

  function handleLogout() {
    localStorage.removeItem('movies');
    localStorage.removeItem('searchKey');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('token');
    localStorage.removeItem('shortMovies');
    localStorage.removeItem('shortsIsChecked');
    setLoggedIn(false)
    setCurrentUser({
      name: '',
      email: '',
      _id: ''
    })
    setSavedMovies([])
    setFilteredMovies([])
    setShortsSavedIsChecked(false);
    setShortMoviesSaved([]);
    setSavedFilteredMovies(false);
    setFilteredMovies([]);
    setShortMovies([]);
  }


  //поиск карточек по названию
  function handleFindClickMovies(e) {
    e.preventDefault();
    const moviesArray = JSON.parse(localStorage.getItem('movies'))
    const inputValue = e.target.searchFormInput.value
    const filteredMovies = filters.filterByKeyWord(inputValue, moviesArray)
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    localStorage.setItem('searchKey', inputValue)
    setFilteredMovies(filteredMovies)

    if (shortsIsChecked) {
      const shortMovies = filters.findShorts(filteredMovies);
      setShortMovies(shortMovies);
      localStorage.setItem('shortMovies', JSON.stringify(shortMovies))
    }
  }

  //поиск сохраненных карточек
  function handleFindClickSaved(e) {
    e.preventDefault();
    const inputValue = e.target.searchFormInput.value;
    const filteredSavedMovies = filters.filterByKeyWord(inputValue, savedMovies)
    setSavedFilteredMovies(filteredSavedMovies)

    if (shortsSavedIsChecked) {
      const shortMoviesSaved = filters.findShorts(filteredSavedMovies)
      setShortMoviesSaved(shortMoviesSaved)
    }
  }

  //обновление профиля
  function handleUpdateProfile(userData) {
    setIsLoading(true)
    mainApi.updateProfileInfo({name: userData.name, email: userData.email})
      .then((res) => {
        setCurrentUser(res.data)
        setIsLoading(false)
        setInfoToolTipType(true);
        setInfoToolTipText(`Данные профиля обновлены.`);
        setIsInfoToolTipOpen(true);
      })
      .catch((err) => {
        showErrorPopup(`При обновлении профиля произошла ошибка.`);
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function findCurrentUserMovies(movies, currentUserId) {
    let currentUserMovies = [];
  
    movies.forEach((movie) => {
      console.log(movie)
        if (movie.owner === currentUserId) {
            currentUserMovies.push(movie);
        }
    })
  console.log(currentUserMovies)
    return currentUserMovies;
  }

  //сохранение фильма
  function likeMovie(movie) {
    console.log(movie)
    mainApi.saveMovie(movie)
    .then(() => {
      mainApi.getSavedMovies().then((res) => {
        const currentUserMovies = findCurrentUserMovies(res.data, currentUser._id)
        setSavedMovies(currentUserMovies);
        setSavedFilteredMovies(currentUserMovies);
      })
    }).catch((err) => {
      console.log(err);
      showErrorPopup();
  })
  }

  //удаление фильма
  function removeMovie(movieId) {
    mainApi.removeMovieFromSaved(movieId)
    .then(() => {
      mainApi.getSavedMovies()
      .then((res) => {
        const currentUserMovies = findCurrentUserMovies(res.data, currentUser._id)
        setSavedMovies(currentUserMovies);
        setSavedFilteredMovies(currentUserMovies);
      }).catch((err) => {
        console.log(err);
    })
    }).catch((err) => {
      console.log(err);
      showErrorPopup();
  })
  }


//получение сохраненных фильмов
  useEffect(() => {
    if (!loggedIn) {
      return
    } else {   
      mainApi.getSavedMovies()
      .then((res) => {
        console.log(res)
        const currentUserMovies = findCurrentUserMovies(res.data, currentUser._id)
        console.log(currentUserMovies)
        setSavedMovies(currentUserMovies);
        setSavedFilteredMovies(currentUserMovies);
        }
      )
      .catch((err) => console.log(err));}

      
 
  }, [loggedIn, currentUser]);

//получение данных профиля && фильмов
  useEffect(() => {
    if (!loggedIn) {
      return
    } else {
    mainApi.getProfileInfo().then((res) => { 
      setCurrentUser(res.data);
    })
    .catch((err) => {
    console.log(err);
    }); 

    moviesApi.getInitialMovies()
    .then((res) => {
      localStorage.setItem('movies', JSON.stringify(res))
    })
    .catch((err) => {
      console.log(err)
    })}
  }, [loggedIn])

  //Переключение короткометражек

function handleShortsChangeMovies() {
  localStorage.setItem('shortsIsChecked', !shortsIsChecked )
  setShortsIsChecked(!shortsIsChecked)
  console.log(!shortsIsChecked)
  const shortMovies = filters.findShorts(filteredMovies)
  console.log(shortMovies)
  setShortMovies(shortMovies);
  localStorage.setItem('shortMovies', JSON.stringify(shortMovies))
}

//переключение сохраненных короткометражек

function handleShortsChangeSaved() {
  setShortsSavedIsChecked(!shortsSavedIsChecked)
  const shortMoviesSaved = filters.findShorts(savedFilteredMovies)
  setShortMoviesSaved(shortMoviesSaved)
}


  useEffect(() => {
    const filteredMovies = localStorage.getItem('filteredMovies')
    const shortMovies = localStorage.getItem('shortMovies')
    const shortsIsChecked = localStorage.getItem('shortsIsCheckedMovies')

    if (filteredMovies) {
      setFilteredMovies(JSON.parse(filteredMovies));
  }

  if (shortMovies) {
    setShortMovies(JSON.parse(shortMovies))
  }

  if(shortsIsChecked) {
    setShortsIsChecked(JSON.parse(shortsIsChecked))
  }
  }, [])  

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className='App'>
          {isLoading && <Preloader/>}
      <Routes>
        <Route element={<Layout loggedIn={loggedIn}/>} >
          <Route path={'/'} element={<Main/>}/>
          <Route path='/movies'
          loggedIn={loggedIn} 
          element={
          <ProtectedRoute 
            loggedIn={loggedIn}
            path='/movies'
            element= {Movies}
            onFindClick = {handleFindClickMovies}
            filteredMovies = {filteredMovies}
            savedMovies={savedMovies}
            removeMovie={removeMovie}
            shortMovies={shortMovies}
            onShorts={handleShortsChangeMovies}
            shortsIsChecked={shortsIsChecked}
            likeMovie={likeMovie}
          />}/>
  
          <Route path='/saved-movies' loggedIn={loggedIn}
           element={
            <ProtectedRoute 
              loggedIn={loggedIn} 
              element={SavedMovies}
              onFindClick = {handleFindClickSaved}
              savedMovies={savedMovies}
              path='/saved-movies'
              savedFilteredMovies={savedFilteredMovies} 
              removeMovie={removeMovie}
              shortMovies={shortMoviesSaved}
              shortsIsChecked={shortsSavedIsChecked}
              onShorts={handleShortsChangeSaved}
              />}/>
        </Route>
     
      <Route path='/profile' 
        element={
        <ProtectedRoute 
        loggedIn={loggedIn} 
        element={ProfileLayout} 
        onClickLogout={handleLogout} 
        handleUpdateProfile={handleUpdateProfile} />
      }/>
      <Route path='/signin' element={loggedIn ? <Navigate to="/" replace/> : <Login handleAuthorize={handleAuthorize}/>}/>
      <Route path='/signup' element={loggedIn ? <Navigate to="/" replace/> : <Register handleRegistration={handleRegistration} isLoading={isLoading}/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <InfoToolTip
      isOpen={isInfoToolTipOpen}
      onClose={closeInfoToolTip}
      infoToolTipType={infoToolTipType}
      infoToolTipText={infoToolTipText}
      />
    </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
