import AboutProject from "../AboutProject/AboutProject"
import Hero from "../Hero/Hero"
import LandingNav from "../LandingNav/LandingNav"

function Landing () {
    return (
        <div>
            <Hero/>
            <LandingNav></LandingNav>
            <AboutProject></AboutProject>
        </div>
    )
}

export default Landing