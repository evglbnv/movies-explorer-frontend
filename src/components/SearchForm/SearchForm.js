import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"


function SearchForm() {
    return(
        <div className="search-form">
            <form className="search-form__container">
                <input className="search-form__input" placeholder="Фильм"/>
                <button className="search-form__button">Найти</button>
            </form>
            <FilterCheckbox></FilterCheckbox>
        </div>

    )
}

export default SearchForm
