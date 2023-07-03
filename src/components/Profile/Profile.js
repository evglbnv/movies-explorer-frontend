import {Link} from 'react-router-dom'
import './Profile.css'

function Profile() {
    return(
        <main className="profile">
            <form className='profile__form' name="profile">
                <div>
                    <h2 className='profile__title'>Привет, Евгений!</h2>
                    <label className='profile__form-label'>
                        Имя
                        <input className="profile__input" 
                        type="text" 
                        name="name" 
                        id="name"
                        placeholder='Евгений'
                        required
                        />
                    </label>  
                    <label className='profile__form-label'>
                        Email
                        <input className="profile__input"
                        type="name"
                        name="email"
                        id="email"
                        placeholder='jeilo610@gmail.com'
                        required
                        />
                    </label>
                    <ul className="profile__links-section">
                        <li className="profile__links-item">
                            <button className="profile__edit">Редактировать</button>
                        </li>
                        <li>
                            <Link className="profile__link">Выйти из аккаунта</Link>
                        </li>
                    </ul>
                </div>
            </form>
        </main>
    )
}

export default Profile