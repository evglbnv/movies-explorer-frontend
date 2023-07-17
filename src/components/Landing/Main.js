import AboutProject from "../AboutProject/AboutProject"
import Promo from "../Promo/Promo"
import LandingNav from "../LandingNav/LandingNav"
import AboutTechs from "../AboutTech/AboutTech"
import AboutMe from "../AboutMe/AboutMe"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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