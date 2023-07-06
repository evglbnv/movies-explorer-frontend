import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import "./Layout.css"
import Footer from "../Footer/Footer"

function Layout() {
    return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
    )

}

export default Layout