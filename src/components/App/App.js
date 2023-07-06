import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Main from '../Landing/Main';
import './App.css'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';


function App() {
  return (
    <>
    <div className='App'>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Main/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/saved-movies' element={<SavedMovies/>}/>
        </Route>
      <Route path='/profile' element={
      <>
      <Header/>
      <Profile/>
      </>
      }/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App;
