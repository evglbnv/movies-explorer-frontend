import './AboutTech.css'

function AboutTechs() {
    return (
    <section className='about-techs'>
        <div className='about-techs__container-main'>
            <h2 className='about-techs__header'>Технологии</h2>
            <div className='about-techs__container-content'>
                <div className='about-techs__description'>
                <p className='about-techs__title'>7 технологий</p>
                <p className='about-techs__detailes'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>
                <ul className='about-techs__stacks'>
                    <li className='about-techs__stack'>HTML</li>
                    <li className='about-techs__stack'>CSS</li>
                    <li className='about-techs__stack'>JS</li>
                    <li className='about-techs__stack'>React</li>
                    <li className='about-techs__stack'>Git</li>
                    <li className='about-techs__stack'>Express.js</li>
                    <li className='about-techs__stack'>mongoDB</li>
                </ul>
            </div>
        </div>
    </section>
    )
        
}

export default AboutTechs;