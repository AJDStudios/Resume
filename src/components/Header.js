import React from "react";
import Navbar from "./Navbar";
import DeskNavbar from "./Desknavbar";
import { Link } from "react-router-dom"

function Header(){
    return(
        <nav className="header">
            <Link to="/" className="site-title">
                AD's Resume
            </Link>

            <Navbar />

            <DeskNavbar />
        </nav>
    )
}

export default Header