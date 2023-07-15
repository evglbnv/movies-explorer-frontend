import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import { useEffect, useState } from 'react'


function SearchForm({
    onFindClick, 
    handleInputChange, 
    searchKey, 
    onShorts, 
    shortsIsChecked,
    searchKeySaved
}) {

    const [searchError, setSearchError] = useState(null);
    const [searchFormInput, setSearchFormInput] = useState(null);

    function showError() {
        const searchFormInput = document.querySelector(".search-form__input")
        const showSearchError = document.querySelector('.searchForm__error')

        if (searchFormInput.validity.valueMissing) {
            showSearchError.textContent = "Нужно ввести ключевое слово";
        } else {
            showSearchError.textContent = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        }
        showSearchError.className = "searchForm__error searchForm__error_active"
    }


    function handleSubmit(e) {
        if(!searchFormInput.validity.valid) {
            e.preventDefault();  
            showError();
            return
        }  
        onFindClick(e)
    }
    


 
useEffect(() => {
    const searchFormInput = document.querySelector(".search-form__input")
    const showSearchError = document.querySelector('.searchForm__error')
    setSearchFormInput(searchFormInput)
    setSearchError(searchError)
    showSearchError.className="searchForm__error"
    showSearchError.textContent= "";
}, []) 

    return (
        <div className="search-form">
            <form className="search-form__container" onSubmit={handleSubmit} noValidate>
                <input className="search-form__input" placeholder="Фильм" value={searchKey} onChange={handleInputChange} required name="searchFormInput"/>
                <button className="search-form__button">Найти</button>
            </form>
            <span className='searchForm__error'></span>
            <FilterCheckbox onShorts={onShorts} shortsIsChecked={shortsIsChecked}></FilterCheckbox>
        </div>

    )
}

export default SearchForm
