import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom"

function Header(){
    return(
        <nav className="header">
            <Link to="/" className="site-title">
                AD's Resume
            </Link>

            <Navbar />
        </nav>
    )
}

export default Header