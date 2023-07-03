import './NavAuth.css'
import {Link} from "react-router-dom"

function NavAuth() {
    return(
        <nav className="nav-auth">
            <Link className='nav-auth__signup'>Регистрация</Link>
            <Link className='nav-auth__signin'>Войти</Link>
        </nav>
    )
}

export default NavAuth
