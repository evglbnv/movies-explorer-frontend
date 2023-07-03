import AboutProject from "../AboutProject/AboutProject"
import Promo from "../Promo/Promo"
import LandingNav from "../LandingNav/LandingNav"
import AboutTechs from "../AboutTech/AboutTech"
import AboutMe from "../AboutMe/AboutMe"

function Main () {
    return (
        <div>
            <Promo/>
            <LandingNav></LandingNav>
            <AboutProject></AboutProject>
            <AboutTechs></AboutTechs>
            <AboutMe></AboutMe>
        </div>
    )
}

export default Main