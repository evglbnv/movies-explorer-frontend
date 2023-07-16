import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import "./Layout.css"
import Footer from "../Footer/Footer"

function Layout({loggedIn}) {
    console.log(loggedIn)
    return (
    <>
        <Header loggedIn={loggedIn}/>
        <Outlet/>
        <Footer/>
    </>
    )

}

export default Layout