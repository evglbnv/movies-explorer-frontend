import './FilterCheckbox.css'

function FilterCheckbox() {
    return(
        <div className="filter-checkbox">
            <input className="filter-checkbox__input" type='checkbox' id="checkbox"/>
            <label htmlFor="checkbox" className='filter-checkbox__label'>Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox