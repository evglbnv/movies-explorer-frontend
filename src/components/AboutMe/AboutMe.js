import evglbnv from '../../images/evglbnv.jpg'
import './AboutMe.css'

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__heading">Студент</h2>
            <div className="about-me__info">
                <div className="about-me__description">
                    <div>
                        <p className="about-me__name">Евгений</p>
                        <p className="about-me__details">Веб-разработчик, 30 лет</p>
                        <p className="about-me__story">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    </div>
                    <a className="about-me__github-link" href="https://github.com/evglbnv">Github</a>
                </div>
            <img className='about-me__photo' src={evglbnv} alt="фотография студента"></img>
            </div>
            <p className='about-me__portfolio'>Портфолио</p>
            <ul className='about-me__portfolio-links'>
                <li className='about-me__link-item'>
                    <a className='about-me__link-wrapper' target="_blank" rel="noreferrer" href="https://evglbnv.github.io/russian-travel/">
                        <p className='about-me__link-title'>Статичный сайт</p>
                        <span className="about-me__link-arrow">↗</span>
                    </a>
                </li>
                <li className='about-me__link-item'>
                    <a className='about-me__link-wrapper' target="_blank" rel="noreferrer" href="https://evglbnv.github.io/russian-travel/">
                        <p className='about-me__link-title'>Адаптивный сайт</p>
                        <span className="about-me__link-arrow">↗</span>
                    </a>
                </li>
                <li className='about-me__link-item'>
                    <a className='about-me__link-wrapper' target="_blank" rel="noreferrer" href="https://evglbnv.nomoredomains.rocks/">
                        <p className='about-me__link-title'>Одностраничное приложение</p>
                        <span className="about-me__link-arrow">↗</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default AboutMe