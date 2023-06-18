import React from "react"
import './Hero.css'
import hero from '../../images/hero.svg'

function Hero() {
    return (
        <section className="hero">
            <h1 className="hero__text">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={hero} className="hero__image" alt='практикум'></img>
        </section>
    )
}

export default Hero