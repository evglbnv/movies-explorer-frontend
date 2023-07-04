import AboutProject from "../AboutProject/AboutProject"
import Promo from "../Promo/Promo"
import LandingNav from "../LandingNav/LandingNav"
import AboutTechs from "../AboutTech/AboutTech"
import AboutMe from "../AboutMe/AboutMe"

function Main () {
    return (
        <main>
            <Promo/>
            <LandingNav></LandingNav>
            <AboutProject></AboutProject>
            <AboutTechs></AboutTechs>
            <AboutMe></AboutMe>
        </main>
    )
}

export default Main