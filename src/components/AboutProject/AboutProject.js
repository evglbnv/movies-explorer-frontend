import './AboutProject.css'

function AboutProject() {
    return(
        <section className="about-project">
            <h1 className="about-project__heading">О проекте</h1>
            <div className="about-project__info">
                <p>Дипломный проект включал 5 этапов </p>
                <p>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки. </p>
                <p>На выполнение диплома ушло 5 недель </p>
                <p>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься. </p>
            </div>
            <div className="about-project__graphics">
                <p>1 неделя</p>
                <p>4 недели</p>
                <p>Back-end</p>
                <p>Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject