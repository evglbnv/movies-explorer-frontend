import "./LandingNav.css"

function LandingNav() {
    return(
       <nav className="landingnav"> 
        <ul className="landingnav__links">
            <li className="landingnav__link">О проекте</li>
            <li className="landingnav__link">Технология</li>
            <li className="landingnav__link">Студент</li>
        </ul>
        </nav>
    )
}

export default LandingNav