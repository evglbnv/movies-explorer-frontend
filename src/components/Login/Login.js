import './Login.css'
import formLink from '../../images/formLink.svg'
import { Link } from "react-router-dom"

function Login() {
    return(
        <main>
            <form className="form">
            <div className="form__info">
                <Link className="form__link" to="/">
                    <img className="form__image" src={formLink} alt="логотип"/>
                </Link>
                <h2 className="form__title">Рады видеть!</h2>
                <label className="form__input-lable">
                    Email
                    <input className="form__input" 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    required />
                </label>
                <label className="form__input-lable">
                    Пароль
                    <input className="form__input"
                     type="password" 
                     name="password" 
                     placeholder="Password" 
                     required
                     minLength="2"
                     maxLength="30"
                     />
                </label>
            </div>
            <div className="form__buttons-section">
                <button className="form__submit-button form__submit-button_login form__submit-button_disabled">Войти</button>
                <p className="form__question">
                    Еще не зарегистрированы?
                    <Link to='/signin' className="form__link">Регистрация</Link>
                </p>
            </div>
            </form>
        </main>
    )
}

export default Login;